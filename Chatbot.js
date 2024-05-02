import { useEffect, useRef, useState } from "react";
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View, ImageBackground } from "react-native";
import { output } from "./utils/text-extract";

const Item = ({ data }) => (
  <View style={data?.type === 'user' ? styles.listItemUser : styles.listItemBot}>
    {data?.type === 'user' ? <Text style={{ color: 'black', marginRight: 10 }}></Text> : <Text style={{ color: 'red', marginRight: 10 }}></Text>}
    <View style={data?.type === 'user' ? styles.ItemValueUser : styles.ItemValueBot}>
      <Text style={styles.ItemValue}>{data?.message}</Text>
    </View>
  </View>
);

const Chatbot = () => {
  const flatListRef = useRef()
  const [q, setQ] = useState('')
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const onHandleSend = () => {
    if(q.trim() === '') return
    setIsLoading(true)
    const response = output(q)
  
    setList(prev => [...prev, {message: q, type: 'user'}])
    setTimeout(() => {
      flatListRef.current.scrollToEnd()
    },500)

    setTimeout(() => {
      setList(prev => [...prev, {message: response, type: 'bot'}])
      flatListRef.current.scrollToEnd()
      setIsLoading(false)
    }, 1500)

    setQ('')
  }

  useEffect(() => {
    setList(prev => [...prev, {message: 'Hello, how can I help you? I am Kadigma Bot', type: 'bot'}])
  }, [])

  return (
    <ImageBackground source={require('./assets/bg app.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <SafeAreaView >
            <FlatList
              ref={flatListRef}
              data={list}
              renderItem={({item}) => <Item data={item} />}
              keyExtractor={(item, x) => x}
            />
          </SafeAreaView>
        </View>
        {isLoading ? <Text style={{ textAlign: 'center', padding: 1 }}>Loading...</Text> : null}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type message here..."
            onChangeText={(text) => setQ(text)}
            value={q}
            autoCapitalize="none"
          />
          <Pressable style={styles.sendButton} onPress={onHandleSend}>
            <Text style={{ color: '#F5F5F5'}}>{isLoading ? '...' : 'Send'}</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  )
}

export default Chatbot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  listContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  listItemUser: {
    paddingLeft: 15,
    paddingRight: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  ItemValueUser: {
    backgroundColor: 'silver',
    color: 'white',
    padding: 10,
    borderRadius: 20,
    maxWidth: '60%'
  },  
  listItemBot: {
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  ItemValueBot: {
    backgroundColor: 'red',
    color: 'white',
    padding: 10,
    borderRadius: 20,
    maxWidth: '60%'
  },
  ItemValue: {
    color: 'white'
  },
  formContainer: {
    borderTopWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: 4,
    padding: 15,
    borderColor: '#ccc',
    backgroundColor: 'white'
  },  
  input: {
    flex: 1,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 9,
    height: '100%',
    backgroundColor : 'white'
  },
  sendButton: {
    backgroundColor: 'red',
    color: 'red',
    padding: 16,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  }
});
