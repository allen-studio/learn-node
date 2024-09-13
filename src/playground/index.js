// 引入 express 模块
const express = require('express');
// 创建 express 应用
const app = express();
// 设置服务器端口
const port = 3000;

// 启动服务器并监听指定端口
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// 定义根路由，返回 'Hello World'
app.get('/', (req, res) => {
    res.send('Hello World');
});

// 定义一个数据数组，包含多个帖子
const data = [
    {
        id: 1,
        title: 'title1',
        content: 'content1',
        author: 'author1',
    },
    {
        id: 2,
        title: 'title2',
        content: 'content2',
        author: 'author2',
    },
    {
        id: 3,
        title: 'title3',
        content: 'content3',
        author: 'author3',
    }
];

// 定义 '/posts' 路由，返回所有帖子数据
app.get('/posts', (req, res) => {
    res.send(data);
});

// 定义 '/posts/:postId' 路由，根据 postId 返回特定帖子
app.get('/posts/:postId', (req, res) => {
    const postId = req.params.postId; // 获取请求参数中的 postId

    // 将 postId 转换为数字并过滤数据
    const posts = data.filter(item => item.id === Number(postId));

    // 返回找到的帖子
    res.send(posts[0]);
});
