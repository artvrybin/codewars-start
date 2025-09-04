function solution(str, ending){
  // endsWith встроен в JavaScript и напрямую проверяет, заканчивается ли строка на указанную подстроку.
  // return str.endsWith(ending);

  //return ending === "" ? true : str.slice(-ending.length) === ending;

  //substr извлекает подстроку, начиная с позиции str.length - ending.length до конца строки, и сравнивает её с ending.
  //return str.substr(str.length - ending.length) === ending;

  //lastIndexOf ищет последнее вхождение подстроки в строке. Если позиция совпадает с ожидаемой
  // (начало подстроки равно str.length - ending.length), значит строка заканчивается на ending;
  //return str.lastIndexOf(ending) === str.length - ending.length;

  return str.slice(str.length - ending.length, str.length) === ending


}


console.log(solution('abcdef', 'def')); // true
console.log(solution('abcdef', 'xyz')); // false
console.log(solution('abcdef', ''));    // true