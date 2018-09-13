//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './src/store';

import Home from './src/screens/containers/home';
import Contact from './src/screens/containers/contact';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider
        store={store}
      >
        { true ? <Home /> : <Contact /> }
      </Provider>
    );
  }
}
