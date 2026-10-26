import type { Produto, Cliente, ItemCarrinho, Pedido } from "./types";

export const produtos: Produto[] = [
    {
        id: 1,
        nome: "Teclado",
        preco: 150,
        estoque: 8,
        categoria: "Hardware"
    },

    {
        id: 2,
        nome: "Mouse",
        preco: 120,
        estoque: 12,
        categoria: "Hardware"   
    },

    {
        id: 3,
        nome: "Placa de Vídeo",
        preco: 350,
        estoque: 1,
        categoria: "Hardware"
    },

    {
        id: 4,
        nome: "Antivirus",
        preco: 150,
        estoque: 26,
        categoria: "Software"   
    } 
];

export const clientes: Cliente[] = [
    {
        id: 1,
        nome: "Maria",
        email: "maria123@outlook.com"
    },

    {
        id: 2,
        nome: "João",
        email: "joao123@outlook.com"
    },

    {
        id: 3,
        nome: "Guilherme",
        email: "gui123@outlook.com"
    }
];

export const carrinho: ItemCarrinho[] = [];

export const pedidos: Pedido[] = [];