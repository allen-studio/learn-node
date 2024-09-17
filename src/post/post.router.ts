import express from "express";
import * as postController from './post.controller'
// 修改路径为相对路径
import { requestUrl } from "../app/app.middleware";

const router = express.Router();

/**
 * 内容列表
 */
router.get('/posts', requestUrl, postController.index);

/**
 * 导出路由
 */
export default router;
