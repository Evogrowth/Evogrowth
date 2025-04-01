# Astro template with TailwindCss implementation

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

[Astro docs](https://docs.astro.build)
[Astro Discord server](https://astro.build/chat).

## Add multiple languages

> [!NOTE]
> The automatic redirect that Astro offers only works in SSR mode.


Create a folder "i18n" in /src with the following files:

### ui.ts

```
//Define your languages
export const languages = {
    es: 'Español',
    en: 'English'
};

//Select a default language
export const defaultLang = 'es';

//Your translations go here
export const ui = {
    es: {
        "navbar.home": "Inicio",
        "navbar.menu": "Menú"
    },
    en: {
        "navbar.home": "Home",
        "navbar.menu": "Menu"
    }
} as const;
```


### utils.ts

```
import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
```


In the **astro.config.mjs** file add the following lines:

```
//Repeat the values from ui.ts
export default defineConfig({
  i18n:{
    locales: ["es", "en"],
    defaultLocale: "es",
  }
});
```


Lastly, in your /pages folder keep the index.astro and create folders for every language you need.

/pages
    index.astro
    /en
        index.astro


Now you can use your translations in your components like this
```
---
import { getLangFromUrl, useTranslations } from '../i18n/utils';
const t = useTranslations(lang);
---
<img class="h-auto w-8 mx-auto" src={mail.src} alt={t("footer.email-alt")} title={t("footer.email-alt")}>
<!-- adds an image with a title that's different depending on your language. -->
```
