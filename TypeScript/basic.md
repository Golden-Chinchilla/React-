- [类型声明](#类型声明)
- [类型推断](#类型推断)
- [类型总览](#类型总览)
  - [JS 中的数据类型](#js-中的数据类型)
  - [TS 中的数据类型](#ts-中的数据类型)
- [常用类型](#常用类型)
  - [（其他类型，略）](#其他类型略)
  - [object](#object)
    - [声明对象类型](#声明对象类型)
  - [tuple](#tuple)
    - [声明函数类型](#声明函数类型)
    - [声明数组类型](#声明数组类型)
  - [enum](#enum)
    - [数字枚举](#数字枚举)
    - [字符串枚举](#字符串枚举)
    - [常量枚举](#常量枚举)
  - [type](#type)
    - [基本用法](#基本用法)
    - [联合类型](#联合类型)
    - [交叉类型](#交叉类型)
  - [属性修饰符](#属性修饰符)
  - [抽象类](#抽象类)
    - [总结：何时使用抽象类？](#总结何时使用抽象类)
  - [Interface](#interface)
    - [定义类结构](#定义类结构)
    - [定义对象结构](#定义对象结构)
    - [定义函数结构](#定义函数结构)
    - [结构之间的继承](#结构之间的继承)
    - [接口自动合并（可重复定义）](#接口自动合并可重复定义)
    - [总结：何时使用接口？](#总结何时使用接口)
- [泛型](#泛型)
- [类型声明文件](#类型声明文件)
---

> TS, node这些代码浏览器是不认的，写完后需要有一个编译的过程

# 类型声明
- 使用 `:` 来对 **变量** 或 **函数形参**，进行类型声明：
```ts
let a: string //变量a只能存储字符串
let b: number //变量b只能存储数值
let c: boolean //变量c只能存储布尔值
a = 'hello'
a = 100 //警告：不能将类型“number”分配给类型“string”
b = 666
b = '你好'//警告：不能将类型“string”分配给类型“number”
c = true
c = 666 //警告：不能将类型“number”分配给类型“boolean”

// 参数x必须是数字，参数y也必须是数字，函数返回值也必须是数字
function demo(x: number, y: number): number {
    return x + y
}
demo(100, 200)
demo(100, '200') //警告：类型“string”的参数不能赋给类型“number”的参数
demo(100, 200, 300) //警告：应有 2 个参数，但获得 3 个
demo(100) //警告：应有 2 个参数，但获得 1 个
```
- 在 `:` 后也可以写字面量类型，不过实际开发中用的不多。
```ts
let a: '你好' //a的值只能为字符串“你好”
let b: 100 //b的值只能为数字100
a = '欢迎'//警告：不能将类型“"欢迎"”分配给类型“"你好"”
b = 200 //警告：不能将类型“200”分配给类型“100”
```

# 类型推断
TS会根据我们的代码，进行类型推导，例如下面代码中的变量 `d`，只能存储数字
```ts
let d = -99 //TypeScript会推断出变量d的类型是数字
d = false //警告：不能将类型“boolean”分配给类型“number”
```
>但要注意，类型推断不是万能的，面对复杂类型时推断容易出问题，所以尽量还是明确的编写类型声明！

# 类型总览
## JS 中的数据类型
- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `bigint`
- `symbol`
- `object`
  - `Array`
  - `Function`
  - `Date`
  - `Error`
  - ...
## TS 中的数据类型
1. 上述所有 JavaScript 类型
2. 六个新类型
   - `any`
   - `unknown`
   - `never`
   - `void`
   - `tuple`
   - `enum`
3. 两个用于自定义类型的方式
   - `type`
   - `interface`


# 常用类型
## （其他类型，略）
## object
### 声明对象类型
- 实际开发中，限制一般对象，通常使用以下形式
```ts
// 限制person1对象必须有name属性，age为可选属性
let person1: { name: string, age?: number }
// 含义同上，也能用分号做分隔
let person2: { name: string; age?: number }
// 含义同上，也能用换行做分隔
let person3: {
name: string
age?: number
}
// 如下赋值均可以
person1 = {name:'李四',age:18}
person2 = {name:'张三'}
person3 = {name:'王五'}

// 如下赋值不合法，因为person3的类型限制中，没有对gender属性的说明
person3 = {name:'王五',gender:'男'}
```

- **索引签名**： 允许定义对象可以具有任意数量的属性，这些属性的键和类型是可变的，
常用于：描述类型不确定的属性，（具有动态属性的对象）

```ts
// 限制person对象必须有name属性，可选age属性但值必须是数字，同时可以有任意数量、任意类型的其他属性
let person: {
    name: string
    age?: number
    [key: string]: any // 索引签名，完全可以不用key这个单词，换成其他的也可以
}
// 赋值合法
person = {
    name: '张三',
    age: 18,
    gender: '男'
}
```

## tuple
元组 `Tuple` 是一种 **特殊的数组类型**，可以存储固定数量的元素，并且每个元素的类型是已知的且可以不同。元组用于精确描述一组值的类型，`?`表示可选元素。
```ts
// 第一个元素必须是 string 类型，第二个元素必须是 number 类型。
let arr1: [string,number]
// 第一个元素必须是 number 类型，第二个元素是可选的，如果存在，必须是 boolean 类型。
let arr2: [number,boolean?]
// 第一个元素必须是 number 类型，后面的元素可以是任意数量的 string 类型
let arr3: [number,...string[]]
// 可以赋值
arr1 = ['hello',123]
arr2 = [100,false]
arr2 = [200]
arr3 = [100,'hello','world']
arr3 = [100]
// 不可以赋值，arr1声明时是两个元素，赋值的是三个
arr1 = ['hello',123,false]
```

### 声明函数类型
```ts
//约束函数的入参类型和返回值类型
let count: (a: number, b: number) => number

count = function (x, y) {
return x + y
}
```
>函数类型声明还可以使用：接口、自定义类型等方式

### 声明数组类型
```ts
let arr1: string[]
let arr2: Array<string> //泛型
arr1 = ['a','b','c']
arr2 = ['hello','world']
```

## enum
>枚举 `enum` 可以定义 **一组命名常量**，它能增强代码的可读性，也让代码更好维护。

如下代码的功能是：根据调用 `walk` 时传入的不同参数，执行不同的逻辑，存在的问题是调用  `walk` 传参时没有任何提示，编码者很容易写错字符串内容；并且用于判断逻辑的`up`, `down`, `left`, `right`是连续且相关的一组值，那此时就特别适合使用枚举 `enum`。

```ts
function walk(str: string) {
    if (str === 'up') {
        console.log("向【上】走");
    } else if (str === 'down') {
        console.log("向【下】走");
    } else if (str === 'left') {
        console.log("向【左】走");
    } else if (str === 'right') {
        console.log("向【右】走");
    } else {
        console.log("未知方向");
    }
}
walk('up')
walk('down')
walk('left')
walk('right')
```

### 数字枚举
数字枚举一种最常见的枚举类型，其成员的值会自动递增，且数字枚举还具备反向映射的
特点，在下面代码的打印中，不难发现：可以通过值来获取对应的枚举成员名称 。
```ts
// 定义一个描述【上下左右】方向的枚举Direction
enum Direction {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction) // 打印Direction会看到如下内容
/*
    {
        0:'Up',
        1:'Down',
        2:'Left',
        3:'Right',
        Up:0,
        Down:1,
        Left:2,
        Right:3
    }
*/
// 反向映射
console.log(Direction.Up) //输出 0
console.log(Direction[0]) //输出 Up

// 此行代码报错，枚举中的属性是只读的
Direction.Up = 'shang'
```
也可以指定枚举成员的初始值，其后的成员值会自动递增。

```ts
enum Direction {
    Up = 6,
    Down,
    Left,
    Right
}
console.log(Direction.Up); // 输出: 6
console.log(Direction.Down); // 输出: 7
```
使用数字枚举完成刚才 `walk` 函数中的逻辑，此时我们发现： 代码更加直观易读，而且类
型安全，同时也更易于维护。

```ts
enum Direction {
    Up,
    Down,
    Left,
    Right,
}
function walk(n: Direction) {
    if (n === Direction.Up) {
        console.log("向【上】走");
    } else if (n === Direction.Down) {
        console.log("向【下】走");
    } else if (n === Direction.Left) {
        console.log("向【左】走");
    } else if (n === Direction.Right) {
        console.log("向【右】走");
    } else {
        console.log("未知方向");
    }
}
walk(Direction.Up)
walk(Direction.Down)
```

### 字符串枚举
枚举成员的值是字符串
```ts
enum Direction {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right"
}
let dir: Direction = Direction.Up;
console.log(dir); // 输出: "up"
```

### 常量枚举
>官方描述：
>常量枚举是一种特殊枚举类型，它使用 `const` 关键字定义，在编译时会被内联，避免生成一些额外的代码。


>何为编译时内联？
>所谓“内联”其实就是 TypeScript 在编译时，会将枚举成员引用替换为它们的实际值，而不是生成额外的枚举对象。这可以减少生成的 JavaScript 代码量，并提高运行时性能。


使用普通枚举的 TypeScript 代码如下：
```ts
enum Directions {
    Up,
    Down,
    Left,
    Right
}
let x = Directions.Up;
```

编译后生成的 JavaScript 代码量较大：
```js
"use strict";
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
let x = Directions.Up;
```

使用常量枚举的 TypeScript 代码如下：
```ts
const enum Directions {
    Up,
    Down,
    Left,
    Right
}
let x = Directions.Up;
```

编译后生成的 JavaScript 代码量较小：
```js
"use strict";
let x = 0 /* Directions.Up */;
```
## type
`type` 可以为任意类型创建别名，让代码更简洁、可读性更强，同时能更方便地进行类型复用和扩展。
### 基本用法
类型别名使用 `type` 关键字定义，`type` 后跟类型名称，例如下面代码中 `num` 是类
型别名。
```ts
type num = number;
let price: num
price = 100
```

### 联合类型
联合类型是一种高级类型，它表示一个值可以是几种不同类型之一。
```ts
type Status = number | string
type Gender = '男' | '女'
function printStatus(status: Status) {
    console.log(status);
}
function logGender(str: Gender) {
    console.log(str)
}

printStatus(404);
printStatus('200');
printStatus('501');
logGender('男')
logGender('女')
```

### 交叉类型
>交叉类型通常用于合并对象类型或函数类型，而不是基本类型。

>类似于 `type Demo = string & number` 是没有意义的， `string` 和 `number` 不兼容。

交叉类型（Intersection Types）允许将多个类型合并为一个类型。合并后的类型将拥有所有被合并类型的成员。交叉类型通常用于对象类型。

```ts
//面积
type Area = {
    height: number; //高
    width: number; //宽
};
//地址
type Address = {
    num: number; //楼号
    cell: number; //单元号
    room: string; //房间号
};
// 定义类型House，且House是Area和Address组成的交叉类型
type House = Area & Address;
const house: House = {
    height: 180,
    width: 75,
    num: 6,
    cell: 3,
    room: '702'
};
```
## 属性修饰符
修饰符含义与规则：
- `public`：公开的，可以被：<span style='color:yellow'>类内部、子类、类外部</span> 访问 。
- `protected`：受保护的，可以被：<span style='color:yellow'>类内部、子类</span> 访问。
- `private`：私有的，可以被：<span style='color:yellow'>类内部</span> 访问。
- `readonly`：只读属性，属性无法修改。

## 抽象类
>概述：抽象类是一种无法被实例化的类，专门用来定义类的结构和行为，类中可以写抽象方法，也可以写具体实现。抽象类主要用来为其派生类提供一个基础结构，要求其派生类必须实现其中的抽象方法。

>简记：抽象类不能实例化，其意义是可以被继承，抽象类里可以有普通方法、也可以有抽象方法。

- *详情参考 pdf*


### 总结：何时使用抽象类？
1. 定义通用接口：为一组相关的类定义通用的行为（方法或属性）时。
2. 提供基础实现：在抽象类中提供某些方法或为其提供基础实现，这样派生类就可以继承这
些实现。
3. 确保关键实现：强制派生类实现一些关键行为。
4. 共享代码和逻辑：当多个类需要共享部分代码时，抽象类可以避免代码重复。

## Interface
`interface` 是一种定义结构的方式，主要作用是为：类、对象、函数等规定一种契约，这样可以确保代码的一致性和类型安全，但要注意 `interface` 只能定义格式，不能包含任何实现！

### 定义类结构
```ts
// PersonInterface接口，用与限制Person类的格式
interface PersonInterface {
    name: string
    age: number
    speak(n: number): void
}
// 定义一个类 Person，实现 PersonInterface 接口
class Person implements PersonInterface {
    constructor(
        public name: string,
        public age: number
    ) { }
    // 实现接口中的 speak 方法
    speak(n: number): void {
        for (let i = 0; i < n; i++) {
            // 打印出包含名字和年龄的问候语句
            console.log(`你好，我叫${this.name}，我的年龄是${this.age}`);
        }
    }
}
// 创建一个 Person 类的实例 p1，传入名字 'tom' 和年龄 18
const p1 = new Person('tom', 18);
p1.speak(3)
```

### 定义对象结构
```ts
interface UserInterface {
    name: string
    readonly gender: string // 只读属性
    age?: number // 可选属性
    run: (n: number) => void
}
const user: UserInterface = {
    name: "张三",
    gender: '男',
    age: 18,
    run(n) {
        console.log(`奔跑了${n}米`)
    }
};
```

### 定义函数结构
```ts
interface CountInterface {
    (a: number, b: number): number;
}
const count: CountInterface = (x, y) => {
    return x + y
}
```

### 结构之间的继承
一个 `interface` 继承另一个 `interface` ，从而实现代码的复用
```ts
interface PersonInterface {
    name: string // 姓名
    age: number // 年龄
}
interface StudentInterface extends PersonInterface {
    grade: string // 年级
}
const stu: StudentInterface = {
    name: "张三",
    age: 25,
    grade: '高三',
}
```

### 接口自动合并（可重复定义）

```ts
// PersonInterface接口
interface PersonInterface {
    // 属性声明
    name: string
    age: number
}
// 给PersonInterface接口添加新属性
interface PersonInterface {
    // 方法声明
    speak(): void
}
// Person类实现PersonInterface
class Person implements PersonInterface {
    name: string
    age: number
    // 构造器
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    // 方法
    speak() {
        console.log('你好！我是老师:', this.name)
    }
}
```

### 总结：何时使用接口？
1. 定义对象的格式：描述数据模型、API 响应格式、配置对象......等等，是开发中用的最多的场景。
2. 类的契约：规定一个类需要实现哪些属性和方法。
3. 扩展已有接口：一般用于扩展第三方库的类型， 这种特性在大型项目中可能会用到。


# 泛型
>泛型允许我们在定义函数、类或接口时，使用类型参数来表示**未指定的类型**，这些参数在具体**使用时**，才被指定**具体的类型**，泛型能让同一段代码适用于多种类型，同时仍然保持类型的安全性。

举例：如下代码中 `<T>` 就是泛型，（不一定非叫 `<T>`），设置泛型后即可在函数中使用 `<T>` 来表示该类型：

<span style='color:pink'>在 TypeScript 中，`< >` 的本质是 **类型参数的占位符**，用于在定义泛型时表示一个待定的类型，实际类型会在使用时通过传递具体的类型来替换它。</span>

- 泛型函数
```ts
function logData<T>(data: T): T {
    console.log(data)
    return data
}
logData<number>(100)
logData<string>('hello')
```

- 泛型可以有多个
```ts
function logData<T, U>(data1: T, data2: U): T | U {
    console.log(data1, data2)
    return Date.now() % 2 ? data1 : data2
}
logData<number, string>(100, 'hello')
logData<string, boolean>('ok', false)
```

- 泛型接口
```ts
interface PersonInterface<T> {
    name: string,
    age: number,
    extraInfo: T
}
let p1: PersonInterface<string>
let p2: PersonInterface<number>
p1 = { name: '张三', age: 18, extraInfo: '一个好人' }
p2 = { name: '李四', age: 18, extraInfo: 250 }
```

- 泛型约束
```ts
interface LengthInterface {
    length: number
}
// 约束规则是：传入的类型T必须具有 length 属性
function logPerson<T extends LengthInterface>(data: T): void {
    console.log(data.length)
}
logPerson<string>('hello')
// 报错：因为number不具备length属性
// logPerson<number>(100)
```

- 泛型类
```ts
class Person<T> {
    constructor(
        public name: string,
        public age: number,
        public extraInfo: T
    ) { }
    speak() {
        console.log(`我叫${this.name}今年${this.age}岁了`)
        console.log(this.extraInfo)
    }
}
// 测试代码1
const p1 = new Person<number>("tom", 30, 250);
// 测试代码2
type JobInfo = {
    title: string;
    company: string;
}
const p2 = new Person<JobInfo>("tom", 30, { title: '研发总监', company: '发发发科技公司' });
```

# 类型声明文件
类型声明文件是 TypeScript 中的一种特殊文件，通常以﻿.d.ts﻿ 作为扩展名。它的主要作用是为现有的 JavaScript 代码提供类型信息，使得 TypeScript 能够在使用这些 JavaScript 库或模块时进行类型检查和提示。