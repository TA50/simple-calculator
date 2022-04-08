/* eslint-disable no-undef */
import './string-extensions';

describe.only('Strings Extensions', () => {
  it('should remove all extra zeros from the right', () => {
    const x = '1.000';
    const result = x.removeExtraZeros();
    expect(result).toBe('1');
  });
  it('should not remove anything', () => {
    const x = '1.30001';
    const result = x.removeExtraZeros();
    expect(result).toBe('1.30001');
  });
  it('should not do anything', () => {
    const x = '13000';
    const result = x.removeExtraZeros();
    expect(result).toBe('13000');
  });
});
