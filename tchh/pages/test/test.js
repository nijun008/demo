Page ({
  data: {
    message: 'test 页面的消息',
    lists: [
      { desc: '标题一', url: "这是内容！这是内容1" },
      { desc: '标题二', url: "这是内容2！这是内容1" },
      { desc: '标题三', url: "这是内容3！这是内容1" },
    ],
    imgs: [
      'http://img.zcool.cn/community/01205b5a144401a801213490519188.jpg@1280w_1l_2o_100sh.jpg',
      'http://img2.imgtn.bdimg.com/it/u=3298062377,4223428236&fm=214&gp=0.jpg'
    ],
    location:{
      longitude: 104.415296,
      latitude: 31.136743,
    }
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
  },
  chooseimg: function () {
    console.log(this, '选择图片')
    var _self = this
    wx.chooseImage({
      count: 2,
      success: function (res) {
        console.log(res.tempFilePaths)
        _self.setData({
          imgs: res.tempFilePaths
        })
      }
    })
  },
  getlocation: function () {
    var _self = this
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        console.log(res)
        _self.setData({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          }
        })
      },
      fail: function () {
        console.log('获取地理位置失败')
      }
    })
  },
  opentoast: function () {
    wx.showToast({
      title: 'toast成功提示',
      icon: 'success',
    })
  },
  openloading: function () {
    wx.showLoading({
      title: '正在加载',
      success: function () {
        setTimeout(function () {
          wx.hideLoading()
        }, 2000)
      }
    })
  },
  openmodal: function () {
    wx.showModal({
      title: '模态框标题',
      content: '模态框内容,模态框内容',
      success: function (res) {
        console.log(res)
        if (res.confirm) {
          wx.showToast({
            title: '您点击了确定',
            icon: 'success'
          })
        }
      }
    })
  },
  onShareAppMessage: function (res) {
    return{
      title: '转发标题',
      path: '/pages/test'
    }
  },
  previewimg: function () {
    var _self = this
    wx.previewImage({
      urls: this.data.imgs
    })
  },
  chooselocation: function () {
    wx.chooseLocation({
      success: function (res) {
        console.log(res)
      }
    })
  },
  xiala: function () {
    wx.startPullDownRefresh({
      success: function (msg){
        console.log(msg)
      }
    })
  }
})