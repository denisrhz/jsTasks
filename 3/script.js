/*
1. Написать функцию, которая принимает на вход массив из двух чисел и возвращает
сумму этих двух чисел плюс сумму всех чисел между ними. Наименьшее число не
всегда будет на первом месте. (Например sumAll([4, 1]) должен возвращать 10)
*/

function sumAll(array) {
    var result = 0;
    var minValue = Math.min(...array)
    var maxValue = Math.max(...array)
    while (minValue <= maxValue) {
        result += minValue;
        minValue++;
    }
    return result;
}

/*
2. Написать функцию, которая на вход принимает два массива и возвращает новый
массив с элементами найденными только в одном массиве, но не в обоих.
*/

function SymmetricalDiff(arrayA, arrayB) {
    return arrayA.filter(x => !arrayB.includes(x))
                .concat(arrayB.filter(x => !arrayA.includes(x)));
}

/*
3. Написать функцию, которая на вход принимает массив и еще один или несколько
аргументов (точное количество не известно). Удалить из массива все элементы,
которые имеют то же значение, что и эти аргументы.
*/

function delArgFromArray(array, ...args) {
    return array.filter(x => !args.includes(x));
}

/*
4. Создайте функцию, которая просматривает массив объектов (первый аргумент) и
возвращает массив всех объектов, имеющих совпадающие пары имя и значение
(второй аргумент). Например: whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 },
{ "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) д
*/