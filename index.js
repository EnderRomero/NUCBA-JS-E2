const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

console.log('Parte "a" del Menú. Las Pizzas con id impar son las siguientes:');
pizzas.forEach((pizza) => {
  if (pizza.id % 2 !== 0) {
    console.log(`(${pizza.id}) ${pizza.nombre}`);
  }
});

console.log(`
Parte "b" del Menú.`);
let hayPizzaBarata = false;
for (let i = 0; i < pizzas.length; i++) {
  if (pizzas[i].precio < 600) {
    hayPizzaBarata = true;
    break;
  }
}

hayPizzaBarata === true
  ? console.log(`Sí, tenemos pizzas por menos de $600 👌`)
  : console.log(`Lamentablemente no tenemos pizzas por menos de $600 por ahora 😢`);


console.log(`
Parte "c" del Menú. Estas son nuestras Pizzas:`);
pizzas.forEach(pizza => {
  console.log(`🍕 La ${pizza.nombre}, tiene un precio de $${pizza.precio}`)
});

console.log(`
Parte "d" del Menú. Nuestras Pizzas vienen con los siguientes ingredientes:`);
pizzas.forEach(pizza => {
  console.log(`🍕 La ${pizza.nombre} contiene:`)
  pizza.ingredientes.forEach(ingrediente => {
    console.log(`     > ${ingrediente}`)
  });
});

