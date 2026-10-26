import { listarClientes, buscarCliente, cadastrarCliente } from "./clientes";
import { listarProdutos, buscarProduto, cadastrarProduto, buscarProdutosPorNome, filtrarPorCategoria, atualizarProduto, removerProduto } from "./produtos";
import { adicionarAoCarrinho, listarCarrinho, removerDoCarrinho, alterarQuantidade } from "./carrinho";
import { formatarMoeda } from "./utils";
import { carrinho, pedidos } from "./data";
import { finalizarPedido, listarPedidos, listarPedidosDoCliente } from "./pedidos";
import { relatorioProdutosVendidos, relatorioVendas } from "./relatorios";


console.log("\n\n === BEM VINDO AO ECOMMERCE DIGITAL ===");


console.log("\n\nProdutos cadastrados:");
listarProdutos();


console.log("\nCadastrando um novo produto: Código 2");
const mouse = cadastrarProduto({
        id: 2,
        nome: "Mouse",
        preco: 120,
        estoque: 12,
        categoria: "Hardware"   
});
console.log(mouse ? "Produto cadastrado!" : "Código já utilizado.");


console.log("\nCadastrando um novo produto:");
cadastrarProduto({
    id: 5,
    nome: "",
    preco: 110,
    estoque: 10,
    categoria: "Hardware"
});
console.log("Cadastrando um novo produto: Carregador");
cadastrarProduto({
    id: 5,
    nome: "Carregador",
    preco: 110,
    estoque: 10,
    categoria: "Hardware"
});
listarProdutos();


console.log("\nConsultando produto de código: 2");
const produto = buscarProduto(2);
    if (produto !== undefined) {
    console.log(produto)
    } else {
    console.log("Produto não encontrado.")
};


console.log("\n Buscar produto por nome: mou");
console.log(buscarProdutosPorNome("mou"));


console.log("\nFiltrando produtos por categoria: Software");
console.log(filtrarPorCategoria("Software"));


console.log("\nAtualizando item: Estoque de Teclado");
atualizarProduto({ 
    id: 1, 
    nome: "Teclado", 
    preco: 150, 
    estoque: 100, 
    categoria: "Hardware" 
});
listarProdutos();


console.log("\nRemovendo item: Placa de Vídeo");
removerProduto(3);
listarProdutos();
console.log("Removendo item: Placa de Vídeo");
removerProduto(3);


console.log("\n\n=== SESSÃO DE CLIENTES ===\n\n");
listarClientes();


console.log("\nConsultando cliente de código 11:");
let cliente = buscarCliente(11);
    if (cliente !== undefined) {
    console.log(cliente)
    } else {
    console.log("Cliente não encontrado.")
    };

console.log("\nConsultando cliente de código: 1");
cliente = buscarCliente(1);
    if (cliente !== undefined) {
    console.log(cliente)
    } else {
    console.log("Cliente não encontrado.")
};

console.log("\nCadastrando um novo cliente:");
cadastrarCliente({
        id: 8,
        nome: "",
        email: ""
});
console.log("\nCadastrando um novo cliente: João");
cadastrarCliente({
        id: 2,
        nome: "João",
        email: "joao123@outlook.com"
});
console.log("\nCadastrando um novo cliente: Email duplicado");
cadastrarCliente({
        id: 4,
        nome: "Joãozinho",
        email: "JOAO123@outlook.com"
});
console.log("\nCadastrando um novo cliente: Janaina");
cadastrarCliente({
        id: 5,
        nome: "Janaina",
        email: "janaina@gmail.com"
});
listarClientes();


console.log("\n\n=== CARRINHO DE COMPRAS ===\n\n");
listarCarrinho();

console.log("\nAdicionando item ao carrinho: Código 18 - 5 unidades");
adicionarAoCarrinho (18, 5);

console.log("\nAdicionando item ao carrinho: Código 2 - 5 unidades");
adicionarAoCarrinho (2, 5);
listarCarrinho();

console.log("\nAdicionando item ao carrinho: Código 1 - 2 unidades");
adicionarAoCarrinho (1, 2);
listarCarrinho();

console.log("\nAdicionando unidades ao item 1 - 200 unidades");
adicionarAoCarrinho (1, 200);

console.log("\nAdicionando unidades ao item 1 - 20 unidades");
adicionarAoCarrinho (1, 20);
listarCarrinho();

console.log("\nRemovendo item do carrinho: Mouse");
removerDoCarrinho(2);
listarCarrinho();

console.log("\nAlterando unidade do item no carrinho: Teclado");
alterarQuantidade(1, -12);

console.log("\nAlterando unidade do item no carrinho: Teclado");
alterarQuantidade(1, 600);

console.log("\nAlterando unidade do item no carrinho: Teclado");
alterarQuantidade(1, 6);
listarCarrinho();

console.log("\n\n=== FINALIZAÇÃO DO PEDIDO ===\n\n");

console.log("*Demonstração de erro: Relatório de vendas sem pedidos*");
relatorioVendas();

console.log("\nFinalizando carrinho | Cliente: Maria");
finalizarPedido(1);

console.log("\nConsultando pedidos do cliente:");
listarPedidosDoCliente(1);

console.log("Finalizando carrinho vazio:");
finalizarPedido(3);


console.log("\n= INICIANDO NOVO CARRINHO =");

adicionarAoCarrinho(2, 2);
adicionarAoCarrinho(4, 5);
listarCarrinho();

console.log("\nFinalizando carrinho | Cliente: Inexistente");
finalizarPedido(100);

console.log("\nFinalizando carrinho | Cliente: Janaina");
finalizarPedido(5);

console.log("\nConsultando pedidos do cliente:");
listarPedidosDoCliente(5);

console.log("= INICIANDO NOVO CARRINHO =");
adicionarAoCarrinho(5, 2);
adicionarAoCarrinho(4, 3);
listarCarrinho();

console.log("\nFinalizando carrinho | Cliente: Maria");
finalizarPedido(1);                

     
console.log("\n= CONSULTANDO PEDIDOS =");
listarPedidos();   

console.log("Consultando pedidos do cliente: Maria");
listarPedidosDoCliente(1); 

console.log("Consultando pedidos do cliente: Guilherme");
listarPedidosDoCliente(3);     

console.log("\nConsultando pedidos do cliente: Inexistente");
listarPedidosDoCliente(99);


console.log("\n= Alterando preço Carregador após finalizar pedido =");
listarProdutos();
console.log("\nAtualizando item: Preço de Carregador");
atualizarProduto({ 
    id: 5, 
    nome: "Carregador", 
    preco: 170, 
    estoque: 8, 
    categoria: "Hardware" 
});

// console.log("");
listarProdutos();

console.log("\nConsultando pedidos: Preço não alterado");
listarPedidos();

console.log("\n= REMOVENDO PRODUTO JÁ VENDIDO =");
console.log("Removendo item: Antivirus");
removerProduto(4);

console.log("\n");
relatorioVendas();
console.log("\nConsultando relatório por produtos:");
relatorioProdutosVendidos();

console.log("\n\n=== FIM DO SISTEMA ===");

console.log("\n\nDesenvolvido por: Jonas Lino | Desenvolvedor Back-End Node.js Turma 5");
