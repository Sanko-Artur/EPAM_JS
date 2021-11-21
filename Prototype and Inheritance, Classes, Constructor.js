/*
Создать 2 объекта: animal и cat, объект animal добавить свойство move, объект cat должен наследовать свойство move
 */

let animal = {
     move : 'different',
};

let cat = Object.create(animal);

console.log(cat.move);