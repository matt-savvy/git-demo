function isntOdd(number) {
   return number % 2 === 0;
}

function isVowel(letter) {
    if (['a', 'e', 'i', 'o', 'u'].includes(letter)) {
        return true;
    }

    return false;
}

function wordDoesntLose(word) {
    const length = word.length;
    const firstLetter = word[0];

    return isntOdd(length) && isVowel(firstLetter);
}


function getWinWord(value) {
    return value ? 'win' : 'lose';
}

function main() {
    const words = process.argv.slice(2);

    words.forEach((word) => {
        console.log(word, getWinWord(wordDoesntLose(word)));
    });
}

main();
