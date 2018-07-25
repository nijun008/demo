Page({

  /**
   * 页面的初始数据
   */
  data: {
    xiandus: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _self = this
    wx.request({
      url: 'http://gank.io/api/xiandu/categories',
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        _self.setData({
          xiandus: res.data.results
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

  },
  toXianduchlind: function (event) {
    let name = event.currentTarget.dataset.name
    wx.redirectTo({
      url: 'pages/xianduchild/xianduchild?name=' + name
    })
    console.log(name)
  }
})