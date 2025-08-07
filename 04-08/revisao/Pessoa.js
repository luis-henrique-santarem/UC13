"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(name, age) {
        this.name = name;
        this.age = age;
    }
    Pessoa.prototype.getname = function () {
        return this.name;
    };
    Pessoa.prototype.setname = function (value) {
        this.name = value;
    };
    Pessoa.prototype.getage = function () {
        return this.age;
    };
    Pessoa.prototype.setage = function (value) {
        this.age = value;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
