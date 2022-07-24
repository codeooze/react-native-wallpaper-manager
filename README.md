# @codeooze/react-native-wallpaper-manager
React native wallpaper manager
## Installation

```sh
npm install @codeooze/react-native-wallpaper-manager
```

## Usage

```js
import { applyWallpaper } from "@codeooze/react-native-wallpaper-manager";

// ...

   applyWallpaper(uri, screen)
     .then((response) => { Alert.alert(response) })
     .catch((error) => { Alert.alert(error.message) })
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
