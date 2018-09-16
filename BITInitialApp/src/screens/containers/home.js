//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, {Component} from 'react';

import HomeLayout from '../components/home-layout';
import Header from '../../sections/components/header';

class Home extends Component{
	handlePress = () => {
    //console.log(this.props.navigation);
    this.props.navigation.navigate('Phase1');
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