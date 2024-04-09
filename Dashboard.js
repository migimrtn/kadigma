import { getAuth, signOut } from 'firebase/auth';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';


const Dashboard = ({ navigation }) => {

  const auth = getAuth();
  const user = auth.currentUser;

  return (
    
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <View style={styles.buttonContainer}>
        <View>
          <Text style={styles.user}>Welcome: {user?.email}</Text>
        </View>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Chatbot')} >
          <Text style={{ color: 'white'}}>Chatbot</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Directories')} >
          <Text style={{ color: 'white'}}>Directories</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('UniversityMap')} >
          <Text style={{ color: 'white'}}>University Map</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={async () => {
            await signOut(auth)
            navigation.navigate('SignIn')
          }} >
          <Text style={{ color: 'white'}}>Logout</Text>
        </Pressable>

      </View>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  logo: {
    aspectRatio: 4 / 3,
    height: 200,
    
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
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    width: '100%',
  },  
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#D10003',
    borderRadius: 5,
    height: 40,
  },
  user: {
    fontSize: 20,
    textAlign: 'center',
    color: 'blue',
  }
});
