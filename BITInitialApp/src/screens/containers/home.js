//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, {Component} from 'react';
//import {StatusBar} from 'react-native';

import HomeLayout from '../components/home-layout';
import Header from '../../sections/components/header';

class Home extends Component{
  /*Activate to Change StatusBar style and background color on specific screens
  componentDidMount() {
    this.focus = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor('#5c9fd6');
    });
  }

  componentWillUnmount() {
    this.focus.remove();
  }
  */
  static navigationOptions = () => {
    return {
      header: <Header sectionTitle="BIT Consulting"/>
    }
  };

	handlePress = () => {
    //console.log(this.props.navigation);
    this.props.navigation.navigate('ProjectInfo');
	};

	render() {
		return (
			<HomeLayout
				handlePress={this.handlePress}
			/>
		);
	}
}

export default Home;