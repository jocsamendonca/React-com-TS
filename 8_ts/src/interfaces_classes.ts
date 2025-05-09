// Definindo uma interface para um usuário
interface User {
  id: number;
  name: string;
  isActive: boolean;
}

// Utilizando a interface
const myUser: User = {
  id: 1,
  name: "Alice",
  isActive: true,
};

console.log(myUser);

// Extensão de interfaces
interface Employee extends User {
  department: string;
}

const employee: Employee = {
  id: 2,
  name: "Bob",
  isActive: true,
  department: "Development",
};

console.log(employee);

// Definindo uma classe que implementa uma interface
class Person implements User {
  id: number;
  name: string;
  isActive: boolean;
  nicName: string;

  constructor(id: number, name: string, isActive: boolean, nicName: string) {
    this.id = id;
    this.name = name;
    this.isActive = isActive;
    this.nicName = nicName;
  }

  greet() {
    console.log(`Olá, meu nome é ${this.name} e meu nick é ${this.nicName}`);
  }
}

const personData = new Person(3, "Charlie", true, "Monster");
personData.greet();
