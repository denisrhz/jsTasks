function spliceInsert(insertArray, initArr, position) {
    start = initArr.slice(0, position);
    end = initArr.slice(position);

    return [...start, ...insertArray, ...end];
};

module.exports = spliceInsert;