- [基本用法](#基本用法)
- [参数说明](#参数说明)
- [使用场景](#使用场景)
- [注意事项](#注意事项)
---

`useMemo` 是 React 提供的一个 Hook，用于缓存计算结果，避免在组件重新渲染时进行不必要的重复计算，从而优化性能。

## 基本用法

```jsx
import React, { useMemo } from 'react';

function MyComponent({ a, b }) {
  const computedValue = useMemo(() => {
    // 复杂计算逻辑
    return a + b;
  }, [a, b]); // 仅当 a 或 b 发生变化时，才重新计算

  return <div>{computedValue}</div>;
}
```

## 参数说明

- `fn`：需要缓存的计算函数。
- `dependencies`：依赖项数组，只有当数组中的某个值发生变化时，`useMemo` 才会重新计算。

## 使用场景

1. **计算密集型操作：** 当组件内部存在复杂的计算逻辑，且这些计算结果在多次渲染中保持不变时，使用 `useMemo` 可以避免每次渲染时都重新计算，提升性能。

   ```jsx
   import React, { useMemo } from 'react';

   function ExpensiveComponent({ data }) {
     const processedData = useMemo(() => {
       // 假设这是一个复杂的计算过程
       return data.map(item => item * 2);
     }, [data]);

     return (
       <ul>
         {processedData.map(item => (
           <li key={item}>{item}</li>
         ))}
       </ul>
     );
   }
   ```

   在上述示例中，`processedData` 只有在 `data` 发生变化时才会重新计算，否则会使用缓存的结果。

2. **避免不必要的渲染：** 当组件的某些部分依赖于复杂计算的结果，而这些结果在多次渲染中保持不变时，使用 `useMemo` 可以避免这些部分的重复渲染。

   ```jsx
   import React, { useMemo } from 'react';

   function ParentComponent({ items }) {
     const itemCount = useMemo(() => items.length, [items]);

     return (
       <div>
         <h1>Item Count: {itemCount}</h1>
         <ChildComponent items={items} />
       </div>
     );
   }
   ```

   在这个例子中，`itemCount` 只有在 `items` 发生变化时才会重新计算，避免了不必要的计算和渲染。

## 注意事项

- **避免过度优化：** 不要在每个计算上都使用 `useMemo`，只有在计算开销较大时才使用，以免引入不必要的复杂性。

- **依赖项数组：** 确保将计算函数内部使用到的所有变量添加到依赖项数组中，以避免闭包导致的潜在问题。

- **与 `React.memo` 配合使用：** `useMemo` 与 `React.memo` 配合使用时，可以有效避免子组件的重复渲染。

通过合理使用 `useMemo`，可以优化 React 应用的性能，减少不必要的渲染和计算。 