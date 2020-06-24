// pages/03_code/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',
    sex: '0',
    hobby: ['run']
  },
  radioChange(e) {
    this.setData({
      sex: e.detail.value
    })
  },
  checkboxChange(e) {
    this.setData({
      hobby: e.detail.value
    })
  },
  send(e) {
    this.setData({
      username: e.detail.value.username,
      password: e.detail.value.password
    })
    let obj = {
      username: this.data.username,
      password: this.data.password,
      sex: this.data.sex,
      hobby: this.data.hobby
    }
    console.log(obj);

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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