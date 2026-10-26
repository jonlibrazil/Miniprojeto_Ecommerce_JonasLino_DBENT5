# Sistema de Gerenciamento de E-commerce

## Aluno: Jonas Lino | Desenvolvimento Back-End Node.js Turma 5

## Objetivo

Aplicação back-end desenvolvida em TypeScript e Node.js para organizar as operações de uma pequena loja virtual: cadastro de produtos e clientes, controle de estoque, carrinho de compras, registro de pedidos e relatórios de vendas.

O foco do projeto é a lógica da aplicação e a organização do código. Não há interface gráfica, banco de dados nem integração com pagamentos, e os dados ficam em memória durante a execução.

## Funcionalidades

**Produtos**
- Cadastrar, listar, atualizar e remover produtos
- Buscar por identificador
- Buscar por parte do nome (sem diferenciar maiúsculas e minúsculas)
- Filtrar por categoria

**Clientes**
- Cadastrar e listar clientes
- Buscar cliente por identificador

**Carrinho de compras**
- Adicionar, remover e alterar a quantidade de itens
- Listar os itens com o subtotal de cada um
- Calcular o valor total da compra

**Pedidos**
- Finalizar a compra de um cliente
- Atualizar o estoque após o pedido
- Consultar todos os pedidos e os pedidos de um cliente

**Relatórios**
- Resumo de vendas (pedidos realizados, faturamento e ticket médio)
- Produtos vendidos e quantidade de cada um

## Tecnologias

- TypeScript
- Node.js
- Git e GitHub

## Estrutura do projeto

```
src/
├── types.ts       # tipos: Produto, Cliente, ItemCarrinho, ItemPedido, Pedido
├── data.ts        # dados iniciais (produtos e clientes) e arrays do carrinho e dos pedidos
├── utils.ts       # funções auxiliares (formatarMoeda)
├── produtos.ts    # cadastro, consulta, atualização e remoção de produtos
├── clientes.ts    # cadastro e consulta de clientes
├── carrinho.ts    # operações do carrinho e cálculo dos valores
├── pedidos.ts     # finalização e consulta de pedidos
├── relatorios.ts  # relatórios de vendas
└── main.ts        # demonstração das funcionalidades
```

## Regras de negócio

**Produtos**
- O identificador deve ser único
- O nome não pode estar vazio
- O preço deve ser maior que zero
- O estoque não pode ser negativo
- Um produto que já foi vendido não pode ser removido, para preservar o histórico dos pedidos

**Clientes**
- O identificador e o e-mail devem ser únicos
- Nome e e-mail são obrigatórios

**Carrinho**
- A quantidade deve ser maior que zero
- Não é possível adicionar produtos inexistentes
- A quantidade no carrinho não pode ultrapassar o estoque disponível
- Adicionar um produto que já está no carrinho soma a quantidade, sem criar linhas duplicadas
- Subtotal = preço unitário × quantidade, e o total é a soma dos subtotais

**Pedidos**
- O cliente deve existir e o carrinho não pode estar vazio
- Todos os itens são validados antes de qualquer alteração. Se algum item falhar, o pedido não é registrado e nenhum estoque é descontado
- O estoque só é atualizado depois da validação completa
- O preço de cada item é guardado no pedido no momento da compra, então mudanças futuras no catálogo não alteram pedidos anteriores
- O carrinho é esvaziado após a finalização

## Como executar

**Pré-requisitos:** Node.js e TypeScript instalados.

1. Clone o repositório e entre na pasta do projeto:

```bash
git clone <https://github.com/jonlibrazil/Miniprojeto_Ecommerce_JonasLino_DBENT5>
cd <Desenvolvedor Back-End Node T5>
```

2. Compile os arquivos TypeScript para JavaScript:

```bash
tsc
```

3. Execute a aplicação compilada:

```bash
node dist/main.js
```

O arquivo `main.ts` demonstra o fluxo completo: consulta e cadastro de produtos e clientes, montagem do carrinho, finalização de pedido, atualização do estoque, relatórios e testes de situações inválidas.