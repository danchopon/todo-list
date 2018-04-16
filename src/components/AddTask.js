import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskUpdate, addTask } from "../actions";
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';


class AddTask extends Component {
  onButtonPress() {
    const { title } = this.props;

    this.props.addTask({ title });
  }

  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 5}}>
        <TextInput
          placeholder="Enter your task here"
          value={this.props.title}
          onChangeText={value => this.props.taskUpdate({ prop: 'title', value })}
          style={styles.inputText}
        />
        <TouchableOpacity
          onPress={this.onButtonPress.bind(this)}
          style={styles.addButton}
        >
            <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addButton: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: '#01cdfe'
  },
  addText: {
    fontSize: 20,
    color: '#fff'
  },
  inputText: {
    flex:1,
    marginRight: 5,
    fontSize: 17,
    fontStyle: 'italic',
  }
})

const mapStateToProps = (state) => {
  const { title } = state.todoForm;

  return { title };
}

export default connect(mapStateToProps, {
  taskUpdate, addTask
})(AddTask);