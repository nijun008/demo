# _*_ coding:utf-8 _*_

import os
import time
import requests
from bs4 import BeautifulSoup

# 请求头
header = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36' }
# 列表页
list_urls = []
# 详情页
details_urls = []
# 起始页（含）
start_page = 21
# 终止页（不含）
end_page = 22
# 存储目录
folder = './images/'
# 
pre_url = 'http://www.meizitu.com/a/'
# 
suffix_url = '.html'

page = start_page
while page <= end_page:
  list_urls.append(pre_url +  str(page) + suffix_url)
  page += 1

# 检查目录是否存在
folder_check = os.path.exists(folder)
if not folder_check:
  os.makedirs(folder)
  print('目录已创建')
else:
  print('目录已存在')

# 获取详情列表
def get_details_urls(urls):

  for url in urls:
    req = requests.get(url = url, headers = header)
    html = req.text
    bf = BeautifulSoup(html, 'html.parser')

    tagBox = bf.find(id='container')
    imgsTag = tagBox.find_all('img')

    for img in imgsTag:
      details_urls.append(img['src'])

  print('详情页获取完成')
  get_details(details_urls)

# 爬取详情
def get_details(srcs):
  
  for src in srcs:
    details = requests.get(src, headers = header)
    file_name = str(time.time()) + src.split(r'/')[-1]
    fp = open( folder + file_name, 'wb' )
    fp.write(details.content)
    fp.close()

  print('爬取完成')

# 主程序开始
if __name__ == '__main__':

  get_details_urls(list_urls)
