- [`useEffect` 的基本用法：](#useeffect-的基本用法)
  - [主要特点：](#主要特点)
- [常见用法：](#常见用法)
- [总结：](#总结)
---

官方的两句说明：
- Effect 通常用于暂时“跳出”React并与一些外部系统进行同步。
- `useEffect` 是一个 React Hook，它允许你将组件与外部系统同步。

> 和Vue中的生命周期函数 `mounted()`很像，但不局限于此。

`useEffect` 是 React 中的一个 Hook，用于在组件渲染后执行副作用操作。副作用操作包括数据获取、订阅事件、手动修改 DOM 等。

### `useEffect` 的基本用法：
```javascript
useEffect(() => {
  // 这里是副作用操作
}, [dependencies]);
```

#### 主要特点：
1. **副作用函数**：
   - `useEffect` 接受两个参数：一个回调函数（副作用函数），和一个依赖数组（`dependencies`）。
   - 副作用函数会在每次渲染后执行，或者仅在依赖项发生变化时执行。

2. **依赖数组**：
   - 如果传递了依赖数组，`useEffect` 只会在数组中的某个值发生变化时才执行副作用函数。
   - 如果依赖数组为空（`[]`），`useEffect` 只会在组件挂载和卸载时执行一次。

3. **清理副作用**：
   - `useEffect` 可以返回一个清理函数，用于清理副作用，如取消订阅、清理定时器等。
   - 清理函数会在组件卸载时执行，或者在下一次副作用函数执行前执行。

### 常见用法：
1. **基本副作用**：
   ```javascript
   useEffect(() => {
     console.log('Component rendered');
   }, []);  // 只在组件挂载时执行
   ```

2. **根据状态或属性变化执行副作用**：
   ```javascript
   useEffect(() => {
     console.log('Component updated');
   }, [someState]);  // 只在 `someState` 改变时执行
   ```

3. **清理副作用**：
   ```javascript
   useEffect(() => {
     const timer = setTimeout(() => {
       console.log('Timeout');
     }, 1000);

     return () => {
       clearTimeout(timer);  // 清理定时器
     };
   }, []);  // 只在组件挂载和卸载时执行
   ```

4. **依赖多个值**：
   ```javascript
   useEffect(() => {
     console.log('Component updated or prop1 or prop2 changed');
   }, [prop1, prop2]);  // 在 `prop1` 或 `prop2` 改变时执行
   ```

### 总结：
- `useEffect` 是 React 用来处理副作用的 Hook，可以在组件挂载、更新或卸载时执行副作用操作。
- 可以通过依赖数组控制副作用执行的时机。
- 使用清理函数来处理需要清理的副作用，如订阅、定时器等。