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
 		<View style={styles.container}>
	 		<TextInput 
				placeholder="Ingresa tu nombre o el de tu empresa"
				autoCorrect={false}
				autoCapitalize="words"
				onSubmit={props.handleSubmit}
				onChangeText={props.handleChangeText}
				style={styles.input}
			/>
      <TextInput 
        placeholder="Ingresa tu correo electrónico"
        autoCorrect={false}
        autoCapitalize="none"
        onSubmit={props.handleSubmit}
        onChangeText={props.handleChangeText}
        style={styles.input}
      />
      <TextInput 
        placeholder="Ingresa tu número telefónico"
        autoCorrect={false}
        //autoCapitalize="words"
        onSubmit={props.handleSubmit}
        onChangeText={props.handleChangeText}
        style={styles.input}
      />
			<Text style={styles.text}>
				También puedes localizarnos en los siguientes teléfonos:
			</Text>
			<View>
				<Text style={[styles.text, styles.phone]}>
					044-55-1850-2736
				</Text>
			</View>
 		</View>
 	)
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    //alignItems:'center',
    paddingHorizontal:20,
    paddingVertical:20
  },
	input:{
		padding:15,
		fontSize:15,
		//borderWidth:1,
    //borderColor:'#5c9fd6'
		//borderColor:'#eaeaea'
	},
  text:{
    fontSize:22,
    marginVertical:10,
    textAlign:'justify',
    marginBottom: 15
  },
  phone:{
    textAlign:'center'
  }
});

export default UserContactInfoForm;