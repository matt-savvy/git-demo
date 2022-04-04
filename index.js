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

    return result;
}

function main() {
    const words = process.argv.slice(2);

    const numRounds = words.length;
    const results = words.map(playGame);
    const score = results.reduce((totalScore, currentResult) => {
        if (currentResult === true) {
            return totalScore + 1;
        }

        return totalScore;
    }, 0);

    console.log(`score: ${score} / ${numRounds}`);
}

main();
