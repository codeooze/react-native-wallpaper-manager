# @codeooze/react-native-wallpaper-manager
React native wallpaper manager
## Installation

```sh
npm install @codeooze/react-native-wallpaper-manager
```

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
