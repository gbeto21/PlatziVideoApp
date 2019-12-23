/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Loading from './src/sections/components/loading';
import AppLayout from './src/app';
// const App: () => React$Node = () => {

class App extends Component<Props> {
  state = {
    // suggestionList: [],
    // categoryList: [],
  };

  render() {
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <AppLayout />
      </PersistGate>
    </Provider>;
  }
}

export default App;
