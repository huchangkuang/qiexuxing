#!/usr/bin/env bash
# qiexuxing 生产部署脚本（git pull + 构建 + pm2）
# 首次部署前请确保：
#   1. 服务器已安装 Node 20+、npm、pm2、git
#   2. Nginx 已反向代理到本服务端口（默认 3022，可用 PORT 覆盖）
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

BRANCH="${DEPLOY_BRANCH:-main}"

log() { printf '[deploy] %s\n' "$*"; }

log "开始部署 qiexuxing（分支: ${BRANCH}）"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "错误: 当前目录不是 git 仓库" >&2
  exit 1
fi

log "拉取最新代码..."
git fetch origin "$BRANCH"
git checkout "$BRANCH"
git pull --ff-only origin "$BRANCH"

log "安装依赖..."
npm ci

log "构建..."
npm run build

if [[ ! -d .next ]]; then
  echo "错误: 构建产物不存在 .next 目录" >&2
  exit 1
fi

log "重启 pm2 进程..."
if pm2 describe qiexuxing >/dev/null 2>&1; then
  pm2 reload ecosystem.config.cjs --update-env
else
  pm2 start ecosystem.config.cjs
fi

pm2 save

log "部署完成"
pm2 status qiexuxing
