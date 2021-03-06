//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';
import {
	ScrollView,
	StyleSheet
} from 'react-native';

function GeneralBlueLayout(props) {
	//console.log("GeneralntactLayout", props);
	return(
		<ScrollView style={styles.container}>
			{props.children}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container:{
		flex:1,
    backgroundColor:'#0A73ED'
    //backgroundColor:'#5c9fd6'
	}
});

export default GeneralBlueLayout;