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

module.exports = isContain;