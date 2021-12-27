import { Request, Response } from 'express';
import logger from '../logger';
import { ListUserSendComplimentsService } from '../services/ListUserSendComplimentsService';

class ListUserSendComplimentsController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;
        const listUserSendComplimentsService =
            new ListUserSendComplimentsService();

        const compliments = await listUserSendComplimentsService.execute(
            user_id,
        );

        logger.info(
            'Listagem dos usuários que enviaram elogios feita com sucesso!',
        );
        return response.json(compliments);
    }
}

export { ListUserSendComplimentsController };
