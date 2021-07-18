var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('data/db.json');
var middlewares = jsonServer.defaults();

server.use(middlewares);
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    "/category/css": "/css",
    "/category/js": "/js",
    "/category/ts": "/ts",
    "/category/html": "/html",
    "/category/dev-tools": "/dev-tools",
}))

server.use(router);
server.listen(process.env.PORT || 4000, function () {
    console.log('JSON Server is running')
});
