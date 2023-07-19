import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import * as MediaLibrary from "expo-media-library";

export default function App() {

    const saveToMediaLibrary = async () => {
        const writeOnlyPermissions = await MediaLibrary.requestPermissionsAsync(true);
        console.log(writeOnlyPermissions);

        if (writeOnlyPermissions.granted) {
            const imageUri ="https://baconmockup.com/360/360/"
            const asset = await MediaLibrary.createAssetAsync(imageUri);
            console.log(asset)
        }

    }

  return (
    <View style={styles.container}>
      <Button title={"TEST"} onPress={() => saveToMediaLibrary()}>
      </Button>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
