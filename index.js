function isEven(number) {
   return number % 2 === 0;
}

function isVowel(letter) {
    const lowerLetter = letter.toLowerCase();

    if (['a', 'e', 'i', 'o', 'u'].includes(lowerLetter)) {
        return true;
    }

    // sometimes Y
    if (Math.random() > 0.5 && letter === 'y') {
        return true;
    }

    return false;
}

function wordWins(word) {
    const length = word.length;
    const firstLetter = word[0];
    const lastLetter = word[word.length - 1];

    return isEven(length) && isVowel(firstLetter) && isVowel(lastLetter);
}

function main() {
    // first two values are always node and file path, drop these.
    const words = process.argv.slice(2);

    words.forEach((word) => {
        console.log(word, wordWins(word));
    });
}

main();
