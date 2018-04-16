import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskUpdate, addTask } from "../actions";
import { View, TextInput, Text, TouchableOpacity } from 'react-native';


class AddTask extends Component {
  onButtonPress() {
    const { title } = this.props;

    this.props.addTask({ title });
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'yellow'}}>
        <TextInput
          placeholder="your task"
          value={this.props.title}
          onChangeText={value => this.props.taskUpdate({ prop: 'title', value })}
        />
        <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
            <Text>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { title } = state.todoForm;

  return { title };
}

export default connect(mapStateToProps, {
  taskUpdate, addTask
})(AddTask);