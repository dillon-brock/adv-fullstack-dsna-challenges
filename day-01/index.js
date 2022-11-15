function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}


// primitive challenges
function titleCase(sentence) {
  return sentence
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(' ');
}

function oddishOrEvenish(number) {
  const digitSum = number.toString()
    .split('')
    .reduce((a, b) => a + Number(b), 0);
  
  return digitSum % 2 === 0 ? 'Evenish' : 'Oddish'
}

function anagrams(wordOne, wordTwo) {
  return wordOne.split('').sort().join('') === wordTwo.split('').sort().join('');
}

module.exports = { reverseSentence, titleCase, oddishOrEvenish, anagrams };