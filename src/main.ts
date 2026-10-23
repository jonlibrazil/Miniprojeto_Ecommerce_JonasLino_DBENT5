// Sprint 1: Definir os tipos de produtos, clientes, itens do carrinho e pedidos, e dados iniciais de produtos e 
// clientes e por fim compilar. 

import { listarProdutos, buscarProduto, cadastrarProduto, buscarProdutosPorNome, filtrarPorCategoria,
    atualizarProduto, removerProduto } from "./produtos";
import { formatarMoeda } from "./utils";


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
console.log("\nRemovendo item: Placa de Video");
removerProduto(3);
listarProdutos();


console.log("\n\n=== FIM DO SISTEMA ===");






