import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, CheckBox } from 'react-native';

class TaskItem extends Component {
  constructor() {
    super();

    this.state={check: false}
  }

  checkBoxTest(){
    this.setState({
      check:!this.state.check
    })
  }

  render() {
    const { title } = this.props.task;

    return (
      <TouchableOpacity onPress={() => this.checkBoxTest()} style={styles.todoView}>
        <CheckBox value={this.state.check} onChange={() => this.checkBoxTest()} />
        <Text style={ this.state.check ? styles.todoTextToggled : styles.todoText }>
          { title }
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  todoView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  todoText: {
    fontSize: 21,
  },
  todoTextToggled: {
    fontSize: 21,
    textDecorationLine: 'line-through'
  }
})

export default TaskItem;