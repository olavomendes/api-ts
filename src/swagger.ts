import userDefinition from "./docs/user/definition";

const swagger = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Documentação da API",
    description: "Descrição de todas as rotas da API",
    contact: {
      email: "olavo.77@hotmail.com",
    },
  },
  schemes: ["https", "http"],
  basePath: "/api",
  paths: {},
  definitions: {
    User: userDefinition.User,
  },
};

export default swagger;
