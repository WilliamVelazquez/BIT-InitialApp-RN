//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, {Component} from 'react';
import {
  Alert,
	Text,
	View,
  Linking,
  CheckBox,
  TextInput,
  TouchableOpacity,
  ScrollView,
	StyleSheet
} from 'react-native';

import API from '../utils/api';

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

  handlePress = async () => {
    console.log("Full Contact Data-->",this.state);
    let {name, email, phone, comments} = this.state;
    //let data = { cliente:'', name, email, phone, comments};
    let data={
      clientId:'',
      companyName:name,
      email,
      phoneNumber:phone,
      commentary:comments || "Sin observaciones"
    };
    console.log("Contact Data-->",data);

    const saveContact= await API.saveContactInfo(data);
    console.log("saveContact-->",saveContact);
    Alert.alert(
      'Datos enviados!',
      '',//'My Alert Msg',
      [
        //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        //{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => this.props.navigation.navigate('Main')},//console.log('OK Pressed') //{}
      ],
      { onDismiss: () => this.props.navigation.navigate('Main') }//{}
      //{ cancelable: false }
    );
  }

  callNumber = () =>{
    //let phoneNumber=`tel:+52${user.number}`;
    let phoneNumber="tel:+5215518502736";

    Linking.canOpenURL(phoneNumber).then(supported => {
      if (!supported) {
        console.log('Can\'t handle phoneNumber: ' + phoneNumber);
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch(err => console.error('An error occurred', err));
  }

  render() {
   	return(
   		<ScrollView contentContainerStyle={styles.container}>
  	 		<TextInput 
          placeholder="Nombre"
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
          placeholder="Correo electrónico"
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
          placeholder="Número telefónico a 10 dígitos  *(Opcional)"
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
          placeholder="Observaciones o comentarios  *(Opcional)"
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
  				También puedes contactarnos al teléfono:
  			</Text>
  			<View>
  				<Text 
            style={[styles.text, styles.phone]}
            onPress={this.callNumber}
            //onPress={()=> this.callNumber(`tel:+91${user.number}`)}
          >
  					+52 55 1850 2736
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
		paddingHorizontal:15,
    paddingVertical: 10,
		fontSize:15,
    marginBottom: 15,
    color:'white',
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.2)'
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
    marginBottom: 5,
    color: 'white'
  },
  phone:{
    fontSize:22,
    textAlign:'center',
    fontWeight:'bold',
    marginTop: 5,
    marginBottom: 15,
    textShadowColor:'rgba(0, 0, 0, 0.75)',
    textShadowOffset:{width: -1, height: 1},
    textShadowRadius:10
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
    backgroundColor: '#F1C40F'
    //backgroundColor: '#052A4F'
    //backgroundColor: '#2980b9'
  },
  btnText:{
    //color:'#fff',
    color:'#052A4F',
    fontWeight:'bold',
    fontSize:25
  }
});

export default ContactForm;