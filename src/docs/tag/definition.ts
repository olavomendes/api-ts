const tag = {
    Tag: {
        type: 'object',
        properties: {
            id: {
                type: 'uuid',
                format: 'int64',
            },
            name: {
                type: 'string',
                format: 'int64',
                example: '#Felicidade',
            },
            created_at: {
                type: 'Date',
            },
            updated_at: {
                type: 'Date',
            },
        },
    },
};

export default tag;
