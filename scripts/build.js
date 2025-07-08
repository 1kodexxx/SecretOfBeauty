const fs = require("fs");
const path = require("path");

// Чтение компонентов
const header = fs.readFileSync("components/header.html", "utf8");
const footer = fs.readFileSync("components/footer.html", "utf8");
const page = fs.readFileSync("pages/home.html", "utf8");

// Финальный HTML
const html = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Секрет Красоты</title>
  <link rel="stylesheet" href="css/output.css" />
</head>
<body class="font-body bg-ivory text-chocoWax">
  ${header}
  ${page}
  ${footer}
</body>
</html>`;

// Создание dist и запись
if (!fs.existsSync("dist")) fs.mkdirSync("dist");
fs.writeFileSync("dist/index.html", html);

// Копирование assets
const srcAssets = path.resolve("assets");
const destAssets = path.resolve("dist/assets");
fs.cpSync(srcAssets, destAssets, { recursive: true });

console.log("✅ Сборка завершена: dist/index.html");
