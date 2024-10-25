import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, TextInput, View} from 'react-native';

export default function ToDoForm({addTask}) {
  const [tasktText, settasktText] = useState('');

  const handleAddTask = () => {
    if (tasktText.trim()) {
      addTask(tasktText);
      settasktText('');
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new Task..."
          onChangeText={text => settasktText(text)}
          value={tasktText}
        />
        <Button title="Add" onPress={handleAddTask} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});
