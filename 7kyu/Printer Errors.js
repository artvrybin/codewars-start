function printerError(s) {

  // Разбиваем строку на массив символов и фильтруем те, что вне диапазона a-m
  // const errors = s.split("").filter(ch => ch < "a" || ch > "m").length;
  // return `${errors}/${s.length}`;

  // let errors = 0;
  // // Проходим по каждому символу строки и проверяем, входит ли он в диапазон a-m
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] < "a" || s[i] > "m") {
  //     errors++;
  //   }
  // }
  // return `${errors}/${s.length}`;

  // // Преобразуем строку в массив и суммируем количество ошибок с помощью reduce
  // const errors = s.split("").reduce((count, char) => {
  //   return count + ((char < "a" || char > "m") ? 1 : 0);
  // }, 0);
  // return `${errors}/${s.length}`;

  // Используем регулярное выражение для замены всех букв от a до m на пустую строку
  // Таким образом, оставляем только "ошибочные" символы (буквы вне диапазона a-m)
  const errors = s.replace(/[a-m]/g, "").length;

  // Длина контрольной строки
  const total = s.length;

  // Возвращаем результат в формате "число ошибок/общая длина"
  return `${errors}/${total}`;
}

console.log(printerError("abcxyz")); // Example 1
console.log(printerError("abcdefghijklm")); // Example 2
console.log(printerError("nopqrstuvwxyz")); // Example 3