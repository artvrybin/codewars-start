/*
* Похоже, это классическая задача «когда купить и когда продать акцию/валюту, чтобы получить максимальную прибыль» (buy слева, sell справа).
На твоём примере ожидаемый ответ — [80, 125].

Идея (O(n), один проход)

Идём по массиву слева направо.

Держим в памяти минимальную цену слева minPrice — это лучшая «покупка на сегодня».

Для каждой текущей цены price считаем потенциальную прибыль price - minPrice.

Если эта прибыль лучшая из всех, запоминаем пару [minPrice, price] как ответ.

Если встретили цену меньше minPrice, обновляем minPrice (лучше покупать ещё дешевле).

Так мы гарантируем, что покупка всегда левее продажи и находим максимум разницы за O(n) времени и O(1) памяти.
* */

function bestBuySell(prices) {
  if (!Array.isArray(prices) || prices.length < 2) return null;

  let minPrice = prices[0];
  let bestProfit = 0;
  let res = null;

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    const profit = price - minPrice;

    if (profit > bestProfit) {
      bestProfit = profit;
      res = [minPrice, price];
    }
    if (price < minPrice) {
      minPrice = price;
    }
  }

  return res; // null — если выгодной сделки нет (всё убывает)
}

// Пример из скриншота:
const prices = [130, 100, 90, 95, 97, 80, 85, 100, 95, 81, 125, 70];
console.log(bestBuySell(prices)); // [80, 125]
