export class Calculator {
  calculate(str) {
    try {
      const result = eval(str);
      return result;
    } catch (e) {
      console.log(e);
    }
    return 0;
  }
}
