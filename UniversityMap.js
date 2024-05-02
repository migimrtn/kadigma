import { getAuth, signOut } from 'firebase/auth';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';
const image = [
  {
    url:
      'https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/64344572_2375315929187346_2550682962861490176_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cVDhw-F3DokAb4qDXzE&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfDG4oanvaqfrkG-b8tDt0nXgzBzAT1Q2KriVVBaK9tnLg&oe=663E2E12',
  },
];

const UniversityMap = ({ navigation }) => {

  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <View style={styles.container}>
      <ImageViewer imageUrls={image} />
    </View>
  );
}

export default UniversityMap

const styles = StyleSheet.create({
  logo: {
    aspectRatio: 4 / 3,
    height: 150,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  directoryImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  }
});
