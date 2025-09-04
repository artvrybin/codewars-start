function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument must be an array"));
    }

    const results = [];
    let completedCount = 0;
    const total = promises.length;

    // Если массив пустой, сразу резолвим пустым массивом
    if (total === 0) {
      return resolve([]);
    }

    promises.forEach((promise, index) => {
      // Оборачиваем значение в Promise.resolve(), чтобы поддерживать не только промисы
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completedCount++;

          // Если все промисы выполнились, резолвим результирующий промис
          if (completedCount === total) {
            resolve(results);
          }
        })
        .catch(err => {
          // Если хотя бы один промис реджектнулся, реджектим результирующий промис
          reject(err);
        });
    });
  });
}

// Пример использования:
promiseAll([fetch('url1'), fetch('url2')])
  .then(responses => {
    // responses — массив результатов fetch запросов
    console.log('Все запросы успешно выполнены', responses);
  })
  .catch(error => {
    console.error('Один из запросов завершился ошибкой', error);
  });
