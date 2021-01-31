import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase/app'
import rootReducer from './redux/reducers/rootReducer';
import App from './App.jsx';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'

const store = createStore(rootReducer, {});

const rrfConfig = {
  userProfile: 'users'
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={ store }>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);