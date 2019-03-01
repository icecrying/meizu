//服务文件
const JsonServer = require('json-server');
const data = require("./db.js");

//实例化server服务器
const server = JsonServer.create();
const router = JsonServer.router(data);
const middleware = JsonServer.defaults();

//使用创建的中间件
server.use(middleware);
server.use(router);
server.use(JsonServer.bodyParser);

//启动服务
server.listen({
    host:'127.0.0.1',
    port:'8858'
},function () {
    console.log('json-server is running...')
});
