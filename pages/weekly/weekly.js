Page({

  /**
   * 页面的初始数据
   */
  data: {
    weeklyMovieList: [
      {
        name: "大黄蜂",
        comment: "大黄蜂化身地球守卫者",
        imagePath: "/images/大黄蜂.jpg",
        isHighlyRecommended: true,
        id: 246986
      },
      {
        name: "密室逃生",
        comment: "六位主角遭遇花样夺命机关考验",
        imagePath: "/images/密室逃生.jpg",
        isHighlyRecommended: true,
        id: 261180
      },
      {
        name: "毒液",
        comment: "汤老湿共生体大战颠覆想象",
        imagePath: "/images/毒液.jpg",
        isHighlyRecommended: false,
        id: 103937
      }
    ],
    thisWeekMovie: {
      name: "毒液",
      comment: "汤老湿共生体大战颠覆想象",
      imagePath: "/images/4.jpg",
      isHighlyRecommended: false

    },
    count: 123,
    score: 98,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1
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
    return{
      title: "每周推荐"
    }
  },
  f0:function(event){
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1
    })
  },
  f1:function(event){
    console.log(event);
    var movieId=event.currentTarget.dataset.movieId;
    console.log(movieId);
     wx.navigateTo({
       url: '/pages/detail/detail?id=' + movieId,
     })
  }
})