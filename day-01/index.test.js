const { reverseSentence, titleCase, oddishOrEvenish } = require('./index');

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
});
