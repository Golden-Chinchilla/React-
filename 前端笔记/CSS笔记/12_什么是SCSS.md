- [1. **Sass 简介**](#1-sass-简介)
- [2. **`.scss` 的特点**](#2-scss-的特点)
- [3. **Sass 的核心功能**](#3-sass-的核心功能)
  - [1) **变量**](#1-变量)
  - [2) **嵌套**](#2-嵌套)
  - [3) **混合（Mixins）**](#3-混合mixins)
  - [4) **继承**](#4-继承)
  - [5) **函数**](#5-函数)
- [4. **如何使用 `.scss` 文件**](#4-如何使用-scss-文件)
- [5. **使用场景**](#5-使用场景)
- [6. **对比普通 CSS**](#6-对比普通-css)
---

`.scss` 是 **Sass**（Syntactically Awesome Stylesheets）的文件扩展名之一，Sass 是一种 **CSS预处理器**，可以扩展 CSS 的功能，使样式开发更加高效和结构化。

### 1. **Sass 简介**
- **增强功能**：Sass 在普通 CSS 的基础上，添加了变量、嵌套规则、混合（mixins）、继承、函数等特性。
- **两种语法**：
  - **Sass（无花括号和分号）**：文件扩展名是 `.sass`，使用缩进表示层级。
  - **SCSS（Sassy CSS）**：文件扩展名是 `.scss`，完全兼容 CSS 语法，语法更接近传统 CSS，使用花括号和分号。

### 2. **`.scss` 的特点**
- **完全兼容 CSS**：普通 CSS 代码可以直接放入 `.scss` 文件中，无需修改。
- **增强的语法**：提供更强大的功能来管理样式，提高代码的复用性和可维护性。

---

### 3. **Sass 的核心功能**
以下是 Sass 的一些核心功能，所有这些都可以通过 `.scss` 文件实现：

#### 1) **变量**
使用 `$` 定义变量，方便复用。
```scss
$primary-color: #3498db;

.button {
  background-color: $primary-color;
  color: white;
}
```

#### 2) **嵌套**
支持嵌套规则，清晰表达层级关系。
```scss
.nav {
  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
    }
  }
}
```

#### 3) **混合（Mixins）**
类似函数，定义可复用的样式块。
```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  @include flex-center;
  height: 100px;
  width: 100px;
}
```

#### 4) **继承**
使用 `@extend` 共享样式。
```scss
%shared-style {
  font-family: Arial, sans-serif;
  color: #333;
}

.header {
  @extend %shared-style;
  font-size: 24px;
}

.footer {
  @extend %shared-style;
  font-size: 12px;
}
```

#### 5) **函数**
内置函数和自定义函数。
```scss
$base-font-size: 16px;

.body {
  font-size: lighten($base-font-size, 10%);
}
```

---

### 4. **如何使用 `.scss` 文件**
1. **安装 Sass 编译器**：
   如果使用现代工具链（如 Webpack 或 Vite），可以通过 `sass-loader` 自动编译。
   - 使用 npm 安装：
     ```bash
     npm install sass
     ```

2. **引入 `.scss` 文件**：
   在 React 项目中，可以直接引入 `.scss` 文件：
   ```jsx
   import './styles.scss';
   ```

3. **编译为 CSS**：
   浏览器无法直接解析 `.scss`，需要编译为普通 CSS。开发工具会自动完成这一步。

---

### 5. **使用场景**
- **大中型项目**：通过变量、嵌套和模块化提高代码可维护性。
- **组件化开发**：结合 React 等框架，可以更高效地管理组件样式。
- **复杂样式需求**：需要动态生成样式或高复用性时，Sass 是理想选择。

---

### 6. **对比普通 CSS**
| 功能             | 普通 CSS | SCSS        |
| ---------------- | -------- | ----------- |
| 变量             | ❌        | ✅           |
| 嵌套             | ❌        | ✅           |
| 混合（复用功能） | ❌        | ✅           |
| 继承             | ❌        | ✅           |
| 模块化管理       | ❌        | ✅（更方便） |

使用 `.scss` 文件可以显著提升开发效率，尤其适合复杂样式的项目。