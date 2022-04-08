/* eslint-disable no-continue */
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
String.prototype.getNumberOfCharacters = function (chr) {
  return this.split('').filter((a) => a === chr).length;
};

String.prototype.removeExtraZeros = function () {
  if (!this.includes('.')) return this;
  const chars = this.split('').reverse();
  let index = chars.length - 1;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];
    if (c === '0') {
      index -= 1;
      continue;
    }
    break;
  }
  const result = this.slice(0, index + 1);
  if (result.endsWith('.')) {
    return result.slice(0, result.length - 1);
  }
  return result;
};
