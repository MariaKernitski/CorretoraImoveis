const prompt = require("prompt-sync")();

const corretora = require("./corretora.js");

const show = (id) => db.find(el => el.id == id);//busca e retorna um indice especifico

const db = [];

let proxID = 1;

const model = (id = proxID++) => {
    const nome = prompt("Digite o nome do(a) corretor(a): ");

    corretora.index();
    const id_corretora = parseInt(prompt("Digite o ID da corretora a qual o(a) corretor(a) pertence: "));

    if(nome != "") {
        return {
            id,
            nome,
            id_corretora
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