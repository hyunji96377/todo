// components/TodoInsert.js
import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';



const TodoInsert = ({onAddTodo}) => { //전달된 함수
    const [newTodoItem, setNewTodoItem] = useState(''); //새로 입력한 text상태,newTodoItem 업데이트

    const todoInputHandler = newTodo => {
        setNewTodoItem(newTodo);
      };
    
    const addTodoHandler = () => {
        onAddTodo(newTodoItem);
        setNewTodoItem('');
      };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="입력하세요"
        placeholderTextColor={'#999'}
        onChangeText={todoInputHandler}
        value={newTodoItem}
        autoCorrect={false} //자동 오타수정 해제
      />
      <View style={styles.button}>
        <Button title={'추가'} onPress={addTodoHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row', //input이랑 add버튼 가로배열
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 22,
    marginLeft: 20,
    textAlign : 'center'
  },
  button: {
    marginRight: 10,
    marginTop: 10,
    backgroundColor:'pink'
    
  },
});

export default TodoInsert;