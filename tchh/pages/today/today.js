Page({

  /**
   * 页面的初始数据
   */
  data: {
    today: {},
    category: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _self = this
    wx.request({
      url: 'http://gank.io/api/today ',
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        _self.setData({
          today: res.data.results,
          category: res.data.category
        })
      },
      fail: function () {
        console.log('请求失败')
        wx.showToast({
          icon: 'none',
          title: '获取干货失败!',
          duration: 2000
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})