//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';
import {
	Button,
	Text, 
	View,
	StyleSheet,
	TouchableOpacity
} from 'react-native';

function Phase1Content(props) {
	return(
		<View style={styles.container}>
			<Text style={[styles.text,styles.question]}>¿Cuentas con el cálculo de tu Inversión Inicial?</Text>
			<View style={styles.duoBtnContainer}>
				<TouchableOpacity
	        style={[styles.btn,styles.btnAccept]}
	        //onPress={() => navigate('HomeScreen')}
	        onPress={props.handleAccept}
	       >
	        <Text style={styles.btnText}>Sí</Text>
	 			</TouchableOpacity>
				<TouchableOpacity
	        style={[styles.btn,styles.btnDecline]}
	        //onPress={() => navigate('HomeScreen')}
	        onPress={props.handleDecline}
	       >
	        <Text style={styles.btnText}>No</Text>
	 			</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		//justifyContent:'center',
		//alignItems:'center',
		paddingHorizontal:20,
		paddingVertical:10
	},
	text:{
		//padding:15,
		fontSize:22,
		marginVertical:10,
		textAlign:'justify',
	},
	question:{
		fontSize:25,
		fontWeight:'bold',
		textAlign:'center'
	},
	duoBtnContainer:{
		flex:1,
		flexDirection:'row',
		alignItems:'center',
		marginVertical:25
	},
	btn:{
		flex:1,
		borderRadius: 4,
		alignItems:'center',
		padding: 10,
		marginHorizontal:5
	},
	btnAccept:{
		backgroundColor:"#57D843"
	},
	btnDecline:{
    backgroundColor:'#FF0000',
	},
	btnText:{
		color:'#fff',
		fontWeight:'bold',
		fontSize:25
	}
});

export default Phase1Content;