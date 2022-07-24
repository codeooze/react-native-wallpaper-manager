import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package '@codeooze/react-native-wallpaper-manager' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const ReactNativeWallpaperManager = NativeModules.ReactNativeWallpaperManager  ? NativeModules.ReactNativeWallpaperManager  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function applyWallpaper(uri: any, screen: string): Promise<any> {
  return ReactNativeWallpaperManager.applyWallpaper(uri, screen)
}