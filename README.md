# AUTO.UA

## Технології

- React.js
- Vite
- Tailwind CSS
- Material UI
- Material UI Icons
- React Router DOM

## Структура проекту

- `src/` - коренева папка проекту.
  - `components/` - компоненти для сторінок.
  - `assets/` - ресурси та асети для сторінок.
  - `constants/` - файли з даними для списків та іншого, які відображаються через метод `map`.
  - `Pages/` - сторінки проекту.
  - `redux/` - файли для управління станом Redux.
  - `index.css` - базові та активні стилі.

## Функціональність

Цей проект є пет-проектом для оренди авто в Україні. Основні можливості включають:

- Пошук автомобілів за параметрами, такими як пробіг, марка та ціна.
- Додавання та видалення авто в улюблені.
- Відображення списку улюблених авто на сторінці "Favorites".

## Використання React Router DOM

Для навігації між сторінками у проекті використовується бібліотека React Router DOM. Роутинг встановлюється та конфігурується в файлі `src/App.js` (або аналогічному).