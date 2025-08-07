import { Pessoa } from "./Pessoa"

// Variáveis
let nome:string = "Luis"
let idade:number = 19
let estudante:boolean = true

// Arrays
let listaDeCompras:string [] = ["Batata", "Feijão", "Carne"]
let notas:Array<number> = [10, 8, 9.5]

// Objetos Literais
let professor: {nome:string, idade:number, disciplinas:string[]} = {
    nome: "Leonardo",
    idade: 30,
    disciplinas:["UC1","UC2","UC3"]
}

// Funções
function mensagem():void {
    console.log("olá pessoal")
}

// Retorno String
function frase(nome:string):string {
    return `Olá ${nome}, como vai você`
}

// Parâmetro opcional
function fraseOpcional(nome?:string):void {
    console.log("Olá " + (nome || "Mundo!"))
}

fraseOpcional()
fraseOpcional("Leonardo")

// Parâmetro
function calculaValor(valor:number, desconto:number = 5):void {
    console.log(valor - desconto)
}
calculaValor(100)
calculaValor(100, 10)

const fulano:Pessoa = new Pessoa("Leo Senac de Souza", 30)
console.log(fulano.getAge())
console.log(fulano.getName())