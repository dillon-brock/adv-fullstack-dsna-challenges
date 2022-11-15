const { reverseSentence, titleCase, oddishOrEvenish, anagrams, fizzBuzz, multiplesOfN, equalSides, addPunctuation, rootDigit } = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });
  describe('titleCase', () => {
    it('should convert a sentence to title case', () => {
      expect(titleCase('alchemy ROCKS goLD')).toEqual('Alchemy Rocks Gold');
    })
  })
  describe('oddishOrEvenish', () => {
    it('should return evenish if the sum of digits is even and oddish if the sum of digits is odd', () => {
      expect(oddishOrEvenish(121)).toEqual('Evenish');
      expect(oddishOrEvenish(41)).toEqual('Oddish');
    })
  })
  describe('anagrams', () => {
    it('should return true if words are anagrams of each other, false otherwise', () => {
      expect(anagrams('superintended', 'unpredestined')).toEqual(true);
      expect(anagrams('pictorialness', 'documentarily')).toEqual(false);
    })
  })
  describe('fizzBuzz', () => {
    it('should return an array of length n with standard fizzbuzz mutation', () => {
      expect(fizzBuzz(16)).toEqual([
        1, 2, 'Fizz', 4, 'Buzz', 
        'Fizz', 7, 8, 'Fizz', 'Buzz', 
        11, 'Fizz', 13, 14, 'FizzBuzz', 
        16
      ]);
    });
  })
  describe('multiplesOfN', () => {
    it('should return an array of multiples of n from 1 to 50', () => {
      expect(multiplesOfN(5)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
      expect(multiplesOfN(25)).toEqual([25, 50]);
      expect(multiplesOfN(75)).toEqual([]);
    });
  })
  describe('equalSides', () => {
    it('should return index in array where left side sum is equal to right side sum', () => {
      expect(equalSides([1, 100, 50, -51, 1, 1])).toEqual(1);
    })
  })
});

describe('HOF code challenges', () => {
  describe('addExcitement', () => {
    it('should add punctuation onto end of sentence', () => {
      const addExcitement = addPunctuation('!!!');
      const addUnsure = addPunctuation('?!?');
      expect(addExcitement('Hello World')).toEqual('Hello World!!!');
      expect(addExcitement('Pokemon, catch em all')).toEqual('Pokemon, catch em all!!!');
      expect(addUnsure('Hello World')).toEqual('Hello World?!?');
      expect(addUnsure('Pokemon, catch em all')).toEqual('Pokemon, catch em all?!?');
    })
  })
})

describe('recursive code challenge', () => {
  describe('rootDigit', () => {
    it('should return the sum of all digits once that sum is one digit', () => {
      expect(rootDigit(123)).toEqual(6);
      expect(rootDigit(4322)).toEqual(2);
      expect(rootDigit(999888777)).toEqual(9);
    });
  });
});
