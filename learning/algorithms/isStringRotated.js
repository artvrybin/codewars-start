function isStringRotated(source, target) {

  //  return source.length === target.length && source.repeat(2).includes(target)

  //   Метод repeat(2) создает новую строку, которая состоит из двух последовательных копий исходной строки source. Например, если source = "abcde", то source.repeat(2) возвращает строку "abcdeabcde".
  // Идея в том, что любая ротация строки source всегда будет содержаться как подстрока в строке, полученной повторением source дважды. Например:
  // Пусть source = "abcde". Возможные ротации:
  // "abcde" (без сдвига)
  // "bcdea" (сдвиг на 1 символ)
  // "cdeab" (сдвиг на 2 символа)
  // "deabc" (сдвиг на 3 символа)
  // "eabcd" (сдвиг на 4 символа)
  // Если мы возьмем "abcdeabcde", то, например, "cdeab" встречается как подстрока: "ab[cdeab]cde".

  if (source.length !== target.length) return false;

  for (let i = 0; i < source.length; i++) {
    let repeat = source.slice(i) + source.slice(0, i);
    if (repeat === target) return true;
  }
  return false;
}

console.log(isStringRotated('hello', 'lohel')); // true
console.log(isStringRotated('hello', 'ohell')); // true
console.log(isStringRotated('hello', 'world')); // false