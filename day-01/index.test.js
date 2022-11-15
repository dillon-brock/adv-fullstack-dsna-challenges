const { reverseSentence, titleCase } = require('./index');

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
});
