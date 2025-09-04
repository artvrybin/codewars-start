# 🎓 Learning Materials

Образовательные материалы по JavaScript/TypeScript и алгоритмам.

## 📁 Структура

### 🏆 `codewars/`
Решения задач с платформы Codewars, организованные по уровням сложности:
- **8kyu** - Начальный уровень
- **7kyu** - Базовый уровень  
- **6kyu** - Средний уровень

### 🧮 `algorithms/`
Различные алгоритмы и структуры данных:
- Поиск и сортировка
- Работа с массивами и строками
- Математические алгоритмы

### 🏗 `solid-examples/`
Практические примеры принципов SOLID:
- **SRP** - Single Responsibility Principle
- **OCP** - Open/Closed Principle
- **LSP** - Liskov Substitution Principle
- **ISP** - Interface Segregation Principle
- **DIP** - Dependency Inversion Principle

### ⚡ `async-patterns/`
Паттерны асинхронного программирования:
- Работа с Promise
- Debounce/throttle
- Кастомные реализации асинхронных функций

### 🔧 `js-concepts/`
Концепции JavaScript:
- Контекст выполнения (`this`)
- Higher Order Components (HOC)
- Замыкания и область видимости

## 🚀 Использование

### JavaScript файлы
```bash
node learning/algorithms/allAnagrams.js
node learning/codewars/8kyu/EvenOrOdd.js
```

### TypeScript файлы
```bash
# Из корня проекта
pnpm dev:learning solid-examples/SRP.tsx

# Или локально из learning/
cd learning
pnpm dev solid-examples/SRP.tsx

# Проверка типов
pnpm type-check:learning  # из корня
pnpm type-check          # из learning/
```

### Рекомендуемый workflow
1. **Разработка** - используйте `pnpm dev:learning` для запуска TypeScript файлов
2. **Проверка** - `pnpm type-check:learning` для валидации типов
3. **Тестирование** - запускайте JS файлы через `node`
