import { NextFunction, Request, Response } from "express";

declare type RequestError = Error & {
    status?: number;
}

export function errorHandler (err: RequestError, req: Request, res: Response, next: NextFunction): void {
    res.status(err.status || 500).send(err.message);
}

export function notFoundHandler (req: Request, res: Response, next: NextFunction): void {
    next({message: "The file or endpoint requested could not be found.", status: 404})
}