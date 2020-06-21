const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/khu_class', 
        { target: 'http://localhost:8000/' }
    ));
}