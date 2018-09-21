//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	SafeAreaView,
  TouchableOpacity
} from 'react-native';

import Logo from '../../../assets/logo.png';

function GeneralHeader(props) {
	return(
		<SafeAreaView>
			<View style={styles.container}>
        { props.withBack &&
          <TouchableOpacity
            style={styles.backBtn}
            onPress={props.handleBack}
           >
            <Text style={styles.backText}>{`<`/*≪◀⏴≺ᐸ\u27E8*/}</Text>
          </TouchableOpacity>
        }
        <Text style={styles.title}>{props.sectionTitle}</Text>
        <View style={styles.right}>
          {props.children}
          <Image
            source={Logo}
            style={styles.logo}
          />
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles=StyleSheet.create({
  backBtn:{
    //flex:1,
    borderRadius: 100,
    alignItems:'center',
    //padding: 10,
    //marginHorizontal:5,
    backgroundColor: 'rgba(255,255,255,0.1)'
  },
  backText:{
    fontSize: 20,
    padding: 15,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain'
  },
  title:{
  	fontSize: 18,
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
  	//padding: 15
  }
});

export default GeneralHeader;