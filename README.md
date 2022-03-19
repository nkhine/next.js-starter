# Next.js Starter

[![repo-size](https://img.shields.io/github/repo-size/strawhat-dev/next.js-starter)](https://github.com/strawhat-dev/next.js-starter/find/main) [![next.js](https://img.shields.io/github/package-json/dependency-version/strawhat-dev/next.js-starter/next)](https://www.npmjs.com/package/next) [![react](https://img.shields.io/github/package-json/dependency-version/strawhat-dev/next.js-starter/react)](https://www.npmjs.com/package/react) [![typescript](https://img.shields.io/github/package-json/dependency-version/strawhat-dev/next.js-starter/dev/typescript)](https://www.npmjs.com/package/typescript) [![eslint](https://img.shields.io/github/package-json/dependency-version/strawhat-dev/next.js-starter/dev/eslint)](https://www.npmjs.com/package/eslint) [![next-node](https://img.shields.io/node/v/next)](https://nodejs.org/en/about/releases/) [![depfu](https://badges.depfu.com/badges/79459e465122c0ad357e53dfe49ab41c/overview.svg)](https://depfu.com/github/strawhat-dev/next.js-starter?project_id=33382) [![snyk](https://snyk.io/test/github/strawhat-dev/next.js-starter/badge.svg)](https://snyk.io/test/github/strawhat-dev/next.js-starter) [![appveyor](https://ci.appveyor.com/api/projects/status/je68uo8584ifjw7r/branch/main?svg=true)](https://ci.appveyor.com/project/strawhat-dev/next-js-starter/branch/main) [![sonar](https://sonarcloud.io/api/project_badges/measure?project=strawhat-dev_next.js-starter&metric=alert_status)](https://sonarcloud.io/dashboard?id=strawhat-dev_next.js-starter) [![codefactor](https://www.codefactor.io/repository/github/strawhat-dev/next.js-starter/badge/main)](https://www.codefactor.io/repository/github/strawhat-dev/next.js-starter/overview/main) [![codacy](https://app.codacy.com/project/badge/Grade/429496063a00477c9c774fb7a68880e8)](https://www.codacy.com/gh/strawhat-dev/next.js-starter/dashboard?utm_source=github.com&utm_medium=referral&utm_content=strawhat-dev/next.js-starter&utm_campaign=Badge_Grade) [![lgtm](https://img.shields.io/lgtm/grade/javascript/g/strawhat-dev/next.js-starter.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/strawhat-dev/next.js-starter/context:javascript) [![maintainability](https://api.codeclimate.com/v1/badges/f2a22a5d2aca2011297d/maintainability)](https://codeclimate.com/github/strawhat-dev/next.js-starter/maintainability) [![clearlydefined](https://img.shields.io/clearlydefined/score/git/github/strawhat-dev/next.js-starter/67a8d71518777bbb8634d11c574a2021c5fc66fb)](https://clearlydefined.io/definitions/git/github/strawhat-dev/next.js-starter/67a8d71518777bbb8634d11c574a2021c5fc66fb) [![license](https://img.shields.io/github/license/strawhat-dev/next.js-starter)](https://github.com/strawhat-dev/next.js-starter/blob/main/LICENSE)

Minimal bleeding edge Next.js boilerplate prioritized for css-in-js, and pre-configured with TypeScript, stitches, eslint, prettier and theme support out of the box. Tested against Node.js 17+.


## Project Structure[^1]

```text
root
├── public
└── src
    ├── app
    ├── common
    ├── modules
    └── pages
        └── api
```

`root`: contains configs and `package.json`

`public`: [static file serving](https://nextjs.org/docs/basic-features/static-file-serving)

`src`: contains source code of application

`app`: contains constants, global styles, and “page bootstraps” that are used to initialize the client and server

`common`: contains random components, utils, hooks, etc. that cannot be categorized or grouped together

`modules`: when you have related code splattered all over common and it feels like they could be grouped together

`pages`: contains Next.js [pages](https://nextjs.org/docs/basic-features/pages) and `api` folder

`api`: contains Next.js [api routes](https://nextjs.org/docs/api-routes/introduction)


## Opinionated Extras

[@csstools/normalize.css](https://github.com/csstools/normalize.css): CSS library that provides consistent, cross-browser default styling of HTML elements

[next-themes](https://github.com/pacocoursey/next-themes): Abstraction for handling themes in Next.js and features no flash on load (both SSR and SSG)

[axios](https://axios-http.com/docs/intro): Promise based HTTP client with developer friendly API and automatic transforms

[dayjs](https://github.com/iamkun/dayjs): Fast, lightweight, and minimalist JavaScript library that can handle the parsing, validating, manipulating, and formatting of dates and/or times

[reactive-button](https://arifszn.com/reactive-button/docs): Tiny 3D animated React button library with zero dependencies

[type-fest](https://github.com/sindresorhus/type-fest): Collection of missing "essential" TypeScript types


## Not Included But Suggested

### UI Libraries

[radix-ui/primitives](https://www.radix-ui.com): Low-level UI component library with a focus on accessibility, customization and developer experience

[@nextui-org/react](https://nextui.org): More "complete" UI library that already uses stitches under the hood, and allows for a fast and modern UI regardless of design experience

### Icons

[react-icons](https://react-icons.github.io/react-icons): Library with svg icons of popular icon packs built for React

[icones](https://icones.js.org): Icon explorer that allows for the browsing of ready to use icons, as svg React components, with no installation or dependencies required

### Animation

[framer-motion](https://www.framer.com/motion): Production-ready motion library for React

### Virtualization

[react-virtualized](https://github.com/bvaughn/react-virtualized): Established React library for efficiently rendering large lists and tabular data

[react-virtuoso](https://virtuoso.dev): Newer alternative for react-virtualized with features such as variable dynamic height and responsive grid layouts out of the box

### Data Fetching

[react-query](https://react-query.tanstack.com/quick-start): "The missing data-fetching library for React" which includes fetching, caching, synchronizing, and updating server state

[swr](https://swr.vercel.app): React hooks for data fetching, and lighter weight alternative 
to react-query

### ORM

[prisma](https://www.prisma.io): Type-safe ORM with abstraction and model generation / migrations

[objection.js](https://vincit.github.io/objection.js): More robust ORM built on [knex](https://github.com/knex/knex)

### PWA Support

[next-pwa](https://github.com/shadowwalker/next-pwa): Zero config PWA plugin for Next.js, with workbox


[^1]: Based off of [next-right-now](https://unlyed.github.io/next-right-now/reference/folder-structure)
