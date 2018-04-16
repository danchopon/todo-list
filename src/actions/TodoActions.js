import firebase from 'firebase';
import {
  TASKS_FETCH_SUCCESS,
  TASK_UPDATE,
  ADD_TASK
} from './types';

export const taskUpdate = ({ prop, value }) => {
  return {
    type: TASK_UPDATE,
    payload: { prop, value }
  }
};

export const addTask = ({title}) => {
  return (dispatch) => {
    var ref = firebase.database().ref();
    var tasksRef = ref.child('tasks');
    var taskRef = tasksRef.push({title})
      .then(() => {
        dispatch({ type: ADD_TASK });
      })
  }
};

export const tasksFetch = () => {
  return (dispatch) => {

    // var ref = firebase.database().ref();
    // var tasksRef = ref.child('/tasks');
    // tasksRef.on('value', snapshot => {
    //   dispatch({ type: TASKS_FETCH_SUCCESS, payload: snapshot.val() })
    // })

    firebase.database().ref('/tasks').on('value', snapshot => {
      dispatch({ type: TASKS_FETCH_SUCCESS, payload: snapshot.val() })
    })

    // var ref = firebase.database().ref('/tasks');
    // ref.on('value', snapshot => {
    //   dispatch({ type: TASKS_FETCH_SUCCESS, payload: snapshot.val() });
    // });

  };
};



// export const toggleTodo = () => {
//   return {
//     type: TOGGLE_TASK,
//     payload: ''
//   }
// }