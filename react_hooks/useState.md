## 关于 `State` 的一些注意事项
- 在React中，`State` 应该被视为**只读**。
- 当需要修改 `State` 中的值时，不应该理解成修改，而应理解成**替换**（创建一个新的值，然后通过 `State` 的设置函数实现替换/覆盖）。每当替换后，就会触发视图的重新渲染。
- 当需要修改 `State` 中的数组时，**很多数组的原生方法是不能直接用的**。
```jsx
const [item, setItem] = useState(0)
```

React中要定义一个响应式数据（`State`）需要用到 `useState`，之后在修改响应式数据的时候都得经由 `setItem`函数来处理。尤其是在修改`数组`或`对象`类型的数据时，并不能采用很多原生的js方法。
这里，[官方文档](https://zh-hans.react.dev/learn/updating-arrays-in-state#updating-arrays-without-mutation)的案例写的比较精简了，可直接参考。