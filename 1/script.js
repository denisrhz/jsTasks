/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/*
1. Написать функцию, которая на вход принимает
целое число и возвращает факториал этого числа.
*/

function factorial(num) {
    if (num === 0) {
        return 1;
    }

    return (num !== 1) ? num * factorial(num - 1) : 1;
}

/*
2. Написать функцию, которая на вход принимает строку
и возвращает длину самого длинного слова в этой строке.
*/

function lenLongWord(str) {
    let words = str.split(' ');

    let longWord = 0;

    for(let i = 0; i < words.length; i++) {
        if(words[i].length > longWord) {
            longWord = words[i].length;
            }
        }

    return longWord;
}

/*
3. Написать функцию, которая на вход принимает массив, состоящий из массивов целых
чисел (например: [[1, 2, 3], [4, 5], [6, 7, 8, 9]]) и возвращает массив состоящий из
наибольшего числа каждого предоставленного подмассива.
*/

function maxValuesInArrays(arrays) {
    let result = [];

    for (let arr of arrays) {
        result.push(Math.max(...arr));
    }

    return result;
}

/*
4. Написать функцию, которая на вход принимает строку и целое число и обрезает строку
(первый аргумент), если она длиннее заданной максимальной длины строки (второй
аргумент) и возвращает обрезанную строку с «...» в конце.
*/

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength) + '...' : str;
}

/*
5. Написать функцию, которая на вход принимает строку и возвращает эту строку в
формате: каждое слово начинается с заглавной буквы, остальные в нижнем регистре.
*/

function firstToUp(str) {
    if (!str) return str;

    str = str.toLowerCase()

    words = str.split(' ');
    let wordsUp = [];

    for (let word of words) {
        if (word) {
            wordsUp.push(word[0].toUpperCase() + word.slice(1));
        } else {
            wordsUp.push(word);
        }
    }
    return wordsUp.join(' ');
}

/*
6. Написать функцию, которая на вход принимает два массива и целое число n. Функция
должна скопировать каждый элемент первого массива во второй по порядку начиная с
индекса n второго массива и вернуть полученный массив. Входные массивы не должны
изменяться. (например: при входных данных ([1, 2, 3], [4, 5], 1) должно вернуться [4, 1, 2,
3, 5].
*/

function spliceInsert(insertArray, initArr, position) {
    start = initArr.slice(0, position);
    end = initArr.slice(position);

    return [...start, ...insertArray, ...end];
}

/*
7. Написать функцию, которая на вход принимает массив и удаляет в нем все "ложные
значения"
*/

function falseDelete(array) {
    return array.filter(item => !!item);
}

/*
8. Написать функцию, которая на вход принимает массив, состоящий из двух строк.
Функция должна вернуть true, если строка в первом элементе массива содержит все
буквы строки во втором элементе массива (регистр игнорируется).
*/

function isContain([firstStr, secondStr]) {
    firstStr = firstStr.toLowerCase();
    secondStr = secondStr.toLowerCase();

    for (let symSecondStr of secondStr) {
        if (firstStr.indexOf(symSecondStr) === -1) {
            return false;
        }
    }

    return true;
}

/*
9. Написать функцию, которая на вход принимает масссив и целое число. Функция
должна разбить массив (первый аргумент) на группы длиной size (второй агрумент) и
вернуть их в виде двумерного массива.
*/

function splitArray(array, size) {
    let result = [];

    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size))
    }

    return result;
}

/*
10. Написать функцию, которая принимает массив и
целое число (n) и заполняет массив числами от n до 1.
*/

function fillArray(array, num) {
    if (num <= 0) {
        return array;
    } else {
        array.push(num);
        return fillArray(array, --num);
    }
}