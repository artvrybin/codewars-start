function getCommonNumbers(arr1, arr2) {
  // // Преобразуем arr1 в множество, чтобы убрать дубликаты
  // const uniqueArr1 = [...new Set(arr1)];
  // // Фильтруем элементы, которые присутствуют в arr2
  // return uniqueArr1.filter(num => arr2.includes(num));

  // let uniq1 = new Set(arr1);
  // let uniq2 = new Set(arr2);
  // let res = [];
  // for (let num of uniq1) {
  //   if (uniq2.has(num)) {
  //     res.push(num);
  //   }
  // }
  // return res;

  // return arr1.reduce((common, num) => {
  //   // Если число есть в arr2 и его ещё нет в результирующем массиве, добавляем его
  //   if (arr2.includes(num) && !common.includes(num)) {
  //     common.push(num);
  //   }
  //   return common;
  // }, []);

  // let map = {};
  // let common = [];
  //
  // // Записываем все элементы первого массива в хэш-таблицу
  // for (let i = 0; i < arr1.length; i++) {
  //   map[arr1[i]] = true;
  // }
  //
  // // Проходим по второму массиву и, если элемент есть в хэш-таблице и ещё не добавлен, добавляем в результат
  // for (let i = 0; i < arr2.length; i++) {
  //   if (map[arr2[i]] && !common.includes(arr2[i])) {
  //     common.push(arr2[i]);
  //   }
  // }
  //
  // return common;

  // Убираем дубликаты и сортируем оба массива
  let sorted1 = [...new Set(arr1)].sort((a, b) => a - b);
  let sorted2 = [...new Set(arr2)].sort((a, b) => a - b);

  let i = 0, j = 0;
  const common = [];

  // Используем два указателя для прохода по отсортированным массивам
  while (i < sorted1.length && j < sorted2.length) {
    if (sorted1[i] === sorted2[j]) {
      common.push(sorted1[i]);
      i++;
      j++;
    } else if (sorted1[i] < sorted2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return common;

}

console.log(getCommonNumbers([1, 2, 2, 3], [2, 3, 4, 5])); // Example output: [2, 3]
console.log(getCommonNumbers([10, 20, 30], [15, 20, 25])); // Example output: [20]
console.log(getCommonNumbers([5, 10, 15], [1, 2, 3])); // Example output: []