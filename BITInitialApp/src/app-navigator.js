//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from 'react-navigation';
import Home from './screens/containers/home';
import Movie from './screens/containers/movie';
import Category from './screens/containers/category';
import About from './screens/containers/about';
import Profile from './screens/containers/profile';
import Lucky from './screens/containers/lucky';
import Login from './screens/containers/login';
import Loading from './screens/containers/loading';
import Icon from './sections/components/icon';
import Header from './sections/components/header';
import DrawerComponent from './sections/components/drawer';

const Main = createStackNavigator(
  {
    Home,//Home:Home
    Movie,//Movie:Movie
    Category
  },
  {
    //initialRouteName: 'Home',
    navigationOptions: {
      header: Header,
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
    Home: {
      screen: Main,
      navigationOptions: {
        title: 'Inicio',
        tabBarIcon: <Icon icon="🏡"/>,
      }
    },
    About: {
      screen: About,
      // navigationOptions: {
      //   tabBarIcon: <Icon icon="🤓"/>,
      // }
    },
    Lucky: {
      screen: Lucky,
      // navigationOptions: {
      //   tabBarIcon: <Icon icon="⭐"/>,
      // }
    },
    Profile: {
      screen: Profile,
      // navigationOptions: {
      //   tabBarIcon: <Icon icon="😎"/>,
      // }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#65A721'
    }
  }
);

const WithModal = createStackNavigator(
  {
    Main: {
      screen: TabNavigator
    }
    // Category
    // Movie//Movie: Movie
  },
  {
    mode: 'card',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'white'
    },
    navigationOptions: {
      gesturesEnabled: true
    }
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Main: {
      screen: WithModal,
      navigationOptions: {
        title: 'Inicio',
        drawerIcon: <Icon icon="🏡"/>,
      }
    },
    Sobre: {
      screen: About
    },
    Suerte: {
      screen: Lucky
    }
  },
  {
    drawerWidth: 200,
    drawerBackgroundColor: '#f6f6f6',
    contentComponent: DrawerComponent,
    contentOptions: {
      activeBackgroundColor: '#7ABA2F',
      activeTintColor: 'white',
      inactiveTintColor: '#828282',
      inactiveBackgroundColor: 'white',
      itemStyle: {
        borderBottomWidth: .5,
        borderBottomColor: 'rgba(0,0,0,.5)'
      },
      labelStyle: {
        marginHorizontal: 0
      },
      iconContainerStyle: {
        marginHorizontal: 5,
      }
    }
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    Loading: Loading,
    Login: Login,
    App: DrawerNavigator
  },
  {
    initialRouteName: 'Loading'
  }
);

export default SwitchNavigator;