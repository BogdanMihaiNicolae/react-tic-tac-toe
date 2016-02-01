# React Tic Tac Toe example

## Description


This is the code that powers my little Tic Tac Toe react game :). To build it I've used [React](http://jade-lang.com/) and [SASS](http://sass-lang.com/).

For the development environment I've used [Yeoman](http://yeoman.io/)'s [generator-react-6](https://www.npmjs.com/package/generator-react-6).

The live game is currently running on [www.bmn.com.ro/react-game](http://www.bmn.com.ro/react-game).

This is licensed under the MIT and GPL licenses.

## Install and run

For this to work you need to have installed [Git](https://git-scm.com/), [Node](https://nodejs.org) with npm and [Ruby](https://www.ruby-lang.org) to compile [SASS](http://sass-lang.com/).

Clone the repository from Github:

```sh
git clone https://github.com/bogdanmihainicolae/react-tic-tac-toe
```
Install the packages required:

```sh
cd personal-website && npm install
```

### Automated tasks

This project uses [Gulp](http://gulpjs.com) to run automated tasks for development and production builds.
The tasks are as follows:

`gulp serve`: Compiles preprocessors and boots up development server
`gulp serve --open`: Same as `gulp serve` but will also open up site/app in your default browser
`gulp serve --production`: Same as `gulp serve` but will run all production tasks so you can view the site/app in it's final optimized form

`gulp --production`: Same as `gulp serve --production` also run `gulp test` and  not boot up production server

`gulp test`: Lints all `*.js` file in the `source` folder using eslint



## File structure

The basic file structure for the project is organized in the following way:
```

└── styles
    └── components
      └── _settings.scss
      └── _game.scss
    └── main.scss
└── scripts
    └── components
      └── components
        └── Board.js
        └── Cell.js
        └── Footer.js
        └── Header.js
      └── app.js
└── index.html
```
