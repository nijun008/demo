# _*_ coding: utf-8 _*_
from urllib import request, parse
import json

base_url = 'http://fanyi.baidu.com/sug'

data = {
  'kw': 'from'
}

data = parse.urlencode(data).encode()

headers = {
  'Content-Length': len(data)
}

req = request.Request(url = base_url, data = data, headers = headers)

res = request.urlopen(req)

json_data = res.read().decode()

# print(json_data)

json_data = json.loads(json_data)

# print(json_data)

for item in json_data['data']:
  print(item['k'], ':', item['v'])