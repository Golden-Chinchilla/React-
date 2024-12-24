# CSS 属性分类

CSS 属性可以按照功能和作用分为以下几个大类，方便记忆和学习：

---

## 1. 布局相关属性
这些属性控制元素在页面上的布局和位置。

### 盒模型：
- `width`, `height`, `max-width`, `max-height`, `min-width`, `min-height`
- `margin`, `padding`, `border`, `box-sizing`

### 定位：
- `position`, `top`, `right`, `bottom`, `left`, `z-index`

### 浮动与清除：
- `float`, `clear`
  - 通过`浮动`来实现布局仅仅是为了兼容低版本的IE浏览器，这种布局方案现在来看可以直接放弃了，现在的布局就通过`Flexbox`和`Grid`实现
  - `浮动`在当下唯一的价值就是实现文字围绕图片的效果

### 显示与可见性：
- `display`, `visibility`, `overflow`, `clip-path`

### Flexbox 布局：
- `display: flex`
- `flex`, `flex-grow`, `flex-shrink`, `flex-basis`
- `justify-content`, `align-items`, `align-content`, `align-self`, `order`

### Grid 布局：
- `display: grid`
- `grid-template-rows`, `grid-template-columns`, `grid-gap`, `grid-area`
- `justify-items`, `align-items`, `place-items`

---

## 2. 文本与字体相关属性
这些属性用于控制文字的样式和排版。

### 字体：
- `font-family`, `font-size`, `font-weight`, `font-style`, `font-variant`, `line-height`

### 文本样式：
- `color`, `text-align`, `text-indent`, `text-transform`, `text-decoration`, `letter-spacing`, `word-spacing`
- `white-space`, `direction`

### 阴影：
- `text-shadow`

---

## 3. 背景相关属性
这些属性用于设置背景的样式。

- `background-color`, `background-image`, `background-position`, `background-size`
- `background-repeat`, `background-attachment`, `background-clip`, `background-origin`

---

## 4. 边框与装饰相关属性
这些属性控制边框和装饰效果。

### 边框：
- `border`, `border-width`, `border-style`, `border-color`
- `border-radius`, `border-image`

### 阴影：
- `box-shadow`

### 轮廓：
- `outline`, `outline-width`, `outline-style`, `outline-color`, `outline-offset`

---

## 5. 动画与过渡相关属性
这些属性用于控制元素的动态效果。

### 过渡：
- `transition`, `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`

### 动画：
- `animation`, `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`
- `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, `animation-play-state`

---

## 6. 变换相关属性
这些属性用于对元素进行变形。

- `transform`, `transform-origin`
- 常用值：`translate`, `rotate`, `scale`, `skew`

---

## 7. 响应式与媒体查询
这些属性或规则适用于响应式设计。

### 媒体查询：
- `@media`, `@supports`, `@container`

### 适配单位：
- `vh`, `vw`, `%`, `em`, `rem`

---

## 8. 表单相关属性
用于样式化表单元素。

### `input` 和 `textarea` 样式：
- `appearance`, `resize`
- `caret-color`, `outline`, `box-shadow`

### `label` 样式：
- `pointer-events`

---

## 9. 内容与列表相关属性
用于控制列表和内容的显示方式。

### 列表：
- `list-style`, `list-style-type`, `list-style-position`, `list-style-image`

### 内容：
- `content`, `quotes`

---

## 10. 其他
一些常见但不容易分类的属性。

- `cursor`（鼠标样式）
- `clip`（裁剪区域）
- `filter`（滤镜效果）
- `opacity`（透明度）
- `pointer-events`（鼠标事件控制）

---
