//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, {Component} from 'react';
import {
	TextInput,
	ScrollView,
	StyleSheet
} from 'react-native';

class Contact extends Component{
	state = {
		name:''
	}

	handleSubmit = () =>{
		console.log("Name----->",this.state.name);
	}
	handleChangeText = (name) => {
		this.setState({
			name
		});
	}
	render() {
		return (
			<ScrollView>
				<TextInput 
					placeholder="Ingresa tu nombre o el de tu empresa"
					autoCorrect={false}
					autoCapitalize="words"
					onSubmit={this.handleSubmit}
					onChangeText={this.handleChangeText}
					style={styles.input}
				/>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	input:{
		padding:15,
		fontSize:15,
		borderWidth:1,
		borderColor:'#eaeaea'
	}
});

export default Contact;