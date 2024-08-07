const prompt = require("prompt-sync")();


const imovel = require("./imovel.js");
const cliente = require("./cliente.js");
const corretor = require("./corretor.js");

const db = [];

let proxID = 1;

const model = (id = proxID++) => {

    corretor.index();
    const id_corretor = parseInt(prompt("Digite o ID do(a) corretor(a): "));

    cliente.index();
    const id_cliente = parseInt(prompt("Digite o ID do(a) cliente: "));

    imovel.index();
    const id_imovel = parseInt(prompt("Digite o ID do imóvel: "));

    if(id_cliente > 0 && id_corretor > 0 && id_imovel > 0) {
        return {
            id,
            id_corretor,
            id_cliente,
            id_imovel
        }
    }

    console.log("Dados inválidos.");
}

const store = () => {
    const novo = model();

    if(novo) {
        db.push(novo);
        console.log("Registro concluído com sucesso!")
    }

}

const index = () => {
    if(db.length == 0) {
        console.log("Nenhum registro encontrado.")
        return false
    }

    db.forEach(el => console.log(el));
    return true
}

const show = id => db.find(el => el.id == id);//busca e retorna um indice especifico

const update = () => {
    if(index()) {
        const id = parseInt(prompt("Digite o ID que deseja atualizar: "));

        const indice = db.findIndex(el => el.id == id);

        if(indice != -1) {
            const novo = model();

            if(novo) {
                db[indice] = novo;
                console.log("Registro atualizado com sucesso!")
            }
        }
        else {
            console.log("Registro não encontrado.");
        }
    }
}

const destroy = () => {
    if(index()) {
        const id = parseInt(prompt("Digite o ID que deseja remover: "));

        const indice = db.findIndex(el => el.id == id);

        if (indice != -1) {
            db.splice(indice, 1);
            console.log("Registro removido com sucesso!")
        }
        else {
            console.log("Registro não encontrado.")
        }
    }
}

module.exports = {
    store,
    index,
    update,
    destroy
}