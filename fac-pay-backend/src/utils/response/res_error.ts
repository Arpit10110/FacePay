import type { Request, Response, NextFunction } from "express";

export const error_middleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    return res.status(err.statusCode).json({
        message: err.message,
        success: false
    });
};