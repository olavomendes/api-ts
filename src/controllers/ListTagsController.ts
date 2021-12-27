import { Request, Response } from 'express';
import logger from '../logger';
import { ListTagsService } from '../services/ListTagsService';

class ListTagsController {
    async handle(request: Request, response: Response) {
        const listTagsService = new ListTagsService();

        const tags = await listTagsService.execute();

        logger.info('Listagem das tags feita com sucesso!');
        return response.json(tags);
    }
}

export { ListTagsController };
