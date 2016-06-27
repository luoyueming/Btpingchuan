var tplMy = require("../templates/my.string");
var util = require('../utis/fn.js');
SPA.defineView('My',{
  html:tplMy,
  plugins:['delegated'],
  init: {
    mySwiper:null
  },
  bindActions: {
    'tap.slide': function (e,data) {
      //console.log(0);
      this.mySwiper.slideTo($(e.el).index())

    }
  },

  bindEvents: {
     'show' : function () {
       this.mySwiper = new Swiper('#my-swiper',{
          loop:false,
          onSlideChangeStart: function (swiper) {
          //  console.log( swiper.activeIndex);
            var index = swiper.activeIndex;
            var $lis =$('.slideNav li');
            util.setFocus($lis.eq(index));
            var $div=$('.changeTitle div');
            util.setFocus($div.eq(index))
          }

       })



     }


  }


});
