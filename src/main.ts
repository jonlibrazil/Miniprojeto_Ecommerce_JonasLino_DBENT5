// Sprint 1: Definir os tipos de produtos, clientes, itens do carrinho e pedidos, e dados iniciais de produtos e 
// clientes e por fim compilar. 

import { listarProdutos, buscarProduto, cadastrarProduto } from "./produtos";
import { formatarMoeda } from "./utils";

console.log("=== ESTOQUE FÁCIL ===");

console.log("\nProdutos cadastrados:");
listarProdutos();

console.log("\nCadastrando um novo produto:");

const mouse = cadastrarProduto({
        codigo: 2,
        nome: "Mouse",
        preco: 120,
        quantidade: 12,
        categoria: "hardware"   
});

console.log(mouse ? "Produto cadastrado!" : "Código já utilizado.");

console.log("\nCadastrando um novo produto:");

const carregador = cadastrarProduto({
    codigo: 5,
    nome: "Carregador",
    preco: 110,
    quantidade: 10,
    categoria: "hardware"
});

console.log(carregador ? "Produto cadastrado!" : "Código já utilizado.");
listarProdutos();

console.log("\nConsultando produto de código 1:");

const produto = buscarProduto(2);

if (produto !== undefined) {
    console.log(produto);
}

console.log("\n=== FIM DO SISTEMA ===");