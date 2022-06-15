interface Carro {
  readonly motor: string;
  readonly portas: number;
  combustivel: string;
  cor?: string;
  airBag?: boolean;
}

let omega: Carro = {
  motor: "4.1",
  portas: 2,
  combustivel: "Gasolina"
}

omega.cor = "Azul";
omega.combustivel = "Etanol";

/**
 * A IDE de desenvolvimento apontará um erro, pois motor é readonly
 */
//omega.motor = "3.0";

console.log(omega);

class Animal {
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
  move(distance: number=0) {
    console.log(`${this.nome} moved ${distance}m.`);
}
}

class Dog extends Animal {
  constructor(nome: string) {
    super(nome);
  }
  move(distance = 15) {
    console.log("Corre...");      
  super.move(distance);
  } 
  }

let buddy = new Dog("Buddy");

// Public, private, protected
class Person {
  public nome: string | undefined;
  private _age: number | undefined;
  protected altura: number | undefined;

  public get age(): number {
    return this.age;

}
public set age(v: number) {
  this.age = v;
}
}