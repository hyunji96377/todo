// components/TodoInsert.js
import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const TodoInsert = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="입력하세요"
        placeholderTextColor={'#999'}
        autoCorrect={false} //자동 오타수정 해제
      />
      <View style={styles.button}>
        <Button title={'추가'} />
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