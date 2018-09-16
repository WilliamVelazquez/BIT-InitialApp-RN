//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
//import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  reduxifyNavigator
} from 'react-navigation-redux-helpers';

import AppNavigator from './app-navigator';

//Initialize with the key specified at the Middleware ('root')
const ReduxifyApp = reduxifyNavigator(AppNavigator, 'root');

class AppNavigatorWithState extends ReduxifyApp {

}

function mapStateToProps(state) {
  return {
    state: state.navigation//use state.navigation as we specified at the combine of reducers(index file)
  }
}

export default connect(mapStateToProps)(AppNavigatorWithState);