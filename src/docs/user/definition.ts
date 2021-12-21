const user = {
  User: {
    type: "object",
    properties: {
      id: {
        type: "uuid",
        format: "int64",
      },
      name: {
        type: "string",
        format: "int64",
        example: "Ana",
      },
      email: {
        type: "string",
        example: "ana@email.com",
      },
      admin: {
        type: "boolean",
        example: false,
      },
      password: {
        type: "string",
        example: "anne2021anne",
      },
      created_at: {
        type: "Date",
      },
      updated_at: {
        type: "Date",
      },
    },
  },
};

export default user;
