# 🚀 Codewars Start

Образовательный проект с решениями задач Codewars и примерами React приложений.

## 📁 Структура проекта

```
📦 codewars-start/
├── 📁 learning/                   # 🎓 Образовательные материалы
│   ├── 📁 codewars/              # Задачи Codewars (8kyu, 7kyu, 6kyu)
│   ├── 📁 algorithms/            # Алгоритмы и структуры данных
│   ├── 📁 solid-examples/        # Принципы SOLID
│   ├── 📁 async-patterns/        # Асинхронные паттерны
│   └── 📁 js-concepts/           # Концепции JavaScript
├── 📁 react-app/                 # ⚛️ React приложение
│   ├── 📁 public/
│   ├── 📁 src/
│   └── package.json
├── package.json                  # 🏠 Workspace конфигурация
└── pnpm-workspace.yaml          # 🔧 PNPM Workspace
```

## 🛠 Установка и запуск

### Установка зависимостей
```bash
pnpm install
```

### Запуск React приложения
```bash
# Из корня проекта
pnpm dev:react

# Или из папки react-app
cd react-app
pnpm start
```

### Другие команды
```bash
pnpm build:react      # Сборка React приложения
pnpm test:react       # Тесты React приложения
pnpm install:all      # Установка всех зависимостей
```

## 🎯 Цели проекта

- 📚 **Обучение** - решение алгоритмических задач
- 🏗 **Практика** - применение принципов SOLID
- ⚛️ **React** - современные паттерны и хуки
- 🔄 **Асинхронность** - работа с Promise, debounce
- 📝 **TypeScript** - типизация и лучшие практики

## 🔧 Технологии

- **JavaScript/TypeScript**
- **React 19** + Hooks
- **PNPM** Workspaces
- **Create React App**
- **Prettier** для форматирования

## 📖 Документация

Подробную информацию по каждой секции смотрите в соответствующих README:
- [Learning Materials](./learning/README.md)
- [React App](./react-app/README.md)

---

*Проект создан для изучения современных практик JavaScript/TypeScript разработки*