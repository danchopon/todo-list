import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { tasksFetch } from '../actions';
import TaskItem from './TaskItem';

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

  renderRow(task) {
    return <TaskItem task={task} />;
  }

  render() {
    return (
      <ListView
        style={{flex: 1}}
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const mapStateToProps = state => {
  const tasks = _.map(state.tasks, (val, id) => {
    return { ...val, id };
  });

  return { tasks };
};

export default connect(mapStateToProps, { tasksFetch })(TodoList);