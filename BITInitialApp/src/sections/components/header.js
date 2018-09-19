//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	SafeAreaView,
} from 'react-native';

import Logo from '../../../assets/logo.png';

function Header(props) {
	return(
		<SafeAreaView>
			<View style={styles.container}>
				<Image
	        source={Logo}
	        style={styles.logo}
	      />
	      <Text style={styles.title}>{props.sectionTitle}</Text>
				<View style={styles.right}>
					{props.children}
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles=StyleSheet.create({
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain'
  },
  title:{
  	fontSize: 20,
    padding: 15,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  container:{
  	padding:10,
  	flexDirection: 'row',
    backgroundColor: '#0A73ED'
  	//backgroundColor: '#5c9fd6'
  },
  right:{
  	flex:1,
  	flexDirection: 'row',
  	justifyContent: 'flex-end',
  	padding: 15
  }
});

export default Header;