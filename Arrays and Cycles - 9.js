/*
Реализовать цикл, который выводит в консоль простые числа
 */
let a = 2;

b:
for (; a < 150 ; a++){
    for (let i = 2 ; i < a ; i++) {
        if (a % i == 0) continue b;
    }
        console.log(a);
    }
