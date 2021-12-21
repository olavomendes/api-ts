const createCompliment = {
    createCompliment: {
        tags: ['Compliment'],
        summary: 'Cadastra um novo elogio.',
        description: 'Cadastra um novo elogio no banco de dados.',
        consumes: 'application/json',
        produces: 'application/json',
        parameters: [
            {
                in: 'body',
                name: 'body',
                description:
                    'Informações do elogio que deve ser inserida no banco de dados.',
                required: true,
                schema: {
                    $ref: '#/definitions/Compliment',
                },
            },
        ],
        responses: {
            200: {
                description: 'successful operation',
                schema: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Compliment',
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

export default createCompliment;
