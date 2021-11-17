/*
Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let a = 1;
let b = 0;
let c = 6;
let d = 4;

function check (item1, item2){
    console.log(item1[item2]);
}

check(arr, a);
check(arr, b);
check(arr, c);
check(arr, d);
