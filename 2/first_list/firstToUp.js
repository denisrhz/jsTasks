function firstToUp(str) {
    if (!str) return str;

    str = str.toLowerCase();

    words = str.split(' ');
    var wordsUp = [];

    for (let word of words) {
        if (word) {
            wordsUp.push(word[0].toUpperCase() + word.slice(1));
        } else {
            wordsUp.push(word);
        }
    }
    return wordsUp.join(' ');
};

module.exports = firstToUp;