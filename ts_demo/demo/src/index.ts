interface Myclass {
  name: string,
  age: number
}

class Person {
  // 实例属性 通过对象的实例访问
  name: string = 'xxxx'
  age?: number = 29

  // 只读属性
  readonly monthy: number = 20000

  // 静态属性 通过对象自身访问
  static sex: string = '男'

  // 实例方法
  sayHello (str: string): void {
    console.log(`${this.name} ${str}`)
  }

  // 静态方法
  static saySex(str: string): void {
    console.log(`${this.sex} ${str}`)
  }
}

let per = new Person()

console.log(per.name)
per.name = 'jjjj'

console.log(per.name)

console.log(per.monthy)

// per.monthy = 200000 报错
// 通过实例调用实例方法
per.sayHello('hello')

// 通过类调用静态方法
Person.saySex('14')

class Dog {
  name: string
  age: number

  constructor (name: string, age: number) {
    this.name = name
    this.age = age
  }

  bark() {
    console.log(`${this.name} say: 汪汪！`)
  }
}

let dog = new Dog('旺财', 2)
let dog1 = new Dog('小花', 3)
dog.bark()

{
  // 抽象类只能由子类继承，不能创建实例
  abstract class Animal {
    name: string
    age: number
    static test: string = '我是animal静态属性'

    constructor (name: string, age: number) {
      this.name = name
      this.age = age
    }

    // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
    abstract sayHello ():void
  }

  // dog类继承animal类
  class Dog extends Animal {

    // constructor(name: string, age: number) {
    //   super(name, age)
    // }

    // 覆盖父类方法
    sayHello () {
      console.log('狗在叫！')
    }
  }

  // 静态属性可以被继承
  console.log(Dog.test)

  let dog = new Dog('小白', 12)
  console.log(dog)
  dog.sayHello()

}

{ 
  // 接口 定义类结构, 定义类中应该包含的属性和方法
  interface myInterface {
    name: string
    age: number
  }

  // 可以重复定义，规则相加
  interface myInterface {
    gender: string
  }

  const obj: myInterface = {
    name: 'dog',
    age: 12,
    gender: '女'
  }

  console.log(obj)

  // 接口中的方法都是抽象方法
  interface classFace {
    name: string

    run (): void
  }

  class Person implements classFace {
    name: string
    // 私有属性，只能在类的内部读取和改变，子类也不可访问
    private age: number

    constructor (name: string, age: number) {
      this.name = name
      this.age = age
    }

    run():void {
      console.log('runing...')
    }

    getAge (): number {
      return this.age
    }

    setAge (value: number): void {
      if (value > -1) {
        this.age = value
      } else {
        console.warn('value must > -1')
      }
    }

  }

  let per = new Person('Jk', 24)

  console.log(per.getAge())

  per.setAge(2)
  
  console.log(per.getAge())
}

{

  // 私有变量利用getter setter
  class Person {
    private _name: string
    // protected 保护的属性，子类中可以访问
    protected _sex?: string
    age: number

    constructor (name: string, age: number) {
      this._name = name
      this.age = age
    }

    get name() {
      return this._name
    }

    set name(name: string) {
      console.log('setter 触发')
      this._name = name
    }
  }

  let wukong = new Person('wukong', 500)

  console.log(wukong.name)

  wukong.name = 'ba jie'

  console.log(wukong.name)
}

{ 
  // 构造函参数中添加属性修饰符，可以直接定义类属性
  class Person {
    constructor (public name: string, public age: number) {
      this.name = name
      this.age = age
    }
  }
}


{
  // 泛型
  // 类型不明确时使用
  function fn<T> (a: T) :T {
    return a
  }

  // 不指定泛型
  fn(10)

  // 指定类型
  fn<string> ('fff')

  // 多参数
  function fn2<S, K> (a: S, b: K) : K {
    console.log(a)
    return b
  }

  // 继承接口
  interface Inter {
    length: number
  }
  function fn3 <my extends Inter> (a: my): void{
    console.log(a.length)
  }

  fn3({length: 3})
  fn3('fasfaf')
}