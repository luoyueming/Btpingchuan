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

    },
    'back': function(e){
      this.parentView.modules.content.launch('Gshoop');
      //util.setFocus('home');
      // var $fot=$('.foot-C li');
       //util.setFocus('home');
      // console.log($('.foot-C li').eq(index));
       $('.foot-C li').eq(1).addClass('active').siblings().removeClass('active');
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
