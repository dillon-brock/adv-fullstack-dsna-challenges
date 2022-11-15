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

function fizzBuzz(n) {
  return [...Array(n).keys()]
    .map(x => {
      x = x + 1;
      if (x % 15 === 0) return 'FizzBuzz';
      if (x % 5 === 0) return 'Buzz';
      if (x % 3 === 0) return 'Fizz';
      return x;
    })
}

function multiplesOfN(n) {
  const multiples = [];
  for (let i = n; i <= 50; i += n) {
    multiples.push(i);
  };
  return multiples;
}

module.exports = { reverseSentence, titleCase, oddishOrEvenish, anagrams, fizzBuzz, multiplesOfN };