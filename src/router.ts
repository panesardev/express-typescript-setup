import express, { Request, Response, NextFunction } from 'express';
import * as users from './users';
import { User } from './users';

const router = express.Router();

router.get('/', (request: Request, response: Response, next: NextFunction) => {
	response.status(200).json({
		users: users.findAll()
	});
});

router.get('/:id', (request: Request, response: Response, next: NextFunction) => {
	const id: number = Number(request.params.id);
	response.status(200).json({
		user: users.findById(id)
	});
});

router.post('/', (request: Request, response: Response, next: NextFunction) => {
	const userBody: User = request.body;
	users.insertUser(userBody);
	response.status(200).json({
		message: 'success'
	});
});

router.put('/', (request: Request, response: Response, next: NextFunction) => {
	const userBody: User = request.body;
	users.updateUser(userBody);
	response.status(200).json({
		message: 'success'
	});
});


router.delete('/:id', (request: Request, response: Response, next: NextFunction) => {
	const id: number = Number(request.params.id);
	users.deleteUser(id);
	response.status(200).json({
		message: 'success'
	});
});

export default router;