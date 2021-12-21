const compliment = {
    Compliment: {
        type: 'object',
        properties: {
            id: {
                type: 'uuid',
                format: 'int64',
            },
            user_sender: {
                type: 'uuid',
                format: 'int64',
            },
            user_receiver: {
                type: 'uuid',
                format: 'int64',
            },
            tag_id: {
                type: 'uuid',
                format: 'int64',
            },
            message: {
                type: 'string',
                format: 'Obrigado pela ajuda :)',
            },
            created_at: {
                type: 'Date',
            },
        },
    },
};

export default compliment;
