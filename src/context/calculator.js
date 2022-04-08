export class Calculator {
  /**
   *
   * @param {string} str
   * @returns {number | string}
   */
  calculate(str) {
    try {
      const validation = this.validate(str);
      if (validation[0]) {
        const result = eval(str);
        return result;
      }
      return validation[1];
    } catch (e) {
      console.log(e);
    }
    return 0;
  }

  /**
   *
   * @param {string} str
   * @returns {[boolean, string] | boolean}
   */
  validate(str) {
    // number of brackets should match
    const closeBracketsNumber = str.split('').filter((c) => c === ')').length;
    const openBracketsNumber = str.split('').filter((c) => c === '(').length;
    if (closeBracketsNumber !== openBracketsNumber) {
      return [false, 'please close the opened bracket !'];
    }
    // should not finish with an operator
    if (str.endWithOperator()) {
      return [false, 'equation should be completed with a number !'];
    }
    return [true, null];
  }
}
