// Exercício 1: Trabalhando com Interfaces

// Enunciado:
// Defina uma interface Vehicle que represente um veículo, com propriedades para mark (marca), model (modelo) e year (ano).
// Crie uma função que aceite um Vehicle como argumento e imprima uma descrição do veículo.

interface Vehicle {
  mark: string;
  model: string;
  year: number;
}
const myCar: Vehicle = {
  mark: "VW",
  model: "Virtus",
  year: 2017,
};

console.log(myCar);

function vehicleDescription(vehicle: Vehicle): void {
  console.log(
    `Descrição do veículo: \n\tmarca: ${vehicle.mark}, \n\tmodelo: ${vehicle.model}, \n\tano: ${vehicle.year}.`
  );
}
vehicleDescription(myCar);

// Exercício 2: Genéricos em Funções

// Enunciado:
// Crie uma função genérica firstElement que retorne o primeiro item de um array.
// A função deve ser capaz de trabalhar com qualquer tipo de dado.

function firstElement<T>(itens: T[]): T {
  return itens[0];
}

const newNumbers = [1, 2, 3, 4];
console.log(firstElement(newNumbers));

const fruits = ["Banana", "Maçã", "Laranja"];
console.log(firstElement(fruits));

// Exercício 3: Uso de Readonly e Partial

// Enunciado:
// Dado o tipo Product abaixo, crie uma função freezeProduct que torne um produto imutável.
// Em seguida, crie outra função updateProductPrice que atualize apenas o preço de um produto, demonstrando o uso de Partial.

type Product = {
  id: number;
  name: string;
  price: number;
};

function freezeProduct(product: Product): Readonly<Product> {
  // return product;
  return Object.freeze(product);
}

function updateProductPrice(product: Product, priceToUpdate: Partial<Product>) {
  return { ...product, ...priceToUpdate };
}

const product1: Product = {
  id: 1,
  name: "Whey",
  price: 20,
};

console.log(product1);

const frozenProduct = freezeProduct(product1);
// frozenProduct.name = "Creatina" //Erro

const updatedProduct = updateProductPrice(frozenProduct, { price: 10 });
console.log(updatedProduct);
