- [1. **`useCallback`**](#1-usecallback)
- [2. **`useMemo`**](#2-usememo)
- [**关键区别**](#关键区别)
- [**示例对比**](#示例对比)
  - [使用`useCallback`优化函数：](#使用usecallback优化函数)
  - [使用`useMemo`优化计算值：](#使用usememo优化计算值)
- [**何时使用？**](#何时使用)
- [**注意事项**](#注意事项)
---
在React中，`useCallback`和`useMemo`都是用于性能优化的Hook，但它们的核心区别在于**缓存的目标不同**：

### 1. **`useCallback`**
- **作用**：缓存**函数实例**，避免因父组件渲染导致函数重新创建，从而减少子组件的不必要渲染（配合`React.memo`使用）。
- **语法**：
  ```jsx
  const memoizedCallback = useCallback(() => {
    // 函数逻辑
  }, [dependencies]);
  ```
- **适用场景**：
  - 将函数作为props传递给子组件，且子组件通过`React.memo`优化。
  - 函数被依赖数组（如`useEffect`）引用，且需要保持引用不变。

### 2. **`useMemo`**
- **作用**：缓存**计算结果**，避免重复执行复杂计算。
- **语法**：
  ```jsx
  const memoizedValue = useMemo(() => {
    return computeExpensiveValue(a, b);
  }, [a, b]);
  ```
- **适用场景**：
  - 计算开销较大的值（如数据转换、复杂运算）。
  - 避免因组件重新渲染导致重复计算。

---

### **关键区别**
| 特性         | `useCallback`             | `useMemo`                     |
| ------------ | ------------------------- | ----------------------------- |
| **返回值**   | 缓存函数                  | 缓存函数返回的值              |
| **优化目标** | 函数引用                  | 计算结果                      |
| **等效于**   | `useMemo(() => fn, deps)` | `useCallback`的扩展（缓存值） |

---

### **示例对比**
#### 使用`useCallback`优化函数：
```jsx
const Child = React.memo(({ onClick }) => {
  // 子组件仅在onClick引用变化时重新渲染
});

function Parent() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []); // 依赖为空，函数始终不变
  return <Child onClick={handleClick} />;
}
```

#### 使用`useMemo`优化计算值：
```jsx
function Component({ items }) {
  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]); // items变化时才重新计算
  return <div>Total: {total}</div>;
}
```

---

### **何时使用？**
- **用`useCallback`**：需要保持函数引用稳定（如避免子组件重复渲染、依赖稳定的函数引用）。
- **用`useMemo`**：需要缓存计算结果，避免重复执行高开销运算。

### **注意事项**
- **不要滥用**：记忆化本身有内存和计算成本，仅在必要时使用。
- **依赖数组**：确保依赖项正确，否则可能导致闭包问题或过期值。
- **`useMemo`不一定总触发**：React可能选择“忘记”某些值以释放内存（极端情况）。