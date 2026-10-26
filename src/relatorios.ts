import { pedidos } from "./data";
import { buscarProduto } from "./produtos";
import { ItemCarrinho } from "./types";
import { formatarMoeda } from "./utils";

export function relatorioVendas(): void {
    if (pedidos.length === 0) {
        console.log("Nenhuma venda registrada.");
        return;
    }

    const faturamento = pedidos.reduce((soma, pedido) => soma + pedido.total, 0);
    const ticketMedio = faturamento / pedidos.length;

    console.log("=== RELATÓRIO DE VENDAS ===");
    console.log(`\nPedidos realizados: ${pedidos.length}`);
    console.log(`Faturamento total: ${formatarMoeda(faturamento)}`);
    console.log(`Ticket médio: ${formatarMoeda(ticketMedio)}`);

};

export function relatorioProdutosVendidos(): void {
    if (pedidos.length === 0) {
        console.log("Nenhuma venda registrada.");
        return;
    }

    const vendidos: ItemCarrinho[] = [];

    for (const pedido of pedidos) {
        for (const item of pedido.itens) {
            const existente = vendidos.find(v => v.idProduto === item.idProduto);

            if (existente !== undefined) {
                existente.quantidade += item.quantidade;
            } else {
                vendidos.push({ idProduto: item.idProduto, quantidade: item.quantidade });
            }
        }
    }

    vendidos.sort((a, b) => b.quantidade - a.quantidade);

    console.log("=== RELATÓRIO DE VENDAS | PRODUTOS ===\n");

    for (const v of vendidos) {
        const produto = buscarProduto(v.idProduto);
        const nome = produto !== undefined ? produto.nome : `Produto ${v.idProduto}`;

        console.log(`${nome}: ${v.quantidade} unidade(s)`);
    }
}