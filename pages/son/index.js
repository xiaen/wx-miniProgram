// pages/son/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    msg: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    str: 'son的data',
    sonmsg: '给父亲的'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    click(){
      this.triggerEvent('send', this.data.sonmsg)
    }
  }
})
