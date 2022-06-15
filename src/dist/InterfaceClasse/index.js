"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var omega = {
    motor: "4.1",
    portas: 2,
    combustivel: "Gasolina"
};
omega.cor = "Azul";
omega.combustivel = "Etanol";
/**
 * A IDE de desenvolvimento apontará um erro, pois motor é readonly
 */
//omega.motor = "3.0";
console.log(omega);
var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("".concat(this.nome, " moved ").concat(distance, "m."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(nome) {
        return _super.call(this, nome) || this;
    }
    Dog.prototype.move = function (distance) {
        if (distance === void 0) { distance = 15; }
        console.log("Corre...");
        _super.prototype.move.call(this, distance);
    };
    return Dog;
}(Animal));
var buddy = new Dog("Buddy");
// Public, private, protected
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this.age;
        },
        set: function (v) {
            this.age = v;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
//# sourceMappingURL=index.js.map