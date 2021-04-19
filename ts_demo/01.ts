console.log('hello ts')

let num: Number
num = 1

let bool: Boolean = false

console.log(bool)

// 参数类型， 返回类型
function add (a: Number, b: Number): Number {
  return a + b
}
console.log(`add :${add(1,3)}`)

// 字面量，只能赋值 20 常量
let c: 20

// 可以赋值false 或者 true
let d: false | true

// 联合类型
let e: Number | Object

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