import { Request, Response, NextFunction } from "express";
import { deflate } from "zlib";

/**
 * 输出请求地址
 */
export const requestUrl = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    console.log(request.url);
    next();
}

/**
 * 默认异常处理器
 */

export const defaultErrorHandler = (
    error: any,
    request: Request,
    response: Response,
    next: NextFunction
) => {
    let statusCode: number, message: string;

    /**
     * 处理异常
     */
    switch (error.message) {
        default:
            statusCode  = 500;
            message = '服务出问题了，请稍后重试';
            break;
    }

    response.status(statusCode).send({message});
};