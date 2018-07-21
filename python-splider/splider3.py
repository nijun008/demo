from urllib  import request, error

if __name__ == '__main__':

  url = 'http://www.bafasidsdau.com'

  try:

    req = request.Request(url)
    res = request.urlopen(req)
    html = res.read().decode()
    print(html)

  except error.URLError as e:
    print('URLError: {0}'.format(e.reason))
    # print('URLError: {0}'.fornat(e))

  except Exception as a:
    # print(e)
    pass