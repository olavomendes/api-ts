import { Request, Response } from 'express';
import logger from '../logger';
import { ListUserReceiveComplimentsService } from '../services/ListUserReceiveComplimentsService';

class ListUserReceiveComplimentsController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;
        const listUserSendComplimentsService =
            new ListUserReceiveComplimentsService();

        const compliments = await listUserSendComplimentsService.execute(
            user_id,
        );

        logger.info(
            'Listagem dos usuários que receberam elogios feita com sucesso!',
        );
        return response.json(compliments);
    }
}

export { ListUserReceiveComplimentsController };
