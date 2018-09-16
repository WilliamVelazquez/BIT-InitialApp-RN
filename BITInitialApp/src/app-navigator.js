//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import Home from './screens/containers/home';
import Phase1 from './screens/containers/phase1';
import Contact from './screens/containers/contact';
import Icon from './sections/components/icon';
import Header from './sections/components/header';

const Main = createStackNavigator(
  {
    Home,//Home:Home
    Phase1
    //Category
  },
  {
    //initialRouteName: 'Home',
    navigationOptions: {
      header: <Header sectionTitle="BIT Consulting"/>,
      gesturesEnabled: true
    },
    mode: 'modal',
    cardStyle: {
      backgroundColor: 'white'
    }
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Evaluación del Proyecto',
        tabBarIcon: <Icon icon="📊"/>,
      }
    },
    Contact: {
      screen: Contact,
      navigationOptions: {
        title: 'Contacto',
        tabBarIcon: <Icon icon="📋"/>,
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#299EAF'
      //activeBackgroundColor: '#65A721'
    },
    initialRouteName: 'Main'
  }
);

export default TabNavigator;