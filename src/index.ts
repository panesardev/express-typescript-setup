import express, { Application, json } from 'express';
import cors from 'cors';
import compression from 'compression';
import logger from './logger';
import router from './router';

const app: Application = express();

app.use(json());
app.use(cors());
app.use(compression());

app.use(logger);
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port: ${port}`));
