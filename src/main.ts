// Sprint 1: Definir os tipos de produtos, clientes, itens do carrinho e pedidos, e dados iniciais de produtos e 
// clientes e por fim compilar. 

import { listarClientes, buscarCliente, cadastrarCliente } from "./clientes";
import { listarProdutos, buscarProduto, cadastrarProduto, buscarProdutosPorNome, filtrarPorCategoria,atualizarProduto, removerProduto } from "./produtos";
import { adicionarAoCarrinho, listarCarrinho, removerDoCarrinho, alterarQuantidade } from "./carrinho";
import { formatarMoeda } from "./utils";
import { carrinho } from "./data";


console.log("\n === BEM VINDO AO ECOMMERCE DIGITAL ===");


console.log("\nProdutos cadastrados:");
listarProdutos();


console.log("\nCadastrando um novo produto: Codigo 2");
const mouse = cadastrarProduto({
        id: 2,
        nome: "Mouse",
        preco: 120,
        estoque: 12,
        categoria: "Hardware"   
});
console.log(mouse ? "Produto cadastrado!" : "Código já utilizado.");


console.log("\nCadastrando um novo produto:");
let carregador = cadastrarProduto({
    id: 5,
    nome: "",
    preco: 110,
    estoque: 10,
    categoria: "Hardware"
});
console.log("Cadastrando um novo produto: Carregador");
carregador = cadastrarProduto({
    id: 5,
    nome: "Carregador",
    preco: 110,
    estoque: 10,
    categoria: "Hardware"
});
listarProdutos();


console.log("\nConsultando produto de código 2:");
const produto = buscarProduto(2);
    if (produto !== undefined) {
    console.log(produto);
}
    else {
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


console.log("\nRemovendo item: Placa de Video");
removerProduto(3);
listarProdutos();
console.log("Removendo item: Placa de Video");
removerProduto(3);


console.log("\n\n=== SESSÃO DE CLIENTES ===");
listarClientes();


console.log("\nConsultando cliente de código 11:");
let cliente = buscarCliente(11);
    if (cliente !== undefined) {
    console.log(cliente);
}
    else {
    console.log("Cliente não encontrado.")
};

console.log("\nConsultando cliente de código 1:");
cliente = buscarCliente(1);
    if (cliente !== undefined) {
    console.log(cliente);
}
    else {
    console.log("Cliente não encontrado.")
};

console.log("\nCadastrando um novo cliente:");
const fulano = cadastrarCliente({
        id: 8,
        nome: "",
        email: ""
});
console.log("\nCadastrando um novo cliente: João");
const joao = cadastrarCliente({
        id: 2,
        nome: "João",
        email: "joao123@outlook.com"
});
console.log("\nCadastrando um novo cliente: Email duplicado");
const emailDuplicado = cadastrarCliente({
        id: 4,
        nome: "Joãozinho",
        email: "JOAO123@outlook.com"
});
console.log("\nCadastrando um novo cliente: Janaina");
const janaina = cadastrarCliente({
        id: 5,
        nome: "Janaina",
        email: "janaina@gmail.com"
});
listarClientes();


console.log("\n\n=== CARRINHO DE COMPRAS ===");
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


console.log("\n\n=== FIM DO SISTEMA ===");