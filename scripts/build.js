const fs = require("fs");
const path = require("path");

// Пути
const COMPONENTS_DIR = path.resolve(__dirname, "../components");
const PAGES_DIR = path.resolve(__dirname, "../pages");
const DIST_DIR = path.resolve(__dirname, "../dist");

// Читаем header и footer
const header = fs.readFileSync(
  path.join(COMPONENTS_DIR, "header.html"),
  "utf8"
);
const footer = fs.readFileSync(
  path.join(COMPONENTS_DIR, "footer.html"),
  "utf8"
);

// 1) Сканируем страницы
let pageFiles = fs.readdirSync(PAGES_DIR).filter((f) => f.endsWith(".html"));

// 2) Задаём желаемый порядок
const desiredOrder = [
  "home.html",
  "about.html",
  "services.html",
  "contact.html",
];
pageFiles = desiredOrder
  .filter((f) => pageFiles.includes(f))
  .concat(pageFiles.filter((f) => !desiredOrder.includes(f)));

// 3) Собираем HTML
const pagesHtml = pageFiles
  .map((fileName) => {
    const raw = fs.readFileSync(path.join(PAGES_DIR, fileName), "utf8").trim();
    const sectionId = path.basename(fileName, ".html");
    return `<section id="${sectionId}" class="py-20 px-0">\n${raw}\n</section>`;
  })
  .join("\n\n");

// 4) Итоговый шаблон
const finalHtml = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Секрет Красоты</title>
  <link rel="stylesheet" href="css/output.css" />
</head>
<body class="font-body bg-ivory text-chocoWax">

  ${header}

  <main>
  ${pagesHtml}
  </main>

  ${footer}

</body>
</html>`;

// 5) Пишем в dist и копируем ассеты
if (!fs.existsSync(DIST_DIR)) fs.mkdirSync(DIST_DIR, { recursive: true });
fs.writeFileSync(path.join(DIST_DIR, "index.html"), finalHtml, "utf8");

const ASSETS_SRC = path.resolve(__dirname, "../assets");
const ASSETS_DST = path.resolve(DIST_DIR, "assets");
fs.rmSync(ASSETS_DST, { recursive: true, force: true });
fs.cpSync(ASSETS_SRC, ASSETS_DST, { recursive: true });

console.log("✅ Сборка завершена: dist/index.html");
