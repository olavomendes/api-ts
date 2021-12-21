const listUsers = {
    listUsers: {
        tags: ['User'],
        summary: 'retorna todos os usuários cadastrados.',
        responses: {
            200: {
                description: 'successful operation',
            },
            400: {
                description: 'Invalid status value',
            },
        },
        security: [
            {
                api_key: [],
            },
        ],
    },
};

export default listUsers;
