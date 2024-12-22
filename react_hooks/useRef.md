## `useRef`的参数与返回值
 > `useRef`用来解决以下两个问题
 > - 获取 DOM 元素或子组件的实例对象
 > - 存储渲染周期之间共享的数据

### 参数 
- `initialValue`
  - `ref` 对象的 `current` 属性的初始值。可以是任意类型的值。这个参数在首次渲染后被忽略。

### 返回值 
> `useRef` 返回一个只有一个属性的对象:

- `current`
  - 初始值为传递的 `initialValue`。之后可以将其设置为其他值。如果将 `ref` 对象作为一个 JSX 节点的 `ref` 属性传递给 React，React 将为它设置 `current` 属性。


## 获取 DOM 元素实例

1. ### 创建 Ref 引用
```jsx
import { useRef } from 'react';

function MyComponent() {
    // 创建 Ref 引用
  const inputRef = useRef(null)
}
    // ...
```
2. ### 绑定 Ref 引用
将 `ref` 对象作为 `ref` 属性传递给想要操作的 DOM 节点的 JSX
> 在 HTML 中，`ref` 属性并不是一个标准的属性。它主要用于 JavaScript 框架和库中，例如 React，用于引用 DOM 元素或组件实例。
```jsx
// ...
// 通过 ref 属性进行绑定
return <input ref={inputRef} />
```

3. ### 调用
```jsx
function handleClick() {
    // inputRef.current返回的是绑定过的那个标签元素
    inputRef.current.focus();
}
```