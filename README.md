# @thumbsup/theme-cards

[![NPM](https://img.shields.io/npm/v/@thumbsup/theme-cards.svg?style=flat)](https://www.npmjs.com/package/@thumbsup/theme-cards)
[![Travis CI](https://travis-ci.org/thumbsup/theme-cards.svg?branch=master)](https://travis-ci.org/thumbsup/theme-cards)

One of the built-in themes for https://github.com/thumbsup/thumbsup.

---

## Usage

```bash
thumbsup --theme cards
```

## Screenshots

![albums](docs/albums.png)
![media](docs/media.png)

## Options

You can use override the following variables to customise this theme:

```less
@body-background: #fff;
@body-color: #444;
@header-color: #444;
@nav-border: #ddd;
```

You can add them to your own LESS file, and run thumbsup with `--theme-style custom.less`.

## Developing

Testing the theme

```bash
thumbsup --input /photos --output ./tmp --theme-path ./theme
```

Publishing the theme:

```bash
npm publish --access=public
```
