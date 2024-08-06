const prompt = require("prompt-sync")();

const corretora = require("./Módulos/corretora.js");
const cliente = require("./Módulos/cliente.js");
const corretor = require("./Módulos/corretor.js")

const menuPrincipal = () => {
    console.log(`
    GERENCIAMENTO DE CORRETORA DE IMÓVEIS.
    `)

while(true) {
    console.log(`
    ESCOLHA O MÓDULO QUE QUER GERENCIAR:

    1 - CORRETORA;
    2 - CLIENTE;
    3 - CORRETOR(A);
    0 - SAIR.
    `)

    const opção = parseInt(prompt(": "));

    switch(opção) {
        case 1: menuCorretora();
        break;
        case 2: menuCliente();
        break;
        case 3: menuCorretor();
        break;
        case 0: process.exit();
        break;
        default: console.log("Opção inválida.")
    }
}
}

const menuCorretora = () => {
    console.log("GERENCIAMENTO DE CORRETORA.");
        while(true) {
            console.log(`
            1 - CADASTRAR;
            2 - LISTAR;
            3 - ATUALIZAR;
            4 - REMOVER;
            0 - SAIR.
            `)

            const serviço = parseInt(prompt(": "));

            switch(serviço) {
                case 1: corretora.store();
                break;
                case 2: corretora.index();
                break;
                case 3: corretora.update();
                break;
                case 4: corretora.destroy();
                break;
                case 0: return
                break;
                default: console.log("Opção inválida.");
                break;
            }
}
}

const menuCliente = () => {
    console.log("GERENCIAMENTO DE CLIENTE.");
        while(true) {
            console.log(`
            1 - CADASTRAR;
            2 - LISTAR;
            3 - ATUALIZAR;
            4 - REMOVER;
            0 - SAIR.
            `)

            const serviço = parseInt(prompt(": "));

            switch(serviço) {
                case 1: cliente.store();
                break;
                case 2: cliente.index();
                break;
                case 3: cliente.update();
                break;
                case 4: cliente.destroy();
                break;
                case 0: return
                break;
                default: console.log("Opção inválida.");
                break;
            }
}
}

const menuCorretor = () => {
    console.log("GERENCIAMENTO DE CORRETOR(A).");
        while(true) {
            console.log(`
            1 - CADASTRAR;
            2 - LISTAR;
            3 - ATUALIZAR;
            4 - REMOVER;
            0 - SAIR.
            `)

            const serviço = parseInt(prompt(": "));

            switch(serviço) {
                case 1: corretor.store();
                break;
                case 2: corretor.index();
                break;
                case 3: corretor.update();
                break;
                case 4: corretor.destroy();
                break;
                case 0: return
                break;
                default: console.log("Opção inválida.");
                break;
            }
}
}

menuPrincipal();