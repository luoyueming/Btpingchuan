var tplshare = require("../templates/share.string");

SPA.defineView('share',{
  html:tplshare,
  plugins: ['delegated'],
  bindActions: {
    'back': function(e){
      this.parentView.modules.content.launch('My');
      //util.setFocus('home');
      // var $fot=$('.foot-C li');
       //util.setFocus('home');
      // console.log($('.foot-C li').eq(index));
       $('.foot-C li').eq(2).addClass('active').siblings().removeClass('active');
     },


          //切换子视图
          //this.modules.content.launch(data.tag)


    //  this.hide();
      // this.modules.content.launch('home');
      //console.log(this.parent);
    //  SPA.open('home');
      //console.log(0);
  }
});
