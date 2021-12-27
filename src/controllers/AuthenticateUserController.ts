import { Request, Response } from 'express';
import logger from '../logger';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        const authenticateUserService = new AuthenticateUserService();

        const token = await authenticateUserService.execute({
            email,
            password,
        });

        logger.info('Usuário autenticado criado com sucesso!');
        return response.status(200).json(token);
    }
}

export { AuthenticateUserController };
