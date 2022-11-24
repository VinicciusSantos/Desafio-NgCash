# Anotações da regras de negócio

## Rotas:

### ```/auth/register```
- Criar user:
  - username
    - unique
    - 3+ caracteres
  - password
    - 8+ caracteres:
      - 1+ numero
      - 1+ Maiúscula
    - Armazenar senha hasheada

- Criar Account Automaticamente caso o usuario tenha sido criado com sucesso:
  - Balance inicial de R$100,00

- Vincular Account com User

### ```/auth/login```
- Receber username e password
- Gerar Token JWT com 24 horas de duração

### ```/account```
- Mostrar o balance atual do usuario
- Mostrar as transações que o usuario participou
- O usuario deve ser identificado pelo token para evitar problemas

### ```/transactions```
- Filtrar as transações:
  - Data de realização da transação
  - Transações de cash-out;
  - Transações de cash-in.
 
### ```/transactions/cash-out```
- Receber username de que for receber e valor
- Usuario não pode transferir para ele mesmo
- Usuario tem que ter saldo suficiente
- gravar transação bem sucedida na tabela transactions
  