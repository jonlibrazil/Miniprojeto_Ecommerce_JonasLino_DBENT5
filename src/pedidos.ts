import { carrinho, pedidos } from "./data";
import { buscarCliente } from "./clientes";
import { buscarProduto } from "./produtos";
import { ItemPedido, Pedido } from "./types";
import { formatarMoeda } from "./utils";

export function finalizarPedido(clienteID: number): boolean {
    const cliente = buscarCliente(clienteID);

    if (cliente === undefined) {
        console.log("Cliente não encontrado.");
        return false;
    }

    if (carrinho.length === 0) {
        console.log("Adicione itens ao carrinho.")
        return false;
    }

    const itensPedido: ItemPedido[] = [];

    for (const item of carrinho) {
        const produto = buscarProduto(item.idProduto);

        if (produto === undefined) {
            console.log(`Produto ${item.idProduto} não existe mais.`);
            return false;
        }

        if (item.quantidade > produto.estoque) {
            console.log(`Estoque insuficiente para ${produto.nome}.`);
            return false;
        }

        itensPedido.push({
            idProduto: item.idProduto,
            quantidade: item.quantidade,
            precoUnitario: produto.preco
        });
    }

    const total = itensPedido.reduce(
        (soma, item) => soma + item.precoUnitario * item.quantidade,
        0
    );

    for (const item of itensPedido) {
        const produto = buscarProduto(item.idProduto);

        if (produto !== undefined) {
            produto.estoque -= item.quantidade;
        }
    }

    const pedido: Pedido = {
        id: pedidos.length + 1,
        clienteId: cliente.id,
        itens: itensPedido,
        total: total,
        data: new Date()
    };

    pedidos.push(pedido);
    carrinho.length = 0;

    console.log(`Pedido ${pedido.id} finalizado. Total: ${formatarMoeda(total)}`);
    return true;
}

function exibirPedido(pedido: Pedido): void {
    const cliente = buscarCliente(pedido.clienteId);
    const nomeCliente = cliente !== undefined ? cliente.nome : "Cliente não encontrado.";

    console.log(
        `Pedido: ${pedido.id} | Cliente: ${nomeCliente} | ` +
        `Data: ${pedido.data.toLocaleDateString("pt-BR")}`
    );

    for (const item of pedido.itens) {
        const produto = buscarProduto(item.idProduto);
        const nomeProduto = produto !== undefined ? produto.nome : `Produto ${item.idProduto}`;
        const subtotal = item.precoUnitario * item.quantidade;

        console.log(
            `  ${nomeProduto} | ${formatarMoeda(item.precoUnitario)} x ${item.quantidade} = ` +
            `${formatarMoeda(subtotal)}`
        );
    }

    console.log(`  TOTAL: ${formatarMoeda(pedido.total)}\n`);
};

export function listarPedidos(): void {
    if (pedidos.length === 0) {
        console.log("Nenhum pedido registrado.");
        return;
    }

    for (const pedido of pedidos) {
        exibirPedido(pedido);
    }
};

export function listarPedidosDoCliente(clienteId: number): void {
    const cliente = buscarCliente(clienteId);

    if (cliente === undefined) {
        console.log("Cliente não encontrado.");
        return;
    }

    const pedidosDoCliente = pedidos.filter(pedido => pedido.clienteId === clienteId);

    if (pedidosDoCliente.length === 0) {
        console.log(`${cliente.nome} ainda não fez pedidos.`);
        return;
    }

    for (const pedido of pedidosDoCliente) {
        exibirPedido(pedido);
    }
};