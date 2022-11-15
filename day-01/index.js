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

function equalSides(numbers) {
  let i = 0;
  while (i < numbers.length) {
    if (numbers.slice(0, i)
    .reduce((a, b) => a + b, 0) === numbers
    .slice(i + 1)
    .reduce((a, b) => a + b, 0)) return i;
    i++;
  }
  return -1;
}

//HOF challenge:

const addPunctuation = (punctuation) => {
  return (sentence) => sentence + punctuation;
}

//Recursive challenge:
function rootDigit(n) {
  let sum = n.toString()
    .split('')
    .map(d => +d)
    .reduce((a, b) => a + b);
  if (sum.toString().length > 1) {
    sum = rootDigit(sum);
  }
  return sum;
}

module.exports = { reverseSentence, titleCase, oddishOrEvenish, anagrams, fizzBuzz, multiplesOfN, equalSides, addPunctuation, rootDigit };