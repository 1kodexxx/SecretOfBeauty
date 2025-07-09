# 🌸 Секрет Красоты — Сайт студии красоты

<div align="center">
  <img src="./assets/web-app-manifest-512x512.png" alt="Secret of Beauty Logo" width="200" />
</div>

---

Добро пожаловать в **Secret of Beauty** — элегантный и адаптивный сайт студии красоты.  
Проект создан без фреймворков, с акцентом на дизайн, скорость и лёгкость.  
🔗 [Демо-версия на Netlify](https://secret-of-beauty.netlify.app)

---

## 🎥 Превью

<div align="center">
  <img src="https://raw.githubusercontent.com/1kodexxx/SecretOfBeauty/main/assets/images/secret-of-beauty.gif" alt="Мобильная версия сайта Secret of Beauty" width="300" />
  <p><strong>Мобильная версия сайта</strong></p>
</div>

---

## 🚀 О проекте

**Секрет Красоты** — это минималистичный статичный сайт с высокой скоростью загрузки, красивой типографикой и плавными стилями.  
Подходит для презентации студии красоты, бренда или небольшого бизнеса.

---

## 🔥 Основные функции

- 🎨 Элегантный адаптивный дизайн
- 📱 Полная мобильная поддержка
- 🌈 Tailwind CSS — кастомные цвета бренда
- ⚡ Быстрая сборка без фреймворков
- 🧠 Простая архитектура: HTML + PostCSS + JS
- 🔗 Поддержка PWA: `manifest`, `favicon`, иконки

---

## 🛠️ Технологии

- **Tailwind CSS** — утилитарная стилизация
- **PostCSS + Autoprefixer** — сборка стилей
- **Vanilla JS** — интерактивность
- **Custom HTML Builder (Node.js)** — генерация страниц
- **Netlify** — хостинг и деплой

---

## 📂 Структура проекта

```text
secret-of-beauty/
├── assets/               # Иконки, изображения, гифки
│   ├── gifs/
│   └── images/
├── components/           # Повторно используемые HTML-фрагменты
├── css/                  # Исходные стили (input.css)
├── dist/                 # Финальный билд (index.html, output.css)
├── js/                   # JS-скрипты
├── pages/                # Страницы сайта
├── scripts/              # Скрипты генерации HTML
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── yarn.lock
└── README.md
