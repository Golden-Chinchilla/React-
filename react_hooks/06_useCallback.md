- [基本用法](#基本用法)
- [参数说明](#参数说明)
- [使用场景](#使用场景)
- [注意事项](#注意事项)
---
> 如果一个组件（最外层的函数）中定义了一个函数（局部函数），当这个组件重新渲染的时候，函数也会被重新定义。这里的函数重新定义指的是函数的内存地址发生了变化（JS基础知识，函数执行一次，其中的局部变量就会创建/销毁）。

`useCallback` 是 React 提供的一个 Hook，用于缓存函数实例，避免在组件重新渲染时创建新的函数引用，从而优化性能。

## 基本用法

```jsx
import React, { useCallback } from 'react';

function MyComponent() {
  const handleClick = useCallback(() => {
    // 处理点击事件的逻辑
  }, []); // 依赖项数组为空，表示函数只在初次渲染时创建一次

  return <button onClick={handleClick}>点击我</button>;
}
```

## 参数说明

- `fn`：需要缓存的函数。
- `dependencies`：依赖项数组，只有当数组中的某个值发生变化时，`useCallback` 才会重新创建函数。

## 使用场景

1. **传递回调函数给子组件：** 当父组件将回调函数传递给子组件时，使用 `useCallback` 可以确保子组件接收到的函数引用在父组件重新渲染时保持一致，避免不必要的子组件重新渲染。

   ```jsx
   import React, { useCallback } from 'react';

   const ChildComponent = React.memo(({ onClick }) => {
     console.log('子组件渲染');
     return <button onClick={onClick}>点击我</button>;
   });

   function ParentComponent() {
     const handleClick = useCallback(() => {
       console.log('按钮被点击');
     }, []);

     return <ChildComponent onClick={handleClick} />;
   }
   ```

   在上述示例中，`ChildComponent` 使用 `React.memo` 包裹，以避免不必要的重新渲染。`handleClick` 函数通过 `useCallback` 缓存，确保其引用在父组件重新渲染时保持一致，从而避免 `ChildComponent` 的不必要渲染。

2. **作为 `useEffect` 或 `useMemo` 的依赖项：** 当函数作为依赖项传递给 `useEffect` 或 `useMemo` 时，使用 `useCallback` 可以确保函数引用的稳定性，避免不必要的副作用或重新计算。

   ```jsx
   import React, { useCallback, useEffect } from 'react';

   function MyComponent() {
     const fetchData = useCallback(() => {
       // 获取数据的逻辑
     }, []);

     useEffect(() => {
       fetchData();
     }, [fetchData]);

     return <div>组件内容</div>;
   }
   ```

## 注意事项

- **避免过度优化：** 不要在每个函数上都使用 `useCallback`，只有在需要确保函数引用稳定性时才使用，以免引入不必要的复杂性。

- **依赖项数组：** 确保将函数内部使用到的所有变量添加到依赖项数组中，以避免闭包导致的潜在问题。

- **与 `React.memo` 配合使用：** `useCallback` 与 `React.memo` 配合使用时，可以有效避免子组件的重复渲染。

通过合理使用 `useCallback`，可以优化 React 应用的性能，减少不必要的渲染和计算。 