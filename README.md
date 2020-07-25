# Perestroika CSS

![npm](https://img.shields.io/npm/v/perestroika-css)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/perestroika-css)
![NPM](https://img.shields.io/npm/l/perestroika-css)

#### Reform for classless styling system.

Although classless styling systems work perfect for creating fast and simple yet beautiful projects, they are very limited when creating (relative) complex layouts.

Taking [Marx CSS](https://github.com/mblode/marx) as inspiration, Perestroika CSS is a reform for a classless styling system, adding functionality through some simple extra classes.

> The classless CSS reset (perfect for Communists) - Marx CSS

## Features

- Classless *(almost)*. Works out of the box with HTML markup.
- Simple set of classes with added functionality.
- Customizable and extensible through SCSS variables and mixins.
- Ultra lightweight *and simple* flexbox grid

## Quick Start

**Option 1** (recommended)

Install from NPM and import with a bundler.

```
npm install perestroika-css
```

```js
import 'perestroika-css';
```

or import the SCSS to customize it.

```scss
// Customize variables before import
$primary-color: #7d7;

// Import Perestroika-CSS
@import '~perestroika-css/scss/main.scss';

// Extend or create new components
button.is-alert { @include btn-color(#f65, #fff); }
```

**Option 2**

Load from CDN. This option loads raw compiled CSS that cannot be customized.

```html
<link rel="stylesheet" href="https://unpkg.com/perestroika-css" />
```

## Customization
A small collection of [SCSS variables](./scss/_variables.scss) is available to customize the final look of the styling. Just override variables before importing the package.

A small collection of [SCSS mixins](./scss/_mixins.scss) is available as well to extend new components reducing the amount of code to write.

## Contribution
This is a personal project I started to improve SCSS skills, as well as learning about the NPM module pipeline and Github actions. There probably are many many bugs to be fixed. Contributions are welcome. Fill an issue report or create a pull request. Thanks!
