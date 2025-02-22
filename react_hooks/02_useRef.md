- [`useRef` Hook 的功能](#useref-hook-的功能)
- [`useRef` 的参数与返回值](#useref-的参数与返回值)
  - [原理](#原理)
  - [参数](#参数)
  - [返回值](#返回值)
- [使用场景](#使用场景)
  - [1. 获取 DOM 元素实例](#1-获取-dom-元素实例)
    - [示例：](#示例)
  - [2. 存储渲染周期之间共享的数据](#2-存储渲染周期之间共享的数据)
- [高级用法](#高级用法)
  - [`forwardRef`](#forwardref)
  - [`useImperativeHandle`](#useimperativehandle)

---
## `useRef` Hook 的功能

`useRef` 是 React 中的一个 Hook，用于创建一个可变的引用对象（ref），它在组件的生命周期内保持不变。通常用于以下场景：

1. **访问 DOM 元素**：可以通过 `useRef` 获取对 DOM 元素的直接引用。
2. **保持状态**：保存可变数据，不会触发重新渲染。适用于存储跨渲染周期不需要更新界面的数据。

**总结**：`useRef` 用于持久化某个值，或者直接访问 DOM 元素，而不影响组件的渲染。

---

## `useRef` 的参数与返回值

- 在 React 中，使用 `useRef` 可以创建一个可变的 `ref` 引用，允许你访问 DOM 节点或者在组件之间存储任意的可变值。
- `useRef` 本质上是提供一个容器，容器中存放的内容可以在组件的多次渲染之间进行保留，以及实现对 DOM 节点的操作。

---

### 原理

- `useRef()` 只在组件首次渲染的时候被创建。
- 当组件重新渲染时，不会重复创建 `ref` 对象。

**总结**：当你希望组件“记住”一些信息，但是不希望这些信息触发重新渲染时，可以使用 `ref`，它像一个秘密的“口袋”，用于在组件中存储信息。

---

### 参数

- **`initialValue`**：`ref` 对象的 `current` 属性的初始值。可以是任意类型的值。这个参数在首次渲染后被忽略。

---

### 返回值

`useRef` 返回一个只有一个属性的对象：

- **`current`**：初始值为传递的 `initialValue`，之后可以将其设置为其他值。如果将 `ref` 对象作为一个 JSX 节点的 `ref` 属性传递给 React，React 将为它设置 `current` 属性。

---

## 使用场景

### 1. 获取 DOM 元素实例

> 用于让一个节点获取焦点，滚动到它或测量它的尺寸和位置。

#### 示例：

1. **创建 Ref 引用**

```jsx
import { useRef } from 'react';

function MyComponent() {
    const inputRef = useRef(null);
}
```

2. **绑定 Ref 引用**

将 `ref` 对象作为 `ref` 属性传递给想要操作的 DOM 节点的 JSX。

```jsx
return <input ref={inputRef} />;
```

3. **调用**

```jsx
function handleClick() {
    inputRef.current.focus(); // 获取并聚焦 input 元素
}
```

---

### 2. 存储渲染周期之间共享的数据

`useRef` 还可用于存储跨渲染周期的数据，避免触发额外的渲染。

---

## 高级用法

### `forwardRef`

> 用于让父组件获取子组件中某个元素的引用。

### `useImperativeHandle`

> 用于控制 `ref` 的暴露程度，允许你在子组件中定制 `ref` 的行为。
