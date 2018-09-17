//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './src/store';

//import Home from './src/screens/containers/home';
//import Contact from './src/screens/containers/contact';

import AppNavigatorWithState from './src/app-navigator-with-state'; 

type Props = {};
export default class App extends Component<Props> {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider
        store={store}
      >
        <AppNavigatorWithState />
      </Provider>
    );
  }
}
