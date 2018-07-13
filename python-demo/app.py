# _*- coding: utf-8 _*_
print('中文')

# 字符串占位符
print('测试占位符 整数 %d 浮点数 %f 字符串 %s' % (12.3, 12, '哈哈'))

# 列表操作
myLists = ['aaa', 'bbb', 'ccc', 'ddd']
print(myLists)
print(len(myLists))
myLists.append('eee')
print(len(myLists))
print(myLists[-1])
myLists.insert(3, 'fff')
print(myLists)
myLists.pop()
print(myLists)
myLists.pop(1)
print(myLists)
myLists[0] = 'ggg'
print(myLists)

# 不可改变的列表
myTuple = (1, 2, 3)

print(myTuple)
# myTuple[0] = 4 报错

# 条件语句
age = 10
if age >= 18:
  print('年龄大于等于18')
elif age >= 10:
  print('年龄大于等于10小于18')
else:
  print('年龄小于10')

# 字符串转整数
myStr = '1888'
myNum = int(myStr)
print(myNum)

# for循环
for i in myLists:
  print(i)

sum = 0
for x in range(101):
  sum = sum + x
print(sum)

# while循环
n = 0
while n < len(myLists):
  print(myLists[n])
  n = n + 1

## 函数
def myDef(x):
  if x >= 0:
    return x
  else:
    return -x

print(myDef(-9))

# 函数参数,默认参数
def myDef2 (x, n = 2):
  s = 1
  while n > 0:
    n = n - 1
    s = s * x
  return s

print(myDef2(10, 3))

# 默认参数必须指向不变对象
def myDef3(l = []):
  l.append('end')
  return l

print(myDef3([1,2,3]))

print(myDef3())

print(myDef3()) # 输出两个end,参数已经被改变

def myDef4(l = None):
  if l is None:
    l = []
  l.append('end')
  return l

print(myDef4())
print(myDef4())

# 数组切片 含:不含
print(myLists[0:2])
# 前两个
print(myLists[:2])
# 后两个
print(myLists[-2:])
# 字符串切片
print('abcdefg'[:2])

# 迭代
for i, val in enumerate(myTuple):
  print(i,val)

# generator, 保存的不是列表, 是算法
def myDef5(max):
  n, a, b = 0, 0, 1
  while n < max:
    yield b
    a, b = b, a + b
    n = n + 1
  return 'done'

for n in myDef5(6):
  print(n)

# 高阶函数, 可以接受函数为参数
def myDef6(a, b, f):
  return f(a) - f(b)

print(myDef6(-5,6,abs))

# 匿名函数, lambda(关键字) x(函数参数):
print(list(filter(lambda x: x % 2 == 1, range(1, 20))))

# 对象
# __name, __ 开头为私有属性，外部无法访问, 通过内部方法获取或修改
class Student(object):
  def __init__(self, name, score):
    self.__name = name
    self.__score = score

  def print_score(self):
    print('%s : %s' % (self.__name, self.__score))

  def get_name(self):
    return self.__name

  def get_score(self):
    return self.__score

  def set_name(self, name):
    self.__name = name

xiaoming = Student('xiao ming', 88)

xiaoming.set_name('da ming')
xiaoming.print_score()

# 读取文件
with open('./txt.txt', 'r') as f:
  # print(f.read())

  for line in f.readlines():
    print(line.strip())

# 获取系统信息
import os
print(os.name)

print('1' * 5)

# 时间
import time
print(time)