/* eslint-disable no-extend-native */
String.prototype.isOperator = function () {
  return /[+*/÷×-]/.test(this);
};
String.prototype.endWithOperator = function () {
  const lastChr = this.charAt(this.length - 1);
  return lastChr.isOperator();
};
String.prototype.endWithNumber = function () {
  const lastChr = this.charAt(this.length - 1);
  return /\d/.test(lastChr);
};
