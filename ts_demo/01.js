console.log('hello ts');
var num;
num = 1;
var bool = false;
console.log(bool);
// 参数类型， 返回类型
function add(a, b) {
    return a + b;
}
console.log("add :" + add(1, 3));
// 字面量，只能赋值 20 常量
var c;
// 可以赋值false 或者 true
var d;
// 联合类型
var e;
e = 10;
e = { a: 10 };
// any 任意类型，相当于关闭类型检测
var f;
f = '111';
f = 124;
f = [1, 2, 3];
// any 可以赋值给 其他静态类型
e = f;
// 隐式类型
var a1 = 10;
var a2;
a2 = '2341';
// unknown 是类型安全的 any,不可赋值给其他变量
// a1 = a2
// 类型断言
// 变量 as String
// 变量<string>
// void 空返回值 undefied null
function myfn() {
    return;
}
// 没有返回值
function myfn2() {
    throw new Error('出错了');
}
