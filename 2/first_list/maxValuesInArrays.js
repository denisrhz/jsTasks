function maxValuesInArrays(arrays) {
    var result = [];
    for (let arr of arrays) {
        result.push(Math.max(...arr));
    }
    return result;
}

module.exports = maxValuesInArrays;