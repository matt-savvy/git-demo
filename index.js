function isEven(number) {
   return number % 2 === 0;
}

function isVowel(letter) {
    if (['a', 'e', 'i', 'o', 'u'].includes(letter)) {
        return true;
    }

    return false;
}

function getFirstLetter(word) {
    return word[word.length - 1];
}

function wordWins(word) {
    const length = word.length;
    const firstLetter = getFirstLetter(word);

    return isEven(length) && isVowel(firstLetter);
}

function main() {
    const words = process.argv.slice(2);

    words.forEach((word) => {
        console.log(word, wordWins(word));
    });
}

main();
