console.log('hello ts')

let num: number
num = 1

let bool: boolean = false

console.log(bool)

// 参数类型， 返回类型
function add (a: number, b: number): number {
  return a + b
}
console.log(`add :${add(1,3)}`)

// 字面量，只能赋值 20 常量
let c: 20

// 可以赋值false 或者 true
let d: false | true

// 联合类型
let e: number | Object

e = 10
e = { a: 10 }

// any 任意类型，相当于关闭类型检测
let f: any
f = '111'
f = 124
f = [1, 2, 3]

// any 可以赋值给 其他静态类型
e = f

// 隐式类型
let a1 = 10

let a2: unknown
a2 = '2341'

// unknown 是类型安全的 any,不可赋值给其他变量
// a1 = a2


// 类型断言
// 变量 as String
// 变量<string>

// void 空返回值 undefied null
function myfn (): void {
  return
}

// 没有返回值
function myfn2 (): never {
  throw new Error('出错了')
}

// Object
let obj: Object
obj = { a: '13' }

// 指定属性类型
let obj1: { name: String }
obj1 = { name: '24241' }

// ?可选属性
let obj4: { name: string, age?: number }

// 任意属性
let obj2: { age: Number, [key: string]: any }
obj2 = { age: 10 , name: 'nk', other: '2414'}

// Array
let arr: [string, number] = ['123', 123]

// Array
let arr1: [string | { name: string }, number] = [{name: 'fa'}, 123]

let arr3: string[] = ['a', 'b', 'c', 'd']

// 枚举
enum Fruits {
  banna = 1,
  apple = 3,
  orange = 5
}

let like: number = Fruits.apple

if (like === Fruits.banna) {
  console.log('喜欢香蕉')
} else {
  console.log('喜欢苹果或橘子')
}