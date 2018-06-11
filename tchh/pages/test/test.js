Page ({
  data: {
    message: 'test 页面的消息',
    lists: [
      { desc: '标题一', url: "这是内容！这是内容1" },
      { desc: '标题二', url: "这是内容2！这是内容1" },
      { desc: '标题三', url: "这是内容3！这是内容1" },
    ]
  },
  onLoad: function (page) {
    console.log(page)
  },
  clickhand: function (e) {
    console.log(this)
    console.log(e)
  },
  myrequest: function (e) {
    var _self = this
    wx.request({
      url: 'http://gank.io/api/data/Android/10/1',
      method: 'GET',
      success: function (res) {
        console.log(res)
        _self.setData({
          lists: res.data.results
        })
        
      },
      fail: function (err) {
        console.log(err)
      }
    })
  }
})