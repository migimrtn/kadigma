import { getAuth, signOut } from 'firebase/auth';
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

const Dashboard = ({ navigation }) => {

  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <ImageBackground source={require('./assets/bg app.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('./assets/Kadigma5by2.png')} style={styles.logo} />
        <View style={styles.buttonContainer}>
          <View>
            <Text style={styles.user}>Welcome Warrior: {user?.email}</Text>
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
    </ImageBackground>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logo: {
    aspectRatio: 5 / 2,
    height: 150,
    
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    
  },
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   // backgroundColor: 'rgba(255,255,255,0.5)', // Semi-transparent white background over the image
    marginTop: 20,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: '50%',
    
  },  
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FF0000',
    borderRadius: 30,
    height: 40,
  },
  user: {
    fontSize: 15,
    textAlign: 'center',
    height: 90,
    color: 'black',
    marginBottom: -40,

  }
});
