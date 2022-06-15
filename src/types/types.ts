/**
 * Tipo String
 */
let text: string = "Valor da String";
text = 'Mudei o valor;'
// Indicará erro
//text=3;

/**
 * Tipo Number
 */
let num: number;
num = 10;
num= 5 + 8;

let anotherNum: number = 5.8;
let hexNum: number = 0xf00d;
let binaryNum: number = 0b1010;
let octalNum: number = 0o744;

/**
 * Tipo Boolean
 */
let isValid: boolean = true;
isValid = false;

/**
 * Tipo de Array
 */
let arr: String[] = ["Arroz", "Feijão", "Couve", "Bisteca de Porco"]; 
let arrGeneric: Array<String> = ["Arroz", "Feijão", "Couve", "Bisteca de Porco"];
 
/**
 * Tipo Tupla
 */
 let tuple: [string, number, string, number] = ["hello", 10, "world", 20];
 
 console.log(tuple[0]);
  console.log(tuple [1]);
  //Indicará erro
  //tuple = [1, 'hello', 2, 'world'];


/**
 * Enum
 */
enum Color {Red, Green, Blue, Yellow};
enum AnotherColor {Red = 1, Green=2, Blue=4, Yellow};
console.log(Color);

/**
 * Tipo Any
 */

let qualquer: any;
qualquer = "String";
qualquer = 10;
qualquer = true;

/**
 * Void
 */

function printt(msg: string): void {
    console.log(`Função sem retorno: ${msg}`);
}
printt("Escreve Algo na tela");