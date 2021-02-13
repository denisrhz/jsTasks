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
{ "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })
*/

function whatIsInAName(objArray, searchObj) {
    var cloneArray = objArray.slice()

    for (let i = 0; i < cloneArray.length; i++) {
        for (searchKey in searchObj)
            if (typeof cloneArray[i][searchKey] == "undefined") {
                cloneArray.splice(i, 1);
                break;
            }
    }
    return cloneArray;
}

/*
5. Написать функцию, которая конвертирует строку в spinal-case регистр.
*/

function spinalCase(str) {
    return str.replace(/(?!^)([A-Z])/g, ' $1')
                .replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
}

/*
6. Написать функцию, которая осуществляет поиск и замену в предложении. Первый
аргумент - это строка, в которой осуществляется поиск и замена. Второй аргумент - это
слово, которое нужно заменить, третий аргумент - слово, на которое нужно заменить.
При замене сохраняйте регистр первого символа в исходном слове.
*/

function myReplace(str, subStr, newSubStr) {
    subStr = new RegExp(subStr, "ig");
    return str.replace(subStr, newSubStr);
}

/*
7. Написать функцию, которая на вход принимает последовательность букв и ищет
пропущенные буквы. Если все буквы присутствуют в диапазоне, то возвращается
undefined. Например: fearNotLetter("abce") должна вернуть "d"
*/

function fearNotLetter(str) {
    let lettersArr=str.split("").sort();
    let newArr=[];
    for(let i=0;i<lettersArr.length;i++){
        lettersArr[i]=lettersArr[i].charCodeAt()-36;
    }
    let end=lettersArr[lettersArr.length-1];
    for(let i=0;i<end;i++){
        if(lettersArr[i]==end){
            break;
        }
        else{
            if(lettersArr[i]!==lettersArr[i+1]-1){
                let index=lettersArr.indexOf(lettersArr[i]);
                let arg=lettersArr[i]+1;
                lettersArr.splice(index+1,0,arg);
                newArr.push(arg);
            }
        }
    }
    return newArr;
}

/*
8. Написать функцию, которая принимает два или более массивов и возвращает новый
массив уникальных значений. Значения должны быть отсортированы по их
первоначальному порядку.
*/

function f8() {
    ;
}

/*
9. Написать функцию, которая заменяет символы &, <, >, "(двойные кавычки),
и ‘(апостроф) в строке их соответствующим HTML - кодом.
*/


function replacementSpecialCharacters(str) {
    let newStr=str.split("");
    for(let i=0;i<newStr.length;i++){
        if(newStr[i]=="&"){
            newStr[i]="&amp";
        }
        else if(newStr[i]=="<"){
            newStr[i]="&lt";
        }
        else if(newStr[i]==">"){
            newStr[i]="&gt";
        }
        else if(newStr[i]=='"'){
            newStr[i]="&quot";
        }
        else if(newStr[i]=="'"){
            newStr[i]="&apos";
        }
    }
    return newStr.join("");
}

/*
10. Написать функцию, которая суммирует все простые числа до n (аргумент функции)
*/

function summationOfPrimes(num) {
    let arrNum=[];
    nextPrime:
    for (let i = 2; i <= num; i++) {
        for (let j = 2; j < i; j++) { 
            if (i % j == 0) continue nextPrime; 
        }
        arrNum.push(i);
    }
    return arrNum.map(i=>x+=i, x=0).reverse()[0]
}

/*
11. Написать функцию, которая принимает массив и функцию и удаляет каждый элемент
массива начиная с первого, пока функция не вернет true, а затем возвращает
оставшуюся часть массива. Например: dropElements([1, 2, 3, 4], function(n) {return n >=
3;}) должна вернуть [3, 4].
*/

function deleteArr(arr, fun) {
    for(let i=0;i<arr.length;i++){
        if(!fun(arr[i])){
            delete arr[i];
        }
        else {
            break;
        }
    }
    return arr;
}

/*
12. Написать функцию, которая принимает массив различной вложенности и возвращает
одномерный массив. Например: steamrollArray([1, [2], [3, [[4]]]]) должна вернуть [1, 2, 3, 4]
*/

function removingNesting(arr,newArr=[]) {
    for (let elem of arr) {
		if (typeof elem == 'object') {
			removingNesting(elem,newArr);
		} else {
            newArr.push(elem);
		}
	}
    return newArr;
}

/*
13. Написать функцию, которая суммирует два аргумента вместе. Если указан только один
аргумент, то возвращает функцию, которая ожидает второй аргумент и возвращает
сумму.
*/

function sumArg(numA,numB) {
    if(numB==undefined){
        return function (numB) {
            return numA+numB;
        }
    }
    else{
        return numB+numA;
    }
}