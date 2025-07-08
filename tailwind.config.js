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
        primary: "#ffcdd2", // Главный фирменный цвет (нежно-розовый)
        primaryDark: "#e57373", // Тёмный вариант
        primaryLight: "#ffeef0", // Очень светлый вариант

        secondary: "#783B20", // Шоколадно-восковый
        secondaryDark: "#522314", // Винный тёмный

        roseAccent: "#C2757B", // Лилово-розовый акцент
        ivory: "#FFF3D1", // Кремовый фон
        paper: "#FFF8E1", // Бумажный светлый фон
        textPrimary: "#3C1F0F", // Глубокий коричневый текст
      },
    },
  },
  plugins: [],
};
