export type Categoria = "Hardware" | "Software";

export type Produto = {
    id: number;
    nome: string;
    preco: number;
    estoque: number;
    categoria: Categoria;
}

export type Cliente = {
    id: number;
    nome: string;
    email: string;
}

export type Pedido = {
    id: number;
    clienteId: number;
    itens: ItemPedido [];
    total: number;
    data: Date;
}

export type ItemCarrinho = {
    idProduto: number;
    quantidade: number;
}

export type ItemPedido = {
    idProduto: number;
    quantidade: number;
    precoUnitario: number;
}