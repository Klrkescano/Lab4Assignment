import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function TodoList({tasks}) {
  return (
    <SafeAreaView>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={[styles.task, styles.incomplete]}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  incomplete: {
    backgroundColor: '#ffffff',
  },
  taskText: {
    fontSize: 16,
  },
});
