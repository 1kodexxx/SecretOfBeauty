/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.html",
    "./components/**/*.html",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        oldRose: "#CC8B86", // Мягкий розовый
        linen: "#F9EAE1", // Светлый бежево-розовый
        roseTaupe: "#7D4F50", // Глубокий винно-розовый
        dun: "#D1BE9C", // Светлый песочный
        cinereous: "#AA998F", // Пепельно-коричневый

        // Для удобства можно добавить сокращения:
        primary: "#CC8B86", // Базовый фирменный (Old Rose)
        background: "#F9EAE1", // Фон (Linen)
        accent: "#7D4F50", // Акцент (Rose Taupe)
        neutral: "#AA998F", // Нейтральный для текста/бэкграунда
        highlight: "#D1BE9C", // Подсветка (Dun)
      },
    },
  },
  plugins: [],
};
