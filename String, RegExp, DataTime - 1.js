/*
Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение, которое найдет строки ahb, acb, aeb 
по шаблону: буква 'a', любой символ, буква 'b'
 */

let str = 'ahb acb aeb aeeb adcb axeb';

let result = str.match(/a+.b/g);

console.log(result);