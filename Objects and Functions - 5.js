/*
-        Напишите функцию, которая определяет является ли число простым или нет
 */

let n = [17, 8, 9, 5, 7, 2, 1, 10, 21, 27, 115];

for (let i = 0; i < n.length; i++) {
    for (let j = 2; j < n[i] ; j++){
        if (n[i] % j == 0){
            console.log(`${n[i]} is not prime!`);
            break;
        }else{
            console.log(`${n[i]} is prime!`);
                    }
    }
}