const createTag = {
    createTag: {
        tags: ['Tag'],
        summary: 'Cadastra uma nova tag.',
        description: 'Cadastra uma nova tag no banco de dados.',
        consumes: 'application/json',
        produces: 'application/json',
        parameters: [
            {
                in: 'body',
                name: 'body',
                description:
                    'Informações da nova tag que deve ser inserida no banco de dados.',
                required: true,
                schema: {
                    $ref: '#/definitions/User',
                },
            },
        ],
        responses: {
            200: {
                description: 'successful operation',
                schema: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/User',
                    },
                },
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

export default createTag;
