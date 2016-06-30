
// 引入类库
require('./lib/spa.min.js');
require('./lib/swiper-3.3.1.min.js');
//引入views
require('./views/guid.js');
require('./views/goos-shop.js');
require('./views/my.js');
require('./views/index.js');
require('./views/home.js');
require('./views/share.js');
require('./views/shareTo.js');
require('./views/detail.js');

//SPA设置
SPA.config({
  indexView: 'guide'
});
