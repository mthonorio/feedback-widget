# Backend do Projeto

## Tools

- Prisma
- Express

## Instalando as Dependências

Para instalar as dependências basta rodar o comando:

`npm`

ou

`yarn`

## Prisma

Para cadastrar uma nova tabela/modelo no banco de dados, após iniciar o prisma utilizando:

`npx prisma init`

E cadastrando os novos itens no arquivo _schema.prisma_, no terminal rode:

Para o ambiente de desenvolvimento:

`npx prisma migrate dev`

Para o ambiente de produção:

`npx prisma migrate deploy`

## API RESTful e Express

### Métodos HTTP

Os mais utilizados são: GET, POST, PUT, PATCH, DELETE.

| Método | Descrição                                      |
| ------ | ---------------------------------------------- |
| GET    | Buscar informações                             |
| POST   | Cadastrar informações                          |
| PUT    | Atualizar informações de uma entidade          |
| PATCH  | Atualizar uma informação única de uma entidade |
| DELETE | Deletar uma informação                         |

### SOLID

1. Single Responsibility Principle
2. Open/Closed Principle
3. Liskov Substitution Principle
4. Interface Segregation Principle
5. Dependency Inversion Principle

---

1. Cada classe/função tem uma responsabilidade única;
2. As classes da aplicação devem ser abertas para extensão, mas fechadas para modificação;
3. Nós devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando;
4. ...
5. Inversão de dependência utilizamos passando o prisma como parâmetro no FeedbacksRepository (Nota mental: estudar mais sobre esse princípio)

### Repository Partner or Data Map Partner

É a nomenclatura que utilizamos para arquivos que serão responsáveis para fazer a comunicação da aplicação com o banco de dados.
