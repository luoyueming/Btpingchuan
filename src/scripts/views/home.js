var tplHome = require("../templates/home.string");

SPA.defineView('home',{
  html:tplHome,
  plugins: ['delegated'],
  bindActions:{

    'tap.my': function () {
      console.log(0)
      SPA.open('shareTo',{
        ani: {
          name: "actionSheet",
          distance:146
        }
      })
    }
  }
});
