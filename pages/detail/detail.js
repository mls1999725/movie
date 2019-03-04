Page({

  /**
   * 页面的初始数据 
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {//options有id参数，用来辨别用户点击//的页面
    console.log(options.id)
    this.setData({
      mid: options.id
    })

    var that=this
    wx.request({
      url: "https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=" + options.id,//用id跳转到相应的页面
      header:{
        "Content-Type": "json",
      },
      success: function (res) {
        console.log(res)
       that.setData({
         movie: res.data.data.basic
        })

        wx.setNavigationBarTitle({
          title: res.data.data.basic.overallRating+"分："+res.data.data.basic.name,
        })
        wx.hideNavigationBarLoading()

      },
      fail: function () {

      },
      complete: function () {

      }
    })


    wx.showNavigationBarLoading()
    console.log("ok")
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
    return{
      title:"向你推荐："+ this.data.movie.name
    }

  },
  
})