"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
// Variáveis
var nome = "Luis";
var idade = 19;
var estudante = true;
// Arrays
var listaDeCompras = ["Batata", "Feijão", "Carne"];
var notas = [10, 8, 9.5];
// Objetos Literais
var professor = {
    nome: "Leonardo",
    idade: 30,
    disciplinas: ["UC1", "UC2", "UC3"]
};
// Funções
function mensagem() {
    console.log("olá pessoal");
}
// Retorno String
function frase(nome) {
    return "Ol\u00E1 ".concat(nome, ", como vai voc\u00EA");
}
// Parâmetro opcional
function fraseOpcional(nome) {
    console.log("Olá " + (nome || "Mundo!"));
}
fraseOpcional();
fraseOpcional("Leonardo");
// Parâmetro
function calculaValor(valor, desconto) {
    if (desconto === void 0) { desconto = 5; }
    console.log(valor - desconto);
}
calculaValor(100);
calculaValor(100, 10);
var fulano = new Pessoa_1.Pessoa("Leo Senac de Souza", 30);
console.log(fulano.getage());
console.log(fulano.getname());
