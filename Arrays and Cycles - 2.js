/*
Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив
 */

let brand =['Toyota', 'MB', 'VW', 'Porsche'];

let str = brand.toString();
console.log(str);

let brandNew = str.split(',');
console.log(brandNew);

