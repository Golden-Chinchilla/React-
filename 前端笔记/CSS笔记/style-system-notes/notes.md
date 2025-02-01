# css、cssinjs、tailwindcss 核心用法与进阶，字节系产品样式方案评审与最佳实践

## 除了常规 css，还有哪些样式体系方案，详细说明各自核心概念与优缺点

- css
    - 简单好理解
    - 缺点：复用性低、容易冲突、无法支持动态语法
- sass、less
    - 变量定义、编译器
    - 学习曲线，需要进一步封装，css hack（兼容性、厂商前缀）
    - postcss
- css module
    - 语法跟 css 一样，没有额外学习成本
    - ts 类型支持不完善，定制化、复用性高需求无法满足
- atomic css/utility-first css（tailwindcss）
    - 非常快，编译时，对于运行时的开销非常小
    - 不写 css 全部写类型有同学看起来不舒服
- cssinjs（style-componensts、emotion）
    - 运行时，无需编译，复用性高
    - 运行时反噬性能差
- scoped css
    - 简单好理解，解决冲突问题
    - 复用性差
- BEM，写法，不是一个技术 Block、Element、Modifier，header-sdf__sdfsdf

## 请举例 css、cssinjs、tailwindcss 的使用技巧与方案价值体现

### module css

- 变量复用
    css3 变量 --primary: pink，tokens
- BEM 命名规范，header-sdf__sdfsdf
- Flex、Grid 布局


```css
:root {
    --color-primary: pink;
    --bg-primary: white;

    --margin: 2px;
    --padding: 2px;
}
```

### cssinjs

- 动态样式
- 样式隔离，类名自动生成
- 嵌套规则

### tailwindcss

- 原子化设计，归为类名
- 样式集中管理，tailwind.config.js
- 无需编写 css


假设我现在有一个 ssr 服务端渲染产品，你来选样式方案，选哪个？1/2/3

## 如果你是前端 Leader，在项目架构初期，如何考虑选择合适的样式体系方案

### 考虑点

- 项目特点：团队规模、交付周期、性能要求
- 技术适配：现有的技术栈和工具链，Vue3
- 团队能力：样式框架技术的熟悉程度
- 未来拓展：模块化、响应式、动态样式

样式方案技术评审
CSS 与 Module CSS 的基础与进阶

核心概念
1. 选择器与优先级计算规则：
  - 理解层叠规则，避免优先级混乱。
2. 常用布局方案：
  - Flexbox：一维布局，适用于弹性盒子模型。
  - Grid：二维布局，适合复杂页面设计。
3. 动画与过渡：
  - 利用 transition 和 @keyframes 实现交互效果。

高级技巧
1. 使用变量与计算属性：
  - CSS变量（--color-primary）实现主题统一。
  - 动态计算属性提升样式复用性。
2. 高效媒体查询与响应式设计：
  - 使用 @media 定义断点，适配不同屏幕。
3. 命名规范对比：
  - BEM 提高可读性，适合团队协作。
  - 工具化命名（如原子类）更高效但可读性较低。

性能优化
1. 避免重排与重绘：
  - 减少 position: absolute 或 float 引发的复杂计算。
2. 优化工具：
  - 使用 contain 限制渲染范围。
  - 利用 will-change 提前优化 GPU 加速。


CSS-in-JS 的核心用法与优劣分析

背景与发展
- 为什么需要 CSS-in-JS？
  - 随着组件化的普及，CSS-in-JS 提供了动态、模块化的样式管理。
- 主流框架对比：
  - Styled-Components：直观、易用，性能较好。
  - Emotion：灵活性高，支持 TypeScript。
  - JSS：适合复杂定制场景。

核心特性
1. 动态样式：
  - 基于 props 或状态动态生成样式。
2. 嵌套与继承：
  - 模仿传统 CSS 的嵌套规则，简化代码结构。
3. Scoped 样式：
  - 避免全局污染，提升模块化。

最佳实践
1. 性能控制：
  - 避免频繁注入动态样式。
2. 类型安全：
  - 结合 TypeScript 定义样式属性。
3. 主题系统：
  - 实现基于主题的样式切换。

限制与挑战
- 性能问题：大规模项目中可能引入注入开销。
- 兼容性：与传统 CSS 或样式库结合需要额外适配。


TailwindCSS 的核心用法与进阶

核心理念
- 原子化 CSS 通过预定义类名（如 bg-blue-500）快速实现设计。
- 减少自定义样式，提升生产效率。

基础使用
1. 配置文件自定义：
  - tailwind.config.js 定义主题颜色、断点等。
2. 常用类：
  - 排版：text-center、font-bold。
  - 间距：p-4、m-2。
  - 颜色：bg-red-500、text-gray-700。

高级用法
1. 动态样式构建：
  - 使用 @apply 提取复用的样式逻辑。
2. 复杂交互：
  - 配置 variants 支持如 hover、focus 等状态样式。
3. 性能优化：
  - 利用 JIT 编译只生成使用的类。

在团队中的实践
1. 结合设计系统：
  - Tailwind 的类名可与组件库风格统一。
2. 代码风格：
  - 通过类名排序、工具链规范可提升可读性。