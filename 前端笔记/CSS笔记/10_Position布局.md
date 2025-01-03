- [1. **相对定位 (relative positioning)**](#1-相对定位-relative-positioning)
- [2. **绝对定位 (absolute positioning)**](#2-绝对定位-absolute-positioning)
- [3. **固定定位 (fixed positioning)**](#3-固定定位-fixed-positioning)
- [4. **粘性定位 (sticky positioning)**](#4-粘性定位-sticky-positioning)
- [小结](#小结)


在CSS中，定位有多种方式，每种定位方式的应用场景和表现方式都有所不同。以下是常见的几种定位方式：

### 1. **相对定位 (relative positioning)**

- **定义**：相对定位是相对于元素原本的位置进行偏移的方式。元素仍然占据原本的位置，但可以通过 `top`, `right`, `bottom`, 和 `left` 属性调整位置。
- **特性**：
  - 位置是基于元素的原始位置来调整的。
  - 即使元素被偏移，它仍然占据原来的空间。
  - 适用于轻微调整元素的位置而不影响页面布局。
  
  **示例**：
  ```css
  .relative {
    position: relative;
    top: 10px;
    left: 20px;
  }
  ```

### 2. **绝对定位 (absolute positioning)**

- **定义**：绝对定位是相对于最近的已定位祖先元素进行定位的。如果没有已定位的祖先元素，则相对于初始包含块（通常是 `<html>` 元素）进行定位。
- **特性**：
  - 元素脱离正常文档流，不再占据原本位置。
  - 可以使用 `top`, `right`, `bottom`, `left` 来精确控制元素的位置。
  - 如果元素的父级元素有 `position: relative;`，则子元素的绝对定位会相对于父元素来定位。
  
  **示例**：
  ```css
  .absolute {
    position: absolute;
    top: 50px;
    left: 100px;
  }
  ```

### 3. **固定定位 (fixed positioning)**

- **定义**：固定定位是相对于视口（浏览器窗口）进行定位的，意味着它不会随着页面的滚动而改变位置。
- **特性**：
  - 元素脱离文档流，不占据原本位置。
  - 无论页面如何滚动，元素都会固定在指定的位置。
  - 使用 `top`, `right`, `bottom`, `left` 来确定位置。
  
  **示例**：
  ```css
  .fixed {
    position: fixed;
    top: 0;
    left: 0;
  }
  ```

### 4. **粘性定位 (sticky positioning)**

- **定义**：粘性定位是相对于元素的最近滚动容器（通常是其父元素）来定位的。当页面滚动时，元素会在滚动容器内粘住特定的位置，直到滚动容器的边界被触及。
- **特性**：
  - 元素会根据页面滚动到达指定位置后“粘住”，直到滚动到设定的阈值。
  - 适用于需要在页面滚动过程中保持固定一段时间的元素（例如导航栏）。
  - 需要指定 `top`, `right`, `bottom`, `left` 来确定“粘性”的阈值。

  **示例**：
  ```css
  .sticky {
    position: sticky;
    top: 0; /* 当滚动到顶部时元素会“粘住” */
  }
  ```

### 小结
- **相对定位 (relative)**：元素相对于自己原本的位置进行偏移，仍占据原来的空间。
- **绝对定位 (absolute)**：元素脱离文档流，相对于最近的定位祖先元素进行定位。
- **固定定位 (fixed)**：元素固定在视口的位置，不随滚动而移动。
- **粘性定位 (sticky)**：元素在页面滚动到特定位置时固定，未到达时则正常布局。
- <span style='color:pink'>**相对定位** 和 **绝对定位** 一般是配合使用的