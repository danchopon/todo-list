import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import TaskList from './TaskList';
import AddTask from './AddTask';

class Main extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <AddTask />
        <TaskList />
      </View>
    )
  }
}

export default Main;