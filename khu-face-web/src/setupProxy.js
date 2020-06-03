const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/dashboard', 
        { target: 'http://localhost:8000/' }
    ));
}