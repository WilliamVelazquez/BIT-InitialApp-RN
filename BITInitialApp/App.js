//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import Loader from './src/sections/components/loader';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider
        store={store}
      >
        <Home>
          <Header sectionTitle="Business IT" />
            {/*<Text style={styles.text}>Business IT</Text>
          </Header>*/}
        </Home>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center'
  }
});