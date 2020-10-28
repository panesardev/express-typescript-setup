import express, { Request, Response, NextFunction } from 'express';
import { findById, findAll, insertUser, deleteUser, updateUser, User } from './users';

const router = express.Router();

router.get('/', (request: Request, response: Response, next: NextFunction) => {
	response.status(200).json({
		users: findAll()
	});
});

router.get('/:id', (request: Request, response: Response, next: NextFunction) => {
	const id: number = Number(request.params.id);
	response.status(200).json({
		user: findById(id)
	});
});

router.post('/', (request: Request, response: Response, next: NextFunction) => {
	const userBody: User = request.body;
	insertUser(userBody);
	response.status(200).json({
		message: 'success'
	});
});

router.put('/', (request: Request, response: Response, next: NextFunction) => {
	const userBody: User = request.body;
	insertUser(userBody);
	response.status(200).json({
		message: 'success'
	});
});


router.delete('/:id', (request: Request, response: Response, next: NextFunction) => {
	const id: number = Number(request.params.id);
	deleteUser(id);
	response.status(200).json({
		message: 'success'
	});
});

export default router;