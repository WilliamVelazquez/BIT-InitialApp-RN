//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import Home from './screens/containers/home';
import ProjectInfo from './screens/containers/project-info';
import InitialInvestment from './screens/containers/initial-investment';
import Product from './screens/containers/product';
import Phase1 from './screens/containers/phase1';
import Contact from './screens/containers/contact';
import Icon from './sections/components/icon';
import Header from './sections/components/header';

const Main = createStackNavigator(
  {
    Home,//Home:Home
    ProjectInfo,
    InitialInvestment,
    Product,
    Phase1
  },
  {
    //initialRouteName: 'Home',
    navigationOptions: {
      //header: <Header sectionTitle="BIT Consulting"/>,
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
        tabBarAccessibilityLabel:'Evaluación del Proyecto',
        tabBarIcon: <Icon icon="📊"/>,
      }
    },
    Contact: {
      screen: Contact,
      navigationOptions: {
        title: 'Contacto',
        tabBarAccessibilityLabel:'Contacto',
        tabBarIcon: <Icon icon="📋"/>,
      }
    }
  },
  {
    tabBarOptions: {
      //activeTintColor: 'black',
      pressOpacity: true,
      labelStyle:{
        fontSize:14,
        fontWeight:'bold'
      },
      inactiveTintColor:'white',
      inactiveBackgroundColor:'#0A73ED',
      activeTintColor:'white',
      activeBackgroundColor:'#052A4F'
      //activeBackgroundColor: '#F1C40F'
      //activeBackgroundColor: '#0A73ED'
      //activeBackgroundColor: '#5c9fd6'
    },
    initialRouteName: 'Main'
  }
);

export default TabNavigator;