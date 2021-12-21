## Descrição

Projeto de API RESTful feita com Node, TypeScript e SQLite.

## Configurações iniciais

Para configurar o servidor, siga os seguintes passos:

1. Instale as dependências necessárias:

```bash
$ npm install
```

2. Instale o [Docker](https://www.docker.com/) e o [Docker Compose](https://docs.docker.com/compose/install/)
3. Execute os seguintes comandos:

```bash
$ docker-compose build
$ docker-compose up -d
```

4. Para verificar o status do container:

```bash
$ docker-compose ps
```

5. A API estará rodando na url `localhost:4000`

6. Para encerrar a execução do container:

```bash
$ docker-compose down -v
```

7. A documentação do projeto pode ser encontrada na url `http://localhost:4000/api/docs/`

8. Caso ocorra algum problema na execução do projeto, é recomendado encerrar o container, utilizando o comando
   do **passo 6**, e seguir os passos novamente a partir do **passo 3**.
