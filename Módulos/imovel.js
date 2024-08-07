const prompt = require("prompt-sync")();

const corretora = require("./corretora.js");

const db = [];

let proxID = 1;

const model = (id = proxID++) => {
    const numero = prompt("Digite o número do imóvel: ");
    const rua = prompt("Digite a rua do imóvel: ");
    const bairro = prompt("Digite o bairro do imóvel: ");

    corretora.index();
    const id_corretora = parseInt(prompt("Digite o ID da corretora: "));

    if(numero != "" && rua != "" && bairro != "") {
        return {
            id,
            numero,
            bairro,
            rua,
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

const show = id => db.find(el => el.id == id);//busca e retorna um indice especifico

const update = () => {
    if(index()) {
        const id = parseInt(prompt("Digite o ID que deseja atualizar: "));

        const indice = db.findIndex(el => el.id == id);

        if(indice != -1) {
            const novo = model(id);

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