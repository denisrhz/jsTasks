function fillArray(array, num) {
    if (num <= 0) {
        return array;
    } else {
        array.push(num);
        return fillArray(array, --num);
    }
}

module.exports = fillArray;