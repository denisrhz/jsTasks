function falseDelete(array) {
    return array.filter(item => !!item);
};

module.exports = falseDelete;