"use strict";
/**
 * Tipo String
 */
var text = "Valor da String";
text = 'Mudei o valor;';
// Indicará erro
//text=3;
/**
 * Tipo Number
 */
var num;
num = 10;
num = 5 + 8;
var anotherNum = 5.8;
var hexNum = 0xf00d;
var binaryNum = 10;
var octalNum = 484;
/**
 * Tipo Boolean
 */
var isValid = true;
isValid = false;
/**
 * Tipo de Array
 */
var arr = ["Arroz", "Feijão", "Couve", "Bisteca de Porco"];
var arrGeneric = ["Arroz", "Feijão", "Couve", "Bisteca de Porco"];
/**
 * Tipo Tupla
 */
var tuple = ["hello", 10, "world", 20];
console.log(tuple[0]);
console.log(tuple[1]);
//Indicará erro
//tuple = [1, 'hello', 2, 'world'];
/**
 * Enum
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Yellow"] = 3] = "Yellow";
})(Color || (Color = {}));
;
var AnotherColor;
(function (AnotherColor) {
    AnotherColor[AnotherColor["Red"] = 1] = "Red";
    AnotherColor[AnotherColor["Green"] = 2] = "Green";
    AnotherColor[AnotherColor["Blue"] = 4] = "Blue";
    AnotherColor[AnotherColor["Yellow"] = 5] = "Yellow";
})(AnotherColor || (AnotherColor = {}));
;
console.log(Color);
/**
 * Tipo Any
 */
var qualquer;
qualquer = "String";
qualquer = 10;
qualquer = true;
/**
 * Void
 */
function printt(msg) {
    console.log("Fun\u00E7\u00E3o sem retorno: ".concat(msg));
}
printt("Escreve Algo na tela");
//# sourceMappingURL=types.js.map