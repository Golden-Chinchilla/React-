- [1. 安装 Axios](#1-安装-axios)
- [2. 发送请求](#2-发送请求)
  - [2.1 GET 请求](#21-get-请求)
  - [2.2 POST 请求](#22-post-请求)
  - [2.3 PUT 请求](#23-put-请求)
  - [2.4 DELETE 请求](#24-delete-请求)
- [3. 配置请求](#3-配置请求)
  - [3.1 请求头配置](#31-请求头配置)
  - [3.2 请求参数配置](#32-请求参数配置)
  - [3.3 请求超时](#33-请求超时)
- [4. 响应处理](#4-响应处理)
  - [4.1 获取响应数据](#41-获取响应数据)
  - [4.2 错误处理](#42-错误处理)
- [5. 请求和响应拦截器](#5-请求和响应拦截器)
  - [5.1 请求拦截器](#51-请求拦截器)
  - [5.2 响应拦截器](#52-响应拦截器)
- [6. 取消请求](#6-取消请求)
- [7. 并发请求](#7-并发请求)
- [8. 其他常用功能](#8-其他常用功能)
  - [8.1 设定默认配置](#81-设定默认配置)
  - [8.2 发送 FormData 数据](#82-发送-formdata-数据)
---

`Axios` 是一个基于 Promise 的 HTTP 库，用于向服务器发送请求并处理响应。它可以在浏览器和 Node.js 环境中使用，支持 GET、POST、PUT、DELETE 等常见 HTTP 请求。以下是 `Axios` 的基本用法总结：

### 1. 安装 Axios

在使用前，需要安装 `axios`。如果你使用的是 Node.js 环境，可以通过 npm 或 yarn 安装：

```bash
npm install axios
```

或者：

```bash
yarn add axios
```

在浏览器环境中，可以通过 CDN 直接引入：

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

### 2. 发送请求

#### 2.1 GET 请求
`GET` 请求通常用来获取数据。

```javascript
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);  // 处理响应数据
  })
  .catch(error => {
    console.error(error);  // 处理错误
  });
```

#### 2.2 POST 请求
`POST` 请求用来向服务器提交数据。

```javascript
axios.post('https://api.example.com/data', {
  name: 'John',
  age: 30
})
  .then(response => {
    console.log(response.data);  // 处理响应数据
  })
  .catch(error => {
    console.error(error);  // 处理错误
  });
```

#### 2.3 PUT 请求
`PUT` 请求用来更新数据。

```javascript
axios.put('https://api.example.com/data/1', {
  name: 'John Doe',
  age: 35
})
  .then(response => {
    console.log(response.data);  // 处理响应数据
  })
  .catch(error => {
    console.error(error);  // 处理错误
  });
```

#### 2.4 DELETE 请求
`DELETE` 请求用来删除资源。

```javascript
axios.delete('https://api.example.com/data/1')
  .then(response => {
    console.log(response.data);  // 处理响应数据
  })
  .catch(error => {
    console.error(error);  // 处理错误
  });
```

### 3. 配置请求

#### 3.1 请求头配置
你可以通过 `headers` 配置请求头。

```javascript
axios.get('https://api.example.com/data', {
  headers: {
    'Authorization': 'Bearer token'
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

#### 3.2 请求参数配置
使用 `params` 来传递 URL 查询参数。

```javascript
axios.get('https://api.example.com/data', {
  params: {
    page: 1,
    limit: 10
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

#### 3.3 请求超时
可以设置请求超时时间（单位为毫秒）。

```javascript
axios.get('https://api.example.com/data', {
  timeout: 5000  // 超过5秒超时
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

### 4. 响应处理

#### 4.1 获取响应数据
响应的结果可以通过 `response.data` 获取。

```javascript
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);  // 获取响应数据
  })
  .catch(error => {
    console.error(error);  // 处理错误
  });
```

#### 4.2 错误处理
你可以通过 `catch` 捕获错误，`error.response` 包含服务器返回的错误信息。

```javascript
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if (error.response) {
      // 请求已发出，服务器响应了状态码，但状态码不在2xx范围内
      console.error('Response error:', error.response.data);
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      console.error('Request error:', error.request);
    } else {
      // 其他错误
      console.error('Error:', error.message);
    }
  });
```

### 5. 请求和响应拦截器

#### 5.1 请求拦截器
请求拦截器可以在请求发送之前进行修改，比如添加认证信息、修改请求头等。

```javascript
axios.interceptors.request.use(request => {
  console.log('Request:', request);
  // 在请求中添加认证头
  request.headers['Authorization'] = 'Bearer token';
  return request;
}, error => {
  return Promise.reject(error);
});
```

#### 5.2 响应拦截器
响应拦截器可以对响应数据进行预处理，或者统一处理错误。

```javascript
axios.interceptors.response.use(response => {
  console.log('Response:', response);
  // 可以对响应数据进行处理
  return response;
}, error => {
  // 统一处理响应错误
  console.error('Response error:', error);
  return Promise.reject(error);
});
```

### 6. 取消请求

你可以使用 `CancelToken` 来取消请求。

```javascript
const CancelToken = axios.CancelToken;
let cancel;

axios.get('https://api.example.com/data', {
  cancelToken: new CancelToken(function executor(c) {
    cancel = c;
  })
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message);
    } else {
      console.error(error);
    }
  });

// 取消请求
cancel('Operation canceled by the user.');
```

### 7. 并发请求

可以使用 `axios.all` 来同时发送多个请求，并在所有请求完成后执行某些操作。

```javascript
axios.all([
  axios.get('https://api.example.com/data1'),
  axios.get('https://api.example.com/data2')
])
  .then(axios.spread((response1, response2) => {
    console.log(response1.data);
    console.log(response2.data);
  }))
  .catch(error => {
    console.error(error);
  });
```

### 8. 其他常用功能

#### 8.1 设定默认配置

你可以为 Axios 设置全局的默认配置，这样每次发送请求时都可以使用这些配置。

```javascript
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.timeout = 5000;
axios.defaults.headers.common['Authorization'] = 'Bearer token';
```

#### 8.2 发送 FormData 数据

你可以通过 `FormData` 对象发送文件和表单数据。

```javascript
const formData = new FormData();
formData.append('file', fileInput.files[0]);

axios.post('https://api.example.com/upload', formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

以上就是 `Axios` 的一些常见用法，可以根据需求灵活配置和使用。