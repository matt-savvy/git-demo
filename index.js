function isEven(number) {
   return number % 2 === 0;
}

function isVowel(letter) {
    if (['a', 'e', 'i', 'o', 'u'].includes(letter)) {
        return true;
    }

    return false;
}

function wordWins(word) {
    const length = word.length;
    const firstLetter = word[0];

    return isEven(length) && isVowel(firstLetter);
}


function getWinWord(value) {
    return value ? 'win' : 'lose';
}

function main() {
    const words = process.argv.slice(2);

    words.forEach((word) => {
        console.log(word, getWinWord(wordWins(word)));
    });
}

main();
