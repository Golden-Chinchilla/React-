- [语法](#语法)
- [步骤](#步骤)
- [示例](#示例)
- [工作原理](#工作原理)
- [为什么使用 `useContext`](#为什么使用-usecontext)
- [使用场景](#使用场景)
- [注意事项](#注意事项)
- [总结](#总结)
---

`useContext` 是 React 中的一个 Hook，用于在函数组件中访问上下文（Context）值。通过它，组件可以在没有显式传递 props 的情况下，直接访问到共享的状态或函数。这使得跨组件传递数据变得更加简单和直观。

### 语法
```javascript
const contextValue = useContext(MyContext);
```

- **contextValue**: 从上下文中获取到的当前值。
- **MyContext**: 你需要访问的上下文对象。

### 步骤

1. **创建 Context**:
   使用 `React.createContext` 创建一个上下文对象，通常会提供一个<span style='color:pink'>**默认值**</span>。
   ```javascript
   const MyContext = React.createContext(defaultValue);
   ```

2. **提供 Context 值**:
   使用 `Context.Provider` 组件来提供上下文的值，通常将其包裹在组件树的较高层级上。
   ```javascript
   <MyContext.Provider value={contextValue}>
     <ChildComponent />
   </MyContext.Provider>
   ```

3. **消费 Context 值**:
   使用 `useContext` 获取当前的上下文值。
   ```javascript
   const value = useContext(MyContext);
   ```

### 示例

```javascript
import React, { createContext, useContext, useState } from 'react';

// 创建一个 Context 对象
const ThemeContext = createContext('light');

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  return (
    // 在 JavaScript 中，当对象的键和值具有相同的名称时，可以使用对象字面量的缩写形式。
    // value 等价于 { theme: theme, toggleTheme: toggleTheme }
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <p>The current theme is {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default App;
```

### 工作原理

1. **创建 Context**: `createContext()` 创建一个上下文，通常会为其提供一个默认值。如果没有提供默认值，`useContext` 会返回 `undefined`。
   
2. **Provider**: `Context.Provider` 组件允许你传递一个值（`value`），它会将该值传递给所有的子组件（或者组件树下的所有使用 `useContext` 的组件）。这个值会覆盖掉默认值。

3. **Consumer**: 在需要访问上下文的地方，使用 `useContext` 来获取值。`useContext` 会返回由最近的 `Provider` 提供的值。

### 为什么使用 `useContext`

- **避免多层级传递 props**: 如果你有很多层组件需要共享某个值或状态，传统的通过 props 层层传递会让代码变得臃肿和难以维护。`useContext` 让你能够跨组件树轻松访问共享的数据。
  
- **全局状态管理**: `useContext` 和 `useReducer` 结合使用时，可以用来实现局部的、组件间共享的状态管理，类似于 Redux。

- **简化代码**: 如果数据只在一小部分组件中需要共享，使用 `useContext` 可以避免使用过多的 props，使代码更加简洁和易于理解。

### 使用场景

- **主题设置**: 比如，当前组件的 UI 样式依赖于主题（如 light/dark 模式）。
- **认证信息**: 在多个页面之间共享用户的登录状态或身份信息。
- **配置或语言**: 在应用程序中共享配置设置、语言环境或区域设置。
- **全局状态管理**: 在不使用 Redux 或其他全局状态管理库的情况下，使用 `useContext` 搭配 `useReducer` 或 `useState` 管理简单的全局状态。

### 注意事项

1. **性能问题**: 每当上下文的值发生变化时，使用该上下文的所有组件都会重新渲染。为了避免不必要的性能损耗，可以使用 `React.memo` 或 `useMemo` 来优化性能。

2. **过度使用**: `useContext` 使得跨层级的状态传递非常方便，但过度使用上下文会使得代码逻辑变得难以理解。应当合理规划应用的状态和上下文的使用，避免将所有数据都放进 Context。

### 总结
`useContext` 是 React 提供的一个方便的 Hook，它使得在函数组件中访问上下文变得简单快捷。通过与 `Context.Provider` 配合使用，可以让多个组件共享数据，而不需要通过 props 传递。这对于构建可维护的、共享状态的应用程序非常有用。