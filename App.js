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
 import React, {useState} from 'react'; //useState 인자로 초기값 받음.
 
 const App = () => {

//todos: {id: Number, textValue: string, checked: boolean }
  const [todos, setTodos] = useState([]); //목록 현재 상태, todos업데이트 하는 함수

  const addTodo = text => { //입력한 텍스트로 새로운 todo객체 형성
    setTodos([
      ...todos, //이전꺼에 새로운 목록 추가!
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };

  const onRemove = id => e => { //setTodos로 상태 업데이트
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = id => e => { //id받아와 checked속성값 반대로 변경해줌
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello Todolist</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
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