/*
В try catch конструкцию завернуть код: console.log(a), let a = 3. И вывести ошибку – ‘let перед использованием
нужно объявить’. При выполнении 1/0  выводить ошибку 'на ноль делить нельзя'


 */

try {

    let a = 3;
    console.log(a);

    if (!a){
        throw new SyntaxError("let перед использованием нужно объявить");
    }

    let b = 1 / 0;

    if( b === Infinity ) {
        throw new SyntaxError('на ноль делить нельзя');
    }

} catch (err) {

        console.log(err);

}
