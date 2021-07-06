import { Request, Response, NextFunction } from 'express';

export default function logger(request: Request, response: Response, next: NextFunction) {
	console.log(`${request.method} ${request.url}`);
	next(); // important!
}
