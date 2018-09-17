//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, {Component} from 'react';
import {
	Text,
	View,
  CheckBox,
  TextInput,
  TouchableOpacity,
  ScrollView,
	StyleSheet
} from 'react-native';

class ContactForm extends Component{
  state = {
    name:'',
    email:'',
    phone:'',
    comments:'',
    askForACall: false
  }

  changeName = (name) => {
    this.setState({
      name
    });
  }

  changeEmail = (email) => {
    this.setState({
      email
    });
  }

  changePhone = (phone) => {
    this.setState({
      phone
    });
  }

  handleAskForACall = () =>{
    this.setState({
      askForACall: !this.state.askForACall
    });
  }

  changeComments = (comments) => {
    this.setState({
      comments
    });
  }

  handlePress = () => {
    console.log(this.state);
    this.props.navigation.navigate('Main');
  }

  render() {
   	return(
   		<ScrollView contentContainerStyle={styles.container}>
  	 		<TextInput 
          placeholder="Ingresa tu nombre o el de tu empresa"
          autoCorrect={false}
          autoCapitalize="words"
          style={styles.input}
          placeholderTextColor="white"
          //placeholderTextColor="rgba(255,255,255,0.7)"
          underlineColorAndroid="transparent"
          //onSubmit={props.handleSubmit}
          //onChangeText={props.handleChangeText}
          returnKeyType="next"
          value={this.state.name}
          //onChangeText={(name)=> this.changeName(name)}
          onChangeText={this.changeName}
          onSubmitEditing={() => this.emailInput.focus()}
  			/>
        <TextInput 
          ref={(input) => this.emailInput = input}
          placeholder="Ingresa tu correo electrónico"
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.input}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          returnKeyType="next"
          keyboardType="email-address"
          //onSubmit={props.handleSubmit}
          //onChangeText={props.handleChangeText}
          value={this.state.email}
          //onChangeText={(email)=> this.changeEmail(email)}
          onChangeText={this.changeEmail}
          onSubmitEditing={() => this.phoneInput.focus()}
        />
        <TextInput 
          ref={(input) => this.phoneInput = input}
          placeholder="Ingresa tu número telefónico"
          autoCorrect={false}
          style={styles.input}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          returnKeyType="next"
          keyboardType="numeric"
          //onSubmit={props.handleSubmit}
          //onChangeText={props.handleChangeText}
          value={this.state.phone}
          //onChangeText={(phone)=> this.changePhone(phone)}
          onChangeText={this.changePhone}
          onSubmitEditing={() => this.commentsInput.focus()}
        />
        <TextInput 
          ref={(input) => this.commentsInput = input}
          placeholder="Ingresa alguna observación o comentario *(Opcional)"
          multiline={true}
          autoCorrect={false}
          autoCapitalize="sentences"
          style={[styles.input, styles.textArea]}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          returnKeyType="done"
          //onSubmit={props.handleSubmit}
          //onChangeText={props.handleChangeText}
          value={this.state.comments}
          //onChangeText={(comments)=> this.changeComments(comments)}
          onChangeText={this.changeComments}
          onSubmitEditing={this.handlePress}
        />

        <View style={styles.rowContainer}>
          <Text style={styles.text}>¿Deseas que te llamemos?</Text>
          <CheckBox 
            //checkedColor="white"
            //containerStyle={styles.check}
            value={this.state.askForACall}
            onValueChange={this.handleAskForACall}
          />
        </View>

  			<Text style={styles.text}>
  				También puedes llamarnos al teléfono:
  			</Text>
  			<View>
  				<Text style={[styles.text, styles.phone]}>
  					044-55-1850-2736
  				</Text>
  			</View>

        <TouchableOpacity
          style={styles.btn}
          //onPress={() => navigate('HomeScreen')}
          onPress={this.handlePress}
         >
          <Text style={styles.btnText}>Enviar</Text>
        </TouchableOpacity>

   		</ScrollView>
   	)
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    //alignItems:'center',
    paddingHorizontal:20,
    paddingVertical:20
  },
  rowContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
	input:{
		padding:15,
		fontSize:15,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 15,
    color:'white'
		//borderWidth:1,
    //borderColor:'#5c9fd6'
		//borderColor:'#eaeaea'
	},
  textArea:{
    height:70
  },
  text:{
    fontSize:18,
    marginVertical:10,
    textAlign:'justify',
    marginBottom: 10,
    color: 'white'
  },
  phone:{
    fontSize:22,
    textAlign:'center',
    fontWeight:'bold'
  },
  check:{
    color:'white',
    //alignItems:'flex-end'
    //justifyContent:'flex-end'
  },
  btn:{
    flex:1,
    borderRadius: 4,
    alignItems:'center',
    padding: 10,
    marginHorizontal:5,
    backgroundColor: '#2980b9'
  },
  btnText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:25
  }
});

export default ContactForm;