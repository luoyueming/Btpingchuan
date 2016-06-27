var tplGuide = require("../templates/guid.string");

SPA.defineView('guide',{
  html:tplGuide,
  plugins: ['delegated'],
  bindActions: {
    show :
        //视图切换
      setInterval(function(){
        SPA.open('index');

      },3000)

  }
});
