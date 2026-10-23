import { produtos } from "./data";
import { Produto, Categoria } from "./types";
import { formatarMoeda } from "./utils";

export function listarProdutos(): void {
    for (const produto of produtos) {
        console.log(
            `${produto.id} - ${produto.nome} | ` + 
            `${formatarMoeda(produto.preco)} | ` + 
            `Estoque: ${produto.estoque}`
        )
    }
};

export function buscarProduto(codigo: number): Produto | undefined {
    return produtos.find(produto => produto.id === codigo);
};

export function cadastrarProduto(produto: Produto): boolean {
    const existente = buscarProduto(produto.id);

    if (existente !== undefined) {
        console.log("Esse produto já existe");
        return false;
    };

    if (produto.nome.trim() === "") {
        console.log("Preencha o nome do produto. \n");
        return false;
    };

    if (produto.preco <= 0) {
        console.log("Preço deve ser maior que zero.");
        return false;
    };

    if (produto.estoque < 0) {
        console.log("Estoque não pode ser negativo.");
        return false;
    };

    produtos.push(produto);
    console.log("Seu produto foi adicionado.");
    return true;
};

export function buscarProdutosPorNome(trecho: string): Produto[] {
    return produtos.filter(produto => produto.nome.toLowerCase().includes(trecho.toLowerCase()));
};

export function filtrarPorCategoria(categoria: Categoria): Produto[] {
    return produtos.filter(produto => produto.categoria === categoria);
};

export function atualizarProduto(produtoAtualizado: Produto): boolean {
    const produto = buscarProduto(produtoAtualizado.id);

    if (produto === undefined) {
        console.log("Produto não encontrado");
        return false;
    };

    if (produtoAtualizado.nome.trim() === "") {
        console.log("Preencha o nome do produto. \n");
        return false;
    };

    if (produtoAtualizado.preco <= 0) {
        console.log("Preço deve ser maior que zero.");
        return false;
    };

    if (produtoAtualizado.estoque < 0) {
        console.log("Estoque não pode ser negativo.");
        return false;
    };

    produto.nome = produtoAtualizado.nome;
    produto.preco = produtoAtualizado.preco;
    produto.estoque = produtoAtualizado.estoque;
    produto.categoria = produtoAtualizado.categoria;

    console.log("Produto atualizado");
    return true;
};

export function removerProduto(id: number): boolean {
    const indice = produtos.findIndex(produto => produto.id === id);

    if (indice === -1) {
        console.log("Produto não encontrado");
        return false;
    };

    produtos.splice(indice, 1);
    console.log("Produto removido");
    return true;
};
