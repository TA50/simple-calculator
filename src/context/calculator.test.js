/* eslint-disable no-undef */
import { Calculator } from './calculator';
import '../string-extensions';

describe('Calculator Class', () => {
  const calculator = new Calculator();
  it('should eval 5+10 as 15', () => {
    const result = calculator.calculate('5+5');
    expect(result).toEqual(10);
  });
  describe('Validate calculations', () => {
    it('should return false if number of brackets do not match', () => {
      const [result] = calculator.validate('(8+7)*30+(28');
      expect(result).toEqual(false);
    });
    it('should return false it ends with an operator', () => {
      const [result] = calculator.validate('(8+7)*30+');
      expect(result).toEqual(false);
    });
  });
});
