/*
1. Написать свою реализацию функций:
map, filter, find, some, every.
*/

function myMap(array, callback, thisArg) {
    var i, length = array.length, results = [];
    for (i = 0; i < length; i = i + 1) {
        results.push(callback.call(thisArg, array[i], i, array));
    }
    return results;
};

function myFilter(array, callback, thisArg) {
    var i, length = array.length, results = [];
    for (i = 0; i < length; i = i + 1) {
        if (callback.call(thisArg, array[i], i, array)) {
        results.push(array[i]);
        }
    }
    return results;
};

function myFind(array, conditionFunc)  {
    for (var i = 0; i < array.length; i++) {
            if (conditionFunc(array[i], i)) {
                return array[i];
            }
    }
};

function mySome(array, callback, thisArg) {
    var i, length = array.length;
    for (i = 0; i < length; i = i + 1) {
        if (callback.call(thisArg, array[i], i, array)) {
        return true;
        }
    }
    return false;
};

function myEvery(array, callback, thisArg) {
    var i, length = array.length;
    for (i = 0; i < length; i = i + 1) {
        if (!callback.call(thisArg, array[i], i, array)) {
        return false;
        }
    }
    return true;
};