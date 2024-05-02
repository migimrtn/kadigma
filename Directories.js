import { getAuth, signOut } from 'firebase/auth';
import { Button, Image, StyleSheet, Text, View } from 'react-native';


const Directories = ({ navigation }) => {

  const auth = getAuth();
  const user = auth.currentUser;

  return (
    
    <View style={styles.container}>
      <Image source={require('./assets/directory2.png')} style={styles.directoryImage} />
      
    </View>
  )
}

export default Directories

const styles = StyleSheet.create({
  //logo: {
 //   aspectRatio: 4 / 3,
 //   height: 100,
    
  //},
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
    height: '120%',
    width: '105%',
    resizeMode: 'contain',
  }
});
