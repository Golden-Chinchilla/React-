- [关于 `State` 的一些注意事项](#关于-state-的一些注意事项)
- [数组](#数组)
- [对象](#对象)

## 关于 `State` 的一些注意事项
- 在React中，`State` 应该被视为**只读**。
- <span style='color:pink'>当你想要修改 `State` 中的值时，不应该理解成修改，而应理解成替换（创建一个新的值，然后通过 `State` 的设置函数实现替换/覆盖）。每当替换后，就会触发视图的重新渲染。<span>
- 当需要修改 `State` 中的数组时，**很多数组的原生方法是不能直接用的**。
```jsx
// useState 函数返回一个数组，其中：
// 下标为 0 的元素是状态数据
// 下标为 1 的元素是设置状态数据的函数
const [item, setItem] = useState(0)
```

React中要定义一个响应式数据（`State`）需要用到 `useState`，之后在修改响应式数据的时候都得经由 `setItem`函数来处理。尤其是在修改`数组`或`对象`类型的数据时，并不能采用很多原生的 js 方法。
这里，[官方文档](https://zh-hans.react.dev/learn/updating-arrays-in-state#updating-arrays-without-mutation)的案例写的比较精简了，可直接参考。

## 数组
- ### 向数组中添加元素（增）
```jsx
// 摘自自己的 todo list 练习代码
const [itemList, setItemList] = useState([])
// itemList中的元素为对象：[{}, {}, {}, ...]
// todoObj为一个对象：{}
const addItem = (todoObj) => {
setItemList([...itemList, todoObj])
}
```
- ### 向数组中插入元素（增）
    暂时还未练习到这，后续补上。
- ### 从数组中删除元素（删）
```jsx
const [itemList, setItemList] = useState([])
// 从数组中删除一个元素最简单的方法就是将它过滤出去。换句话说，你需要生成一个不包含该元素的新数组。这可以通过 filter 方法实现
const delItem = (todoObj) => {
setItemList(itemList.filter(item => item.uid !== todoObj.uid))
}
```

- ### 替换数组中的元素（改）
    要替换一个元素，请使用 `map` 创建一个新数组。在你的 `map` 回调里，第二个参数是元素的索引。使用索引来判断最终是返回原始的元素（即回调的第一个参数）还是替换成其他值

## 对象
- ### 修改对象中的一个属性
  通过`...`展开对象属性，然后覆盖要修改的属性
```jsx
const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
})

setPerson({
  ...person, // 展开 person 中的所有字段
  firstName: e.target.value // 覆盖 firstName 字段
})
```