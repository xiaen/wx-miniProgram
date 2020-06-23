// pages/01_code/index.js
var tools = require('./tools')
var app = require('mine')
var util = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: 'hot',
    msg: 'hello',
    str: '哈哈',
    flag: false,
    list: [
      { name: 'zs', age: 11 },
      { name: 'ls', age: 32 },
      { name: 'ay', age: 33 }
    ],
    flystr: '嘻嘻',
    abc: 'A',
    a: '奥奥',
    fly: '翅膀'
  },
  open() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        console.log(res);

      }
    })
  },
  click(e) {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
    console.log(e);
    console.log(this);
    this.setData({
      flag: !this.data.flag
    })
  },

  btn(e) {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    console.log(e);
    console.log(e.target.dataset.flag);
  },
  touch(e) {
    wx.showToast({
      title: '切换成功',
      duration: 10000
    })
    setTimeout(() => {
      wx.hideToast()
    }, 500)
    console.log(e.target.dataset.info);
    this.setData({
      movie: e.target.dataset.info
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {

  // },
  onLoad(e) {
    this.setData({
      a: util.yes(this.data.a)
    })


    this.setData({
      abc: app(this.data.abc)
    })
    // wx.showLoading({
    //   title: '加载中',
    //   mask: true
    // })
    // setTimeout(() => {
    //   wx.hideLoading()
    // }, 2000)
    // console.log(e, 'page onload');

    var that = this
    that.setData({
      msg: '发送请求中'
    })
    console.log('发送请求 ');
    // wx.request({
    //   url: 'http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000',
    //   method: 'get',
    //   data: {},
    //   success: function (res) {
    //     console.log(that);
    //     console.log(12423423);
    //   }
    // })
    that.setData({
      str: '接口成功'
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (e) {
    console.log(e, 'page show');
    // var newstr = tools(flystr)
    var that = this
    console.log(that.data.flystr);

    that.setData({
      flystr: tools.tools(that.data.flystr)
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function (e) {
    // console.log(e, 'page hide');

  },

})