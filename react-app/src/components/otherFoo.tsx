import React, { useState } from 'react';

// // Задание 1
//
// // Объявлена асинхронная функция с двумя аргументами.
// // data: любые данные, timeout: время ожидания в миллисекундах.
// // Тело пока ПУСТО — реализацию добавим на этапе «Решение».
// async function foo<T>(data: T, timeout: number): Promise<T> {
//   await new Promise((resolve) =>
//     setTimeout(() => {
//       resolve(data);
//     }, timeout)
//   );
//   return data;
// }
//
// // Вспомогательная асинхронная функция для проверки работы foo.
// const test = async () => {
//   const startTime = performance.now(); // Засекаем время старта (в мс, монотонный таймер).
//
//   const data = await foo({ a: 1, b: 2 }, 1000); // Ждём результат foo с объектом и таймаутом 1000 мс.
//
//   const endTime = performance.now(); // Фиксируем время завершения после await.
//
//   console.log(
//     data, // Логируем возвращённые данные (ожидается исходный объект).
//     `after ${endTime - startTime}ms` // И разницу во времени как строку.
//   );
// };
//
// test(); // Запускаем тестовую функцию.
//
// export default function App() {
//   // Базовый React-компонент приложения.
//   return <div className="App"></div>; // Простой контейнер для рендера.
// }

// Задание 2

// function Test() {
//   const [rand] = useState(Math.random()); // инициализируется на первом МОНТАЖЕ
//   return <div>{rand}</div>;
// }
//
// export default function App() {
//   const [toggle, setToggle] = useState(true);
//
//   return (
//     <div className="App">
//       <button onClick={() => setToggle((prev) => !prev)}>toggle</button>
//       {toggle ? (
//         <div>
//           <div>{`toggle=${toggle}`}</div>
//           <Test />
//         </div>
//       ) : (
//         <div>
//           <div>{`toggle=${toggle}`}</div>
//           <Test />
//         </div>
//       )}
//     </div>
//   );
// }

/**
 * Пошагово при клике
 *
 * Нажимаем кнопку → setToggle(prev => !prev) ставит обновление state.
 *
 * React перерисовывает App.
 *
 * В обоих ветках тернарника одинаковая структура: <div> → <div> → <Test/>. Типы
 * и позиции элементов совпадают, ключей нет → React сохраняет поддерево и не
 * размонтирует Test.
 *
 * Test просто перерисуется, но его состояние сохранится:
 * useState(Math.random()) был инициализирован на первом монтаже Test, далее
 * значение хранится. (Да, Math.random() вычислится при каждом рендере, но для
 * useState после первого рендера аргумент игнорируется — состояние остаётся
 * прежним.)
 *
 * Итог: меняется только текст toggle=true/false. Число в <Test> остаётся тем
 * же.
 *
 * Ответ на задачу: при переключении toggle компонент Test не размонтируется,
 * его rand не меняется. Будут обычные повторные рендеры App и Test, но без
 * пересоздания состояния в Test.*
 */

/**
 * Как сделать, чтобы rand менялся (ремонтировался Test)
 *
 * Любой способ, который заставит React считать поддерево новым:
 *
 * Разные типы корневых узлов в ветках:
 *
 * {toggle ? ( <section> <Test/> </section> ) : ( <div> <Test/> </div> )}
 *
 * Или ключ на корневом узле, зависящий от toggle:
 *
 * {toggle ? <div key="a"><Test/></div> : <div key="b"><Test/></div>}
 *
 * Или ключ прямо на Test: <Test key={String(toggle)} />
 *
 * Во всех этих случаях Test будет размонтирован и смонтирован заново, rand
 * станет новым.
 */

// Задача 3

type ListProps = {
  open: boolean;
  items: number[];
};
type ListItemProps = {
  item: number;
};
const LIST = [1, 2, 3, 4, 5, 1000];

function List({ open, items }: ListProps) {
  if (!open) return null;
  return (
    <ul>
      {items.map((it, index) => (
        <ListItem key={index} item={it} />
      ))}
    </ul>
  );
}

function ListItem({ item }: ListItemProps) {
  return <li>{item}</li>;
}

export default function Foo() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={handleToggle}>toggle</button>
      <List open={isOpen} items={LIST} />
    </div>
  );
}
