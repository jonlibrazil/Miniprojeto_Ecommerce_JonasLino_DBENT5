import { clientes } from "./data";
import { Cliente } from "./types";

export function listarClientes(): void {
    for (const cliente of clientes) {
        console.log(
             `${cliente.id} - ${cliente.nome} | ` +  
             `Email: ${cliente.email}`
            )
        }
};

export function buscarCliente(codigo: number): Cliente | undefined {
    return clientes.find(cliente => cliente.id === codigo);
};

export function cadastrarCliente(cliente: Cliente): boolean {
    const existente = buscarCliente(cliente.id);

    if (existente !== undefined) {
        console.log("Cliente já existe.");
        return false;
    };

    if (cliente.nome.trim() === "") {
        console.log("Preencha o nome do cliente.");
        return false;
    };

    if (cliente.email.trim() === "") {
        console.log("Preencha o Email do cliente.");
        return false;
    };

    const emailJaExiste = clientes.some(
        emailDuplicado => emailDuplicado.email.toLowerCase() === cliente.email.toLowerCase()
    );

    if (emailJaExiste) {
        console.log("Esse e-mail já está cadastrado.");
        return false;
    }

    clientes.push(cliente);
    console.log("O cliente foi adicionado");
    return true;
};