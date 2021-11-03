/*
-        Напишите функцию вычисления типа аргумента и вывод типа в консоль
 */

let arg1 = undefined // "undefined"
let arg2 = 0 // "number"
let arg3 = 1n // "bigint"
let arg4 = true // "boolean"
let arg5 = "foo" // "string"
let arg6 = Symbol() // "symbol"
let arg7 = {} // "object"
let arg8 = null // "object"
let arg9 = function () {} // "function"

function checkType(a) {
    let b = typeof (a);
    console.log(b);
}

checkType(arg1);
checkType(arg2);
checkType(arg3);
checkType(arg4);
checkType(arg5);
checkType(arg6);
checkType(arg7);
checkType(arg8);
checkType(arg9);