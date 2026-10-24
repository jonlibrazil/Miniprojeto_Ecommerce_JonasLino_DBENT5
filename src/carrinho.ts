import { carrinho } from "./data";
import { buscarProduto } from "./produtos";
import { formatarMoeda } from "./utils";

export function adicionarAoCarrinho (idProduto: number, quantidade: number): boolean{
    if (quantidade <= 0) { 
        console.log("Quantidade tem que ser maior que zero"); 
        return false;
    }

    const produto = buscarProduto(idProduto);

    if (produto === undefined) {
        console.log("Produto não encontrado");
        return false;
    }

    const itemExistente = carrinho.find(item => item.idProduto === idProduto);
    
    const quantidadeNoCarrinho = itemExistente !== undefined ? itemExistente.quantidade : 0;
    const quantidadeFinal = quantidadeNoCarrinho + quantidade;

    if (quantidadeFinal > produto.estoque) {
        console.log(`Estoque insuficiente para ${produto.nome}` + 
            `\nDisponínel: ${produto.estoque} | No carrinho: ${quantidadeNoCarrinho}`
        );
        return false;
    }
    
    if (itemExistente !== undefined) {
        itemExistente.quantidade += quantidade;
    } else {
        carrinho.push ({idProduto, quantidade});
    }

    console.log("Item adicionado")
    return true;
};

export function listarCarrinho ():void {
    if (carrinho.length === 0) {
        console.log("O carrinho está vazio.");
        return;
    }

    for (const item of carrinho) {
        const produto = buscarProduto(item.idProduto);
        
        if (produto === undefined) {
            console.log(`Produto ${item.idProduto} não encontrado`);
            continue
        }
        
        const subtotal = produto.preco * item.quantidade;

        console.log(
            `${produto.id} - ${produto.nome} | ` + 
            `${formatarMoeda(produto.preco)} x ${item.quantidade} | ` +
            `Subtotal: ${formatarMoeda(subtotal)} `
        )};

        console.log(`Total do pedido: ${formatarMoeda(calcularTotal())}`);
}

export function calcularTotal(): number {
    return carrinho.reduce((total, item) => {
        const produto = buscarProduto(item.idProduto);

        if (produto === undefined) {
            return total;
        }

        return total + produto.preco * item.quantidade;
    }, 0);
}

export function removerDoCarrinho(idProduto: number): boolean {
    const indice = carrinho.findIndex(item => item.idProduto === idProduto);

    if (indice === -1) {
        console.log("Produto não está no carrinho");
        return false;
    }

    carrinho.splice(indice, 1);
    console.log("Item removido do carrinho");
    return true;
};

export function alterarQuantidade(idProduto: number, novaQuantidade: number): boolean {
    if (novaQuantidade <= 0) {
        console.log("Quantidade tem que ser maior que zero.");
        return false;
    }

    const item = carrinho.find(item => item.idProduto === idProduto);

    if (item === undefined) {
        console.log("Esse produto não está no carrinho");
        return false;
    }

    const produto = buscarProduto(idProduto);

    if (produto === undefined) {
        console.log("Produto não encontrado");
        return false;
    }

    if (novaQuantidade > produto.estoque) {
        console.log(
            `Estoque insuficiente para ${produto.nome} |` +
            ` Disponível: ${produto.estoque}`
        );
        return false;
    }

    item.quantidade = novaQuantidade;
    console.log("Quantidade alterada");
    return true;
}