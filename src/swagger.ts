import UserDefinition from './docs/user/definition';
import CreateUser from './docs/user/createUser';
import ListUsers from './docs/user/listUsers';

import TagDefinition from './docs/tag/definition';
import CreateTag from './docs/tag/createTag';
import ListTags from './docs/tag/listTags';

import ComplimentDefinition from './docs/compliment/definition';
import CreateCompliment from './docs/compliment/createCompliment';

const swagger = {
    swagger: '2.0',
    info: {
        version: '1.0.0',
        title: 'Documentação da API',
        description: 'Descrição de todas as rotas da API',
        contact: {
            email: 'olavo.77@hotmail.com',
        },
    },
    schemes: ['https', 'http'],
    basePath: '/api',
    paths: {
        '/users': {
            post: CreateUser.createUser,
            get: ListUsers.listUsers,
        },
        '/tags': {
            post: CreateTag.createTag,
            get: ListTags.listTags,
        },
        '/compliments': {
            post: CreateCompliment.createCompliment,
        },
    },
    definitions: {
        User: UserDefinition.User,
        Tag: TagDefinition.Tag,
        Compliment: ComplimentDefinition.Compliment,
    },
};

export default swagger;
