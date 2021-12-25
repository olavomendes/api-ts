import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import { router } from './routes';
import swaggerjson from './swagger';
import SwaggerUI = require('swagger-ui-express');

import './database';
import logger from './logger';

const app = express();

app.use(express.json());
app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof Error) {
            return response.status(400).json({ error: err.message });
        }
        return response.status(500).json({
            status: 'error',
            message: 'Erro no servidor interno',
        });
    },
);
app.use('/api/docs', SwaggerUI.serve, SwaggerUI.setup(swaggerjson));

const port = process.env.APP_PORT;
app.listen(port, () => console.log(`Servidor iniciado em "localhost:${port}"`));
logger.info(`Servidor iniciado em "localhost:${port}"`);
