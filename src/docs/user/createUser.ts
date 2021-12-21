const createUser = {
  createUser: {
    tags: ["User"],
    summary: "Cadastra um novo usuário.",
    description: "Cadastra um novo usuário no banco de dados.",
    consumes: "application/json",
    produces: "application/json",
    parameters: [
      {
        in: "body",
        name: "body",
        description:
          "Informações do novo usuário que deve ser inserido no banco de dados.",
        required: true,
        schema: {
          $ref: "#/definitions/User",
        },
      },
    ],
    responses: {
      200: {
        description: "successful operation",
        schema: {
          type: "array",
          items: {
            $ref: "#/definitions/User",
          },
        },
      },
      400: {
        description: "Invalid status value",
      },
    },
    security: [
      {
        api_key: [],
      },
    ],
  },
};

export default createUser;
