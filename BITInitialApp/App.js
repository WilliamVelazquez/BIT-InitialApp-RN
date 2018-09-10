//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com

import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import Logo from './assets/logo.png';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          //source={require('./assets/logo.png')}
          source={Logo}
          style={{width:250, height:250}}
        />
        <Text style={styles.welcome}>Business IT</Text>
        <Text style={styles.instructions}>Consulting</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
