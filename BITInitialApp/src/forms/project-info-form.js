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

class ProjectInfoForm extends Component{
  state = {
    name:'',
    objective:'',
    product:'',
    description:''
  }

  changeName = (name) => {
    this.setState({
      name
    });
  }

  changeObjective = (objective) => {
    this.setState({
      objective
    });
  }

  changeProduct = (product) => {
    this.setState({
      product
    });
  }

  changeDescription = (description) => {
    this.setState({
      description
    });
  }

  handlePress = () => {
    console.log(this.state);
    this.props.navigation.navigate('Phase1');
  }

  render() {
   	return(
   		<ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>La siguiente información nos dará un panorama general de tu proyecto</Text>
  	 		<TextInput 
          placeholder="Nombre del Proyecto/Empresa"
          autoCapitalize="sentences"
          autoCorrect={false}
          style={styles.input}
          //placeholderTextColor="white"
          underlineColorAndroid="transparent"
          returnKeyType="next"
          value={this.state.name}
          onChangeText={this.changeName}
          onSubmitEditing={() => this.objectiveInput.focus()}
  			/>
        <TextInput 
          ref={(input) => this.objectiveInput = input}
          placeholder="Misión/Objetivo del Proyecto/Empresa"
          autoCapitalize="sentences"
          autoCorrect={false}
          style={[styles.input, styles.textArea]}
          //placeholderTextColor="white"
          underlineColorAndroid="transparent"
          multiline={true}
          returnKeyType="next"
          value={this.state.objective}
          onChangeText={this.changeObjective}
          onSubmitEditing={() => this.productInput.focus()}
        />
        <TextInput 
          ref={(input) => this.productInput = input}
          placeholder="Producto o Servicio"
          autoCapitalize="sentences"
          autoCorrect={false}
          style={styles.input}
          //placeholderTextColor="white"
          underlineColorAndroid="transparent"
          returnKeyType="next"
          value={this.state.product}
          onChangeText={this.changeProduct}
          onSubmitEditing={() => this.descriptionInput.focus()}
        />
        <TextInput 
          ref={(input) => this.descriptionInput = input}
          placeholder="Descripción del Producto o Servicio"
          autoCapitalize="sentences"
          multiline={true}
          autoCorrect={false}
          style={[styles.input, styles.textArea]}
          //placeholderTextColor="white"
          underlineColorAndroid="transparent"
          returnKeyType="done"
          value={this.state.description}
          onChangeText={this.changeDescription}
          //onSubmitEditing={this.handlePress}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={this.handlePress}
         >
          <Text style={styles.btnText}>Continuar</Text>
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
    //backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 15,
    color: '#2c3e50',
    borderRadius: 10,
    backgroundColor: '#ecf0f1'
    //color:'white'
	},
  textArea:{
    height:70
  },
  text:{
    fontSize:18,
    marginVertical:10,
    textAlign:'justify',
    marginBottom: 25,
    color: '#2c3e50'
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
    marginTop: 25,
    backgroundColor: '#2980b9'
  },
  btnText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:23
  }
});

export default ProjectInfoForm;