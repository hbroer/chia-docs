![chiadocs-01](https://github.com/Chia-Network/chia-docs/assets/1146050/30eabb47-1c10-489c-858d-522fb1623f98)


This is the website for Chia Docs, the source of truth for Chia documentation.

## Localization (Translation)

[![Crowdin](https://badges.crowdin.net/e/0bcec1c3702f37ddf7fcbdc5eba92ec3/localized.svg)](https://chia.crowdin.com/chia-docs) 

If you would like to contribute localization translations, please visit our [Crowdin](https://chia.crowdin.com/chia-docs) and sign up to be a contributor.
  
  

## Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator, and deployed with Github Pages.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Serve

```
$ npm run serve
```

This command serves the static content in the `build` directory.

### Commands run in github CI

These are the commands being run in the github CI, run them all locally in this order to ensure there are no issues building and serving the content prior to submitting a pr:

```
$ npm ci
$ npm install
$ npm run build
$ npm run serve
```
