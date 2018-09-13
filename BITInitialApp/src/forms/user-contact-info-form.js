//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';
import {
	Text,
	View,
	TextInput,
	StyleSheet
} from 'react-native';

function UserContactInfoForm(props) {
 	return(
 		<View>
	 		<TextInput 
				placeholder="Ingresa tu nombre o el de tu empresa"
				autoCorrect={false}
				autoCapitalize="words"
				onSubmit={props.handleSubmit}
				onChangeText={props.handleChangeText}
				style={styles.input}
			/>
			<Text>
				También puedes localizarnos en los siguientes teléfonos:
			</Text>
			<View>
				<Text>
					044-55-1850-2736
				</Text>
				<Text>
					XXX-XX-XXXX-XXXX
				</Text>
			</View>
 		</View>
 	)
}

const styles = StyleSheet.create({
	input:{
		padding:15,
		fontSize:15,
		borderWidth:1,
		borderColor:'#eaeaea'
	}
});

export default UserContactInfoForm;