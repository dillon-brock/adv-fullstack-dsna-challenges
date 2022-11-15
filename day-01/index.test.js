const { reverseSentence, titleCase, oddishOrEvenish, anagrams, fizzBuzz } = require('./index');

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
});
