import { Router } from 'express';

const router: Router = Router();

router.get('', (request, response) => {
	response.send('Hello World!');
});	

router.get('/:name', (request, response) => {
	const name: string = request.params['name'];

	response.send(`Hello ${name}`);
});

export default router;