export type Categoria = "hardware" | "software";

export type Produto = {
    codigo: number;
    nome: string;
    preco: number;
    quantidade: number;
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
    itens: number;
    total: number;
    data: number;
}