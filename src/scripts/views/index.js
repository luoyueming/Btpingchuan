
//引入模板
var tplIndex = require('../templates/index.string');
//定义视图
SPA.defineView('index', {
  html: tplIndex,
  plugins: ['delegated'],
  modules : [{
    name: 'content',//子视图的名字
    views: ['home','Gshoop','My','share'],
    defaultTag: 'home',
    container: '.l-container'
  }],

 bindActions:{
   'switch.tabs':function (e,data) {
      $(e.el).addClass('active').siblings().removeClass('active');

      //切换子视图
      this.modules.content.launch(data.tag)
   }
 },


  bindEvents: {
    show: function () {
      var mySwiper = new Swiper ('.swiper-container', {
		    loop: false,
		    autoplay:1000,

		    // 如果需要分页器
		    pagination: '.swiper-pagination',

		  })
    }
  }

});
