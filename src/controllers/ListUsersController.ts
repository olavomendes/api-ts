import { Request, Response } from 'express';
import logger from '../logger';
import { ListUsersService } from '../services/ListUsersService';

class ListUsersController {
    async handle(request: Request, response: Response) {
        const listUsersService = new ListUsersService();
        const users = await listUsersService.execute();

        logger.info('Listagem dos usuário feita com sucesso!');
        return response.json(users);
    }
}

export { ListUsersController };
