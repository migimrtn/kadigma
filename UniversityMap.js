import { getAuth, signOut } from 'firebase/auth';
import { Button, Image, StyleSheet, Text, View } from 'react-native';


const UniversityMap = ({ navigation }) => {

  const auth = getAuth();
  const user = auth.currentUser;

  return (
    
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Image source={require('./assets/directories.png')} style={styles.directoryImage} />
      
    </View>
  )
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
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  directoryImage: {
    height: '80%',
    width: '100%',
    resizeMode: 'contain',
  }
});
