# AI Page Publisher

> Публикуйте сгенерированные ИИ React-страницы в веб одним push.

| [English](../README.md) · [中文](README.zh.md) · [简体](README.zh-CN.md) · [Español](README.es.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [हिन्दी](README.hi.md) · [Tiếng Việt](README.vi.md) · [Bahasa Indonesia](README.id.md) · [한국어](README.ko.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Türkçe](README.tr.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [עברית](README.he.md) |
| :-- |

Сгенерируйте страницу с помощью Claude, ChatGPT или любого ИИ. Вставьте её в `src/App.jsx`. Сделайте push. Готово.

## Быстрый старт

1. **Попросите ИИ сгенерировать JSX** — скажите Claude, ChatGPT или любому ИИ создать вашу страницу как React-компонент в **формате JSX**

   <details>
   <summary>Шаблон промпта (нажмите, чтобы развернуть и скопировать)</summary>

   ```
   Создайте страницу React в формате JSX, которую можно использовать как src/App.jsx.

   Тема: [тема вашего сайта — напр.: кофейня, портфолио, SaaS-продукт]
   Стиль: [стиль дизайна — напр.: минималистичный, современный, яркий, корпоративный]
   Детали: [нужные разделы — напр.: герой, преимущества, отзывы, цены, контакты]

   Технические требования:
   - Используйте Tailwind CSS для всех стилей
   - Используйте компоненты shadcn/ui (импорт из @/components/ui/) при необходимости
   - Используйте lucide-react для иконок
   - Сделайте адаптивную вёрстку для мобильных и десктопов
   - Экспорт: export default function App()
   - Один файл, без дополнительных CSS-файлов или CDN-скриптов
   ```

   </details>

2. **Используйте этот шаблон** — на странице GitHub нажмите **«Use this template»** → **«Create a new repository»**, чтобы создать свой репозиторий. Ваше имя пользователя GitHub и название репозитория определят URL вашего сайта (`https://<имя-пользователя>.github.io/<имя-репо>/`)
3. **Включите GitHub Pages** — перейдите в **Settings → Pages** и выберите для Source значение **GitHub Actions**
4. **Замените** [`src/App.jsx`](../src/App.jsx) — вставьте JSX, сгенерированный ИИ, в этот файл, **удалите и замените всё существующее содержимое**, затем сохраните

## Настройка (Необязательно)

| Что | Как |
| :-- | :-- |
| Заголовок, описание и Google Analytics | Измените `<title>`, `<meta name="description">` и Google Analytics в [`index.html`](../index.html) |
| Свой домен | Замените заглушку в [`public/CNAME`](../public/CNAME) на свой домен (например, `mysite.com`), настройте DNS для GitHub Pages и введите тот же домен в **Settings → Pages → Custom domain**. Или создайте переменную репозитория `CUSTOM_DOMAIN` в **Settings → Secrets and variables → Actions → Variables** |

## Что включено

Этот шаблон предварительно настроен со всем, что обычно используют сгенерированные ИИ страницы:

- **React 18 + Vite + Tailwind CSS 3** — современная, быстрая сборка без настройки
- **Более 40 компонентов shadcn/ui** предустановлены в `src/components/ui/`
- **Все примитивы Radix UI** для доступных интерактивных элементов
- **Иконки** — `lucide-react`, `react-icons`, `@heroicons/react`
- **Графики и визуализация данных** — `recharts`, `chart.js` + `react-chartjs-2`, `d3`, `apexcharts`
- **Карты** — `leaflet` + `react-leaflet`, `@react-google-maps/api`, `react-simple-maps`
- **Видео и аудио** — `react-player`, `howler`
- **Анимация** — `framer-motion`, `react-spring`, `lottie-react`, `react-confetti`, `aos`, `tailwindcss-animate`
- **Форматированный текст** — `@tiptap/react` + starter-kit + 12 расширений (ссылка, изображение, таблица, цвет, подсветка…)
- **Формы** — `react-hook-form` + `@hookform/resolvers` + `zod`, `react-number-format`
- **Блок-схемы** — `@xyflow/react`
- **3D** — `three`, `@react-three/fiber`, `@react-three/drei`
- **Изображения** — `react-easy-crop`, `react-image-gallery`, `yet-another-react-lightbox`, `react-lazy-load-image-component`
- **PDF** — `jspdf`, `@react-pdf/renderer`, `react-pdf`, `pdf-lib`
- **Календарь** — `react-big-calendar`, `react-day-picker`
- **Платежи** — `@stripe/stripe-js` + `@stripe/react-stripe-js`
- **i18n** — `i18next` + `react-i18next`
- **SEO** — `react-helmet-async`
- **Электронная почта** — `@emailjs/browser`
- **Работа с файлами** — `file-saver`, `jszip`, `papaparse`, `xlsx`
- **Поиск** — `fuse.js`
- **UI-эффекты** — `react-type-animation`, `@tsparticles/react`, `react-parallax-tilt`
- **Перетаскивание** — `@dnd-kit/core` + sortable, `react-beautiful-dnd`
- **Карусель** — `embla-carousel-react`, `swiper`, `react-slick`
- **Canvas** — `fabric`
- **CSS-in-JS** — `styled-components`, `@emotion/react`
- **Утилиты** — `date-fns`, `dayjs`, `lodash`, `axios`, `zustand`, `react-router-dom`, `nanoid`, `crypto-js`, `@faker-js/faker` и многое другое

> Tree-shaking гарантирует, что в финальную сборку попадут только те пакеты, которые вы реально используете.

## Проверка отсутствующих импортов

Если сгенерированный ИИ код использует пакет, который не предустановлен, выполните:

```bash
npm run check
```

Эта команда сканирует ваши исходные файлы и сообщает об отсутствующих зависимостях с точной командой `npm install` для их установки.

## Как работает base path

Сборка автоматически определяет правильный base path:

| Сценарий | Base Path |
| :-- | :-- |
| Свой домен (в CNAME указан домен) | `/` |
| GitHub Pages (без своего домена) | `/<имя-репо>/` |
| Локальная разработка | `/` |

Ручная настройка не требуется.

## Структура файлов

```
├── src/
│   ├── App.jsx              ← ЗАМЕНИТЕ ЭТОТ ФАЙЛ
│   ├── main.jsx             ← Точка входа (не изменять)
│   ├── index.css            ← Tailwind + тема shadcn
│   ├── lib/utils.js         ← Утилита cn()
│   ├── hooks/use-toast.js   ← Хук toast
│   └── components/ui/       ← Компоненты shadcn/ui
├── public/
│   ├── CNAME                ← Свой домен (необязательно)
│   └── favicon.svg          ← Иконка сайта
├── scripts/
│   └── check-imports.js     ← Обнаружение отсутствующих зависимостей
├── .github/workflows/
│   └── deploy.yml           ← Деплой через GitHub Actions
├── index.html               ← Заголовок страницы и мета-теги
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Добавление компонентов shadcn/ui

Шаблон включает более 40 компонентов shadcn. Если вам нужно больше:

```bash
npx shadcn@latest add <имя-компонента>
```

Файл `components.json` уже настроен.

## Локальная разработка

```bash
npm install
npm run dev
```

Откройте `http://localhost:5173` в браузере.

## Решение проблем

**Сборка падает с ошибками импорта.**
Выполните `npm run check`, чтобы увидеть, какие пакеты отсутствуют, затем установите их.

**Страница пустая после деплоя.**
Убедитесь, что источник GitHub Pages установлен на **GitHub Actions**, а не на «Deploy from a branch».

**Свой домен не работает.**
Проверьте, что `public/CNAME` содержит только ваш домен. Проверьте DNS-записи.
