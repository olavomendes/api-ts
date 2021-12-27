import { Request, Response } from 'express';
import logger from '../logger';
import { CreateTagService } from '../services/CreateTagService';

class CreateTagController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;
        const createTagService = new CreateTagService();

        const tag = await createTagService.execute(name);

        logger.info('Tag criada com sucesso!');
        return response.json(tag);
    }
}

export { CreateTagController };
