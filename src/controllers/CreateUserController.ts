import { Request, Response } from 'express';
import logger from '../logger';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, admin, password } = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            name,
            email,
            admin,
            password,
        });

        logger.info('Usuário criado com sucesso!');
        return response.json(user);
    }
}

export { CreateUserController };
