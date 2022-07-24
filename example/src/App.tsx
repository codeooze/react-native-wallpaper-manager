import *as React from 'react';
import { View, StyleSheet, FlatList, Image, Text, Alert, TouchableOpacity } from 'react-native';
import { applyWallpaper } from '@codeooze/react-native-wallpaper-manager';

const wallpaperData = [
  'https://unsplash.com/photos/j59QscG6DxM/download?ixid=MnwxMjA3fDB8MXxhbGx8NHx8fHx8fDJ8fDE2NTg2NTUwMjc&force=true&w=1920',
  'https://unsplash.com/photos/uyDA8T6e8QI/download?force=true&w=1920',
  'https://unsplash.com/photos/DCisjJUJF-I/download?force=true&w=1920',
  'https://unsplash.com/photos/vbAEHCrvXZ0/download?force=true&w=1920',
  'https://unsplash.com/photos/sf_1ZDA1YFw/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU4NjU4MzU5&force=true&w=1920'
]

const App = () => {

  const setWallpaper = (uri, screen) => {

    applyWallpaper(uri, screen)
      .then((response) => { Alert.alert(response) })
      .catch((error) => { Alert.alert(error.message) })

  }

  const showAlert = (item) =>
  Alert.alert(
    "Apply wallpaper",
    "Are you sure want to apply this wallpaper?",
    [
      {
        text: "Home",
        onPress: () => setWallpaper(item, 'home')
      },
      {
        text: "Lock",
        onPress: () => setWallpaper(item, 'lock')
      },
      {
        text: "Both",
        onPress: () => setWallpaper(item, 'both')
      }
    ],
    {
      cancelable: true
    }
  );

  const _renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.Card} onPress={() => { showAlert(item) }} >
        <Image source={{ uri: item }} style={StyleSheet.absoluteFill} />
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.Root} >

      <Header/>

      <FlatList
        data={wallpaperData}
        renderItem={_renderItem}
        numColumns={2}
      />

    </View>
  )
};

export default App;

const Header = () => {
  return (
    <View style={styles.HeaderContainer} >
        <Text style={styles.HeaderText} >Codeooze Wallpaper manager</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  Root: {
    flex: 1,
    backgroundColor: '#fff'
  },

  Card: {
    height: 250,
    width: '44%',
    backgroundColor: '#e7e7e7',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden'
  },

  HeaderContainer: {
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 20,
    elevation: 10
  },

  HeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  }
})