const listTags = {
    listTags: {
        tags: ['Tag'],
        summary: 'retorna todos as tags cadastradas.',
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

export default listTags;
