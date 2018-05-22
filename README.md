# react-cards

### Description
Contains **Cards** component that is a scrollable container for cards. Inside this container there can be any number of **Card** components that can contain both or one of **CardHeader** and **CardContent**.

Cards can be expanded and collapsed. In collapsed state the card content is hidden.

It's also possible to hide all except specific card.

### Installation
```
npm install @opuscapita/react-cards
```

### Demo
View the [DEMO](https://opuscapita.github.io/react-cards)

### Builds
#### UMD
The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
* Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### API

#### Cards

| Prop name | Type | Default | Description     |
| --------- | ---- | ------- | --------------- |
| children  | Card | false   | Card components |

#### Card

| Prop name                                | Type     | Default | Description                 |
| ---------------------------------------- | -------- | ------- | --------------------------- |
| id                                       | string   | false   | Unique ID for the card      |
| expanded                                 | boolean  | false   | Card's expanded state       |
| setExpanded(cardId: string, status: boolean) | function | false   | Set card's expanded state   |
| showOnlyCard                             | string   | false   | Show only card with this ID |

#### CardHeader

| Prop name | Type | Default | Description         |
| --------- | ---- | ------- | ------------------- |
| children  | Any  | false   | Card header content |

#### CardContent

| Prop name | Type | Default | Description  |
| --------- | ---- | ------- | ------------ |
| children  | Any  | false   | Card content |

### Code example

```jsx
import React from 'react';
import { Cards, Card, CardHeader, CardContent } from '@opuscapita/react-cards';

class MyCardsView extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
    };
  }

  setExpanded = (cardId, status) => {
    this.setState({
      expanded: status,
    });
  }

  render() {
    return (
      <div id="my-cards-view">
        <Cards>
          <Card
            id="my-card"
            expanded={this.state.expanded}
            setExpanded={this.setExpanded}
            showOnlyCard={'my-card'}
          >
            <CardHeader>I'm card header</CardHeader>
            <CardContent>I'm card content</CardContent>
          </Card>
        </Cards>
      </div>
    );
  }
}
```

