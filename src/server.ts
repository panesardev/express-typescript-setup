import express from 'express';
import router from './router';

const server = express();
const PORT = process.env.PORT || 5000;

server.use('/users', router);

server.listen(PORT, () => { 
	console.log(`Server running on PORT: ${PORT}`)
});
