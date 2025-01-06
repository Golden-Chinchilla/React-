- [1. 基本语法](#1-基本语法)
- [2. 参数说明](#2-参数说明)
  - [`url`](#url)
  - [`options`（可选）](#options可选)
- [3. 示例](#3-示例)
  - [3.1 GET 请求](#31-get-请求)
  - [3.2 POST 请求](#32-post-请求)
  - [3.3 处理响应](#33-处理响应)
  - [3.4 错误处理](#34-错误处理)
- [4. 其他常用配置](#4-其他常用配置)
  - [4.1 设置请求头](#41-设置请求头)
  - [4.2 发送 Cookies](#42-发送-cookies)
- [5. 异常处理](#5-异常处理)
- [总结](#总结)
---

`fetch` 是 JavaScript 中用于进行网络请求的 API，主要用于替代传统的 `XMLHttpRequest`。它基于 Promise，因此支持异步操作，能够处理响应并进行链式调用。以下是 `fetch` 的基本用法总结：

### 1. 基本语法

```javascript
fetch(url, options)
  .then(response => response.json())  // 处理响应数据
  .then(data => console.log(data))     // 使用响应数据
  .catch(error => console.error('Error:', error));  // 错误处理
```

- **url**：请求的 URL 地址。
- **options**：一个可选对象，包含请求方法、头信息、请求体等配置。

### 2. 参数说明

#### `url`
- 这是你要请求的资源的 URL 地址，可以是相对路径或绝对路径。

#### `options`（可选）
这个对象包含以下常用配置项：

- **method**：HTTP 请求方法（如 `GET`, `POST`, `PUT`, `DELETE` 等）。默认为 `GET`。
- **headers**：请求头部信息（如 Content-Type, Authorization 等）。
- **body**：请求体（仅对于 `POST`, `PUT` 等方法有效），通常是 JSON 格式数据。
- **mode**：请求的跨域模式（如 `cors`, `no-cors`, `same-origin`）。
- **credentials**：指定是否发送 cookies（如 `same-origin`, `include`，`omit`）。
- **cache**：设置缓存策略。

### 3. 示例

#### 3.1 GET 请求

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('There was a problem with the fetch operation:', error));
```

#### 3.2 POST 请求

```javascript
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    age: 30
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

#### 3.3 处理响应

- **response.ok**：检查响应状态码是否为 200-299。
- **response.json()**：将响应数据解析为 JSON 格式。
- **response.text()**：将响应数据解析为纯文本。
- **response.blob()**：解析响应为 Blob 对象，常用于处理文件上传下载。

#### 3.4 错误处理

`fetch` 本身不会抛出 HTTP 错误（即 4xx 或 5xx），它只会在网络层面发生错误时才触发 `.catch()`。需要手动检查 `response.ok` 属性来判断请求是否成功。

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### 4. 其他常用配置

#### 4.1 设置请求头

```javascript
fetch('https://api.example.com/data', {
  headers: {
    'Authorization': 'Bearer token',
    'Accept': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data));
```

#### 4.2 发送 Cookies

```javascript
fetch('https://api.example.com/data', {
  credentials: 'include' // 或 'same-origin'
})
  .then(response => response.json())
  .then(data => console.log(data));
```

### 5. 异常处理

`fetch` 会返回一个 Promise 对象，只有网络请求本身失败（如没有连接到网络，域名解析失败等）时，才会触发 `catch`。如果 HTTP 响应状态不为 2xx，它不会自动进入 `catch`，因此需要手动判断 `response.ok`。

### 总结

- `fetch` 用于发送网络请求，返回一个 Promise。
- 支持多种 HTTP 方法，并允许设置请求头和请求体。
- 处理响应时需要手动检查 `response.ok`，并使用相应的方法如 `json()` 或 `text()` 来解析响应内容。
- 异常处理通过 `.catch()` 捕获网络层错误或其他异常。

这些基本用法和配置能够应对大部分 Web 应用中的数据请求需求。