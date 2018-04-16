import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import Main from './components/Main';

export default class App extends React.Component {
  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyBd-AGJ_iRKcooNrfazWOjFx1urzUZc4mg',
      authDomain: 'todolist-3cd42.firebaseapp.com',
      databaseURL: 'https://todolist-3cd42.firebaseio.com',
      projectId: 'todolist-3cd42',
      storageBucket: 'todolist-3cd42.appspot.com',
      messagingSenderId: '555671986407'
    };
    firebase.initializeApp(config);
  }

  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Main/>
        </View>
      </Provider>
    );
  }
}