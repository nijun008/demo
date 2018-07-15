# _*_ coding: utf-8 _*_
from urllib import request, parse
import json

base_url = 'http://fanyi.baidu.com/sug'

data = {
  'kw': 'girl'
}

data = parse.urlencode(data).encode()

headers = {
  'Content-Length': len(data)
}

res = request.urlopen(base_url, data = data)

json_data = res.read().decode()

print(json_data)

json_data = json.loads(json_data)

print(json_data)