## `useRef`的参数与返回值
> - 在React中，使用`useRef`可以创建一个可变的`ref`引用，允许你访问DOM节点或者在组件之间存储任意的可变值。
> - `useRef`本质上是提供一个容器，容器中存放的内容可以在组件的多次渲染之间进行保留，以及实现对DOM节点的操作。

---
### <span style='color:pink'>原理</span>
- <span style='color:pink'>`useRef()`只在组件首次渲染的时候被创建
- <span style='color:pink'>当组件重新渲染的时候，不会重复创建`ref`对象
> <span style='color:pink'>所以，当你希望组件“记住”一些信息，但是你不希望这些信息触发重新 render 的时候，你可以使用 `ref`，它像一个秘密的“口袋”，用于在组件中存储信息。
---
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

## 存储渲染周期之间共享的数据
