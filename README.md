# react-cards
* Run `npm install` to get the project's dependencies
* Run `npm run build` to produce minified version of the library
* Run `npm run dev` to produce development version of the library.
* Run `npm run test` to run tests
* Run `npm run docs` to run generate examples

### To use react-cards
```javascript
import { Cards, Card, CardHeader, CardContent } from '@opuscapita/react-cards';
```
### Development workflow
* Run `npm run docs`
* Open `index.html`

### Development workflow with project using the package
##### Link local package to your project
* Run `npm link` at `react-cards` root to make your local package linkable
* Run `npm link @opuscapita/react-cards` at project's dir that's using `react-cards` to use local package
##### Build and watch the package
* Run `npm run dev` to run webpack in watch mode
##### Unlink local package
* Run `npm unlink @opuscapita/react-cards` at project's dir that's using `react-cards`
* Run `npm install` to install remote copy of the `react-cards` package

### Changelog
* Remember to update the CHANGELOG.md file with information about the changes to `src`

### Contributing
* Make a new branch for the changes
* Update `CHANGELOG.md` file
* Update `LICENSE-3RD-PARTY.md` in case lib changes
* Commit changes (not `lib`)
* Push changes
* Make a pull request
* Merge the pull request and delete the development branch

### Creating a new release tag
* Run `npm version [major|minor|patch]` [Info](https://docs.npmjs.com/cli/version)

### Trouble shooting
* If you get any errors about running many instances of certain npm libraries eg. React, check that your project's webpack is configured to resolve those conflicting packages to your projects `node_modules` directory. [Docs](https://webpack.github.io/docs/configuration.html#resolve-alias)

### Examples
* [Demo](https://opuscapita.github.io/react-cards) implementations of the components
* Run `npm run docs` to create output to `examples-build` or `npm run hot` for using hot reload functionality

### Component descriptions

- [Icons](./src/cards/README.md)

## Links

Cheatseet for [Markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
