/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 
 import {
   SafeAreaView, //SafeAreaView는 Device의 안전한 영역을 구별하는 Component이다 노치 침범 방지..
   StyleSheet,
   TextInput,
   View,
   Text,
   ScrollView,
 } from 'react-native';
 import TodoInsert from './components/TodoInsert';
 import TodoList from './components/TodoList';
 import React, {useState} from 'react';
 
 const App = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = text => { //입력한 텍스트로 새로운 todo객체 형성
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello Todolist</Text>
      <View style={styles.card}>
        <TodoInsert />
        <TodoList />
      </View>
    </SafeAreaView>
  );
};
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: 'pink',
   },
   appTitle: {
     color: 'black',
     fontSize: 36,
     marginTop: 30,
     marginBottom: 30,
     fontWeight: '300',
     textAlign: 'center',
     backgroundColor: 'pink',
   },
   card: {
     backgroundColor: 'white',
     flex: 1,
     borderTopLeftRadius: 10, // 둥글게 처리
     borderTopRightRadius: 10, 
     marginLeft: 10,
     marginRight: 10,
   },
   input: {
     padding: 20,
     borderBottomColor: '#bbb',
     borderBottomWidth: 1,
     fontSize: 24,
     marginLeft: 20,
   },
 });
 
 export default App;