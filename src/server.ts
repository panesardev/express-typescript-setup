import express from 'express';
import router from './router';

const server = express();
const PORT: number = 5000 || process.env.PORT;

server.use('/users', router);

server.listen(PORT, () => { 
	console.log(`Server running on PORT: ${PORT}`)
});
