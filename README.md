
<br/>
<br/>

<img src="https://raw.githubusercontent.com/codeooze/react-native-wallpaper-manager/main/icon.png" alt="drawing" width="150" height="150"/>

# @codeooze/react-native-wallpaper-manager
React native wallpaper manager

> *Note: This package is only for android.*

## Installation

```sh
npm install @codeooze/react-native-wallpaper-manager
```
## React Native 0.59 and below
Run `npx react-native link @codeooze/react-native-wallpaper-manager` to link the library.

## Usage

```js

import *as React from 'react';
import { applyWallpaper } from '@codeooze/react-native-wallpaper-manager';

const App = () => {

  // ...
  
  const setWallpaper = (uri, screen) => {
  
    //uri = "https://i.pinimg.com/originals/76/5e/1d/765e1dc8cb1cc115fb3b0b39a895fdeb.jpg"
    //screen = "home" || "lock" || "both"

    applyWallpaper(uri, screen)
      .then((response) => { Alert.alert(response) })
      .catch((error) => { Alert.alert(error.message) })

  }
  
  // ...
  
}

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

## Buy me a coffee
<a href="https://www.buymeacoffee.com/codeooze" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
