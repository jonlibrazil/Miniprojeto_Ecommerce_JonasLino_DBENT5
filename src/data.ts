import type { Produto } from "./types";
import type { Cliente } from "./types";

export const produtos: Produto[] = [
    {
        codigo: 1,
        nome: "Teclado",
        preco: 150,
        quantidade: 8,
        categoria: "hardware"
    },

    {
        codigo: 2,
        nome: "Mouse",
        preco: 120,
        quantidade: 12,
        categoria: "hardware"   
    },

    {
        codigo: 3,
        nome: "Placa de Video",
        preco: 350,
        quantidade: 6,
        categoria: "hardware"
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
]
