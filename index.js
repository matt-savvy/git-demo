function isntOdd(number) {
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

function wordDoesntLose(word) {
    const length = word.length;
    const firstLetter = getFirstLetter(word);

    return isntOdd(length) && isVowel(firstLetter);
}

function getWinWord(value) {
    return value ? 'win' : 'lose';
}

function playGame(word) {
    const result = wordDoesntLose(word);
    const resultWord = getWinWord(result);

    console.log(word, getWinWord(wordDoesntLose(word)));
}

function main() {
    const words = process.argv.slice(2);

    words.forEach(playGame);
}

main();
