<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# qiexuxing 个人主页

## 技术栈

Next.js (App Router) + TypeScript + Tailwind CSS + Zustand

## React 编码规范

1. **性能 Hook**：除非页面出现可测量的性能问题，否则尽量不使用 `useMemo` 或 `useCallback`。
2. **useEffect**：尽量减少依赖项，最优为单个依赖。依赖过多时应重构数据流或拆分子组件。
3. **组件体量（≤ 400 行）**：超出时必须拆成独立子组件，每个子组件各自管理内部状态。
   - ❌ 禁止假优化：仅把 JS 逻辑抽到 hook，组件只剩 UI 壳。
4. **工程流程**：项目已初始化 OpenSpec（`openspec/`），后续将结合 Superpower 并引入单测；新代码应保持可测试性。

## Stitch 设计稿

Stitch MCP 配置位于 `.cursor/mcp.json`。使用前设置环境变量 `STITCH_API_KEY`（参考 `.env.example`）。
