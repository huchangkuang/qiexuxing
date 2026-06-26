@AGENTS.md

# React 组件编写规范

## 性能 Hook

除非页面已出现可测量的性能问题，否则**不要**使用 `useMemo` 或 `useCallback`。优先保持代码简单可读。

## useEffect

尽量减少 `useEffect` 的依赖项，**最优为单个依赖**。若依赖过多，应重构数据流或拆分子组件，而非堆叠 effect。

## 组件体量（≤ 400 行）

单个组件文件不超过 **400 行**。超出时必须做**真正的模块化拆分**：

- ✅ 拆成独立子组件，每个子组件管理自己的内部状态
- ❌ 假优化：仅把 JS 逻辑抽到 hook，组件只剩 UI 壳（行数减少但复杂度未降）

## 工程约定

- 技术栈：Next.js (App Router) + TypeScript + Tailwind CSS + Zustand
- 项目已初始化 **OpenSpec**（`openspec/`），变更需遵循 spec-driven 流程
- 后续将结合 **Superpower** 并引入**单测**；新功能应预留可测试结构，避免把业务逻辑写死在巨型组件中
