const word = 'HEllO, JavaScript';

function countVowels(str) {
    return str.match(/[aeiouy]/gi).length;
}

const vowelCount = countVowels(word);
console.log(vowelCount);



