import { useEffect, useRef, useState } from "react";
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { output } from "./utils/text-extract";

const Item = ({ data }) => (
  <View style={data?.type === 'user' ? styles.listItemUser : styles.listItemBot}>
    {data?.type === 'user' ? <Text style={{ color: 'blue', marginRight: 10 }}>Me</Text> : <Text style={{ color: 'red', marginRight: 10 }}>Bot</Text>}
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
    setList(prev => [...prev, {message: 'Hello, how can i help you! Im Chatbot', type: 'bot'}])
  }, [])

  return (
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
          <Text style={{ color: 'white'}}>{isLoading ? '...' : 'Send'}</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Chatbot;


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  listItemUser: {
    paddingLeft: 10,
    paddingRight: 10,
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  ItemValueUser: {
    backgroundColor: 'blue',
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
    padding: 10,
    borderColor: '#ccc',
    backgroundColor: 'silver'
  },  
  input: {
    flex: 1,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: '100%',
    backgroundColor : 'white'
  },
  sendButton: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  }
  
});