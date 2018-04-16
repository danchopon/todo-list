import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import TaskItem from './TaskItem';
import { tasksFetch } from '../actions';

class TodoList extends Component {

  componentWillMount() {
    this.props.tasksFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ tasks }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(tasks);
  }

  renderRow(todo) {
    return <TodoItem todo={todo} />;
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'cyan'}}>
        <Text>dfsdf</Text>
      </View>
    )
  }
}

// const mapStateToProps = state => {
//   const todos = _.map(state.todos, (val, id) => {
//     return { ...val, id };
//   });
//
//   return { todos };
// };

export default connect(null, { tasksFetch })(TodoList);