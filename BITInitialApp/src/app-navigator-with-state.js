//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
//import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  reduxifyNavigator
} from 'react-navigation-redux-helpers';
import {
  BackHandler
} from 'react-native';
import {
  NavigationActions
} from 'react-navigation';

import AppNavigator from './app-navigator';

//Initialize with the key specified at the Middleware ('root')
const ReduxifyApp = reduxifyNavigator(AppNavigator, 'root');

class AppNavigatorWithState extends ReduxifyApp {
  
  //Using Back Button of Android Phones
  onBackPress = () => {
    this.props.dispatch(
      NavigationActions.back({
        key: null//We can change null for an specific Screen to navigate
      })
    )
    return true; //If not the app will close
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress');
  }
}

function mapStateToProps(state) {
  return {
    state: state.navigation//use state.navigation as we specified at the combine of reducers(index file)
  }
}

export default connect(mapStateToProps)(AppNavigatorWithState);