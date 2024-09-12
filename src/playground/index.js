const http = require('http'); // 引入http模块，用于创建HTTP服务器

const server = http.createServer((request, response) => { // 创建一个HTTP服务器，并定义请求处理函数
   const data = { // 定义要返回的数据
    id: 1,
    author: '李煜', // 诗的作者
    poem: '春花秋月何时了，往事知多少。小楼昨夜又东风，故国不堪回首月明中。' // 诗的内容
   }

   const jsonData = JSON.stringify(data); // 将数据对象转换为JSON字符串

   response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' }); // 设置响应头，状态码200，内容类型为JSON

   response.write(jsonData); // 写入JSON数据到响应中
   
    response.end(); // 结束响应
});

server.listen(3000, () => { // 让服务器监听3000端口
    console.log('Server running on port 3000'); // 在控制台输出服务器运行信息
});

