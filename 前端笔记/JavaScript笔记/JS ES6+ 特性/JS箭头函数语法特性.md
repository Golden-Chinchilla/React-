>为什么使用花括号就需要显示地返回，使用圆括号就不用，这是什么机制吗?

这是 JavaScript 箭头函数的语法特性，让我详细解释：

1. 箭头函数有两种主要的语法形式：

```javascript
// 形式1：简洁体（Concise body）- 使用圆括号
const func1 = () => (expression)

// 形式2：块体（Block body）- 使用花括号
const func2 = () => {
  // 代码块
  return expression
}
```

2. 区别在于：
- 圆括号 `()` 表示这是一个表达式（expression），表达式的值会被自动返回
- 花括号 `{}` 表示这是一个代码块（block），代码块需要显式使用 `return` 来返回值

举些例子来说明：

```javascript
// 使用圆括号 - 表达式会自动返回
const add1 = (a, b) => (a + b)  // 自动返回 a + b 的值

// 使用花括号 - 需要显式返回
const add2 = (a, b) => {
  return a + b    // 需要显式写 return
}

// 在 map 中的应用
const numbers = [1, 2, 3]

// 使用圆括号 - 简洁写法
const doubled1 = numbers.map(num => (num * 2))

// 使用花括号 - 需要显式返回
const doubled2 = numbers.map(num => {
  return num * 2
})
```

3. 为什么会有这种设计？
- 圆括号形式（简洁体）主要用于简单的单行表达式，使代码更简洁
- 花括号形式（块体）用于需要多行代码或复杂逻辑的情况，提供更多的灵活性

4. 在 React 中的常见用法：

```jsx
// 简单渲染用圆括号
const SimpleComponent = () => (
  <div>Hello World</div>
)

// 需要额外逻辑用花括号
const ComplexComponent = () => {
  const name = "World"
  return (
    <div>Hello {name}</div>
  )
}
```

这种设计其实是为了在简单和复杂场景之间取得平衡：
- 简单场景用圆括号，代码更简洁
- 复杂场景用花括号，逻辑更清晰

一个小技巧：如果你不确定用哪种形式，使用花括号 + return 永远是安全的选择，只是会多写几个字符而已。