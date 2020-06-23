// pages/father/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    str: 'father的data',
    msg: '给儿子的',
    newmsg: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    sendfather(e) {
      console.log(e);

      this.setData({
        newmsg: e.detail
      })
    }
  }
})
