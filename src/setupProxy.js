const proxy = require('http-proxy-middleware');
//http://m.wufazhuce.com/one/ajaxlist/0?_token=448d7fb5910b95d3c629a7299ab1538eb81aa41b
module.exports = function(app) {
  app.use(proxy('/one', { 
    target: 'http://m.wufazhuce.com',
    changeOrigin: true,
    // pathRewrite: {
    //   '^/one': ''
    // }
  }));
//http://m.shihuo.cn/zhuangbei/getHomeNews
  app.use(proxy('/zhuangbei', { 
    target: 'http://m.shihuo.cn',
    changeOrigin: true,
    // pathRewrite: {
    //   '^/zhuangbei': ''
    // }
  }));
};

