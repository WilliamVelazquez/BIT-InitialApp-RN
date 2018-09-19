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

class InitialInvestmentForm extends Component{
  state = {
    supplies:0,
    rent:0,
    services:0,
    permits:0,
    paysheet:0
  }

  changeSupplies = (supplies) => {
    this.setState({
      supplies:parseFloat(supplies)
    });
  }

  changeRent = (rent) => {
    this.setState({
      rent:parseFloat(rent)
    });
  }

  changeServices = (services) => {
    this.setState({
      services:parseFloat(services)
    });
  }

  changePermits = (permits) => {
    this.setState({
      permits:parseFloat(permits)
    });
  }

  changePaysheet = (paysheet) => {
    this.setState({
      paysheet:parseFloat(paysheet)
    });
  }

  handlePress = () => {
    console.log(this.state);
    this.props.navigation.navigate('Phase1');
  }

  render() {
   	return(
   		<ScrollView contentContainerStyle={styles.container}>
        <View style={styles.rowContainer}>
          <Text style={styles.moneySymbol}>$ </Text>
    	 		<TextInput 
            placeholder="Insumos"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            //placeholderTextColor="white"
            underlineColorAndroid="transparent"
            returnKeyType="next"
            keyboardType="numeric"
            value={this.state.supplies}
            onChangeText={this.changeSupplies}
            onSubmitEditing={() => this.rentInput.focus()}
    			/>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.moneySymbol}>$ </Text>
          <TextInput 
            ref={(input) => this.rentInput = input}
            placeholder="Renta + Equipo para operar"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            underlineColorAndroid="transparent"
            returnKeyType="next"
            keyboardType="numeric"
            value={this.state.rent}
            onChangeText={this.changeRent}
            onSubmitEditing={() => this.servicesInput.focus()}
          />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.moneySymbol}>$ </Text>
          <TextInput 
            ref={(input) => this.servicesInput = input}
            placeholder="Servicios (Agua, luz, etc.)"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            underlineColorAndroid="transparent"
            returnKeyType="next"
            keyboardType="numeric"
            value={this.state.services}
            onChangeText={this.changeServices}
            onSubmitEditing={() => this.permitsInput.focus()}
          />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.moneySymbol}>$ </Text>
          <TextInput 
            ref={(input) => this.permitsInput = input}
            placeholder="Permisos legales"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            underlineColorAndroid="transparent"
            returnKeyType="next"
            keyboardType="numeric"
            value={this.state.permits}
            onChangeText={this.changePermits}
            onSubmitEditing={() => this.paysheetInput.focus()}
          />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.moneySymbol}>$ </Text>
          <TextInput 
            ref={(input) => this.paysheetInput = input}
            placeholder="Nómina"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            underlineColorAndroid="transparent"
            returnKeyType="done"
            keyboardType="numeric"
            value={this.state.paysheet}
            onChangeText={this.changePaysheet}
            //onSubmitEditing={this.handlePress}
          />
        </View>

        {/*<Text style={styles.text}>$ 0 000 000.00</Text>*/}
        <Text style={styles.text}>
          {`$ ${(this.state.supplies+this.state.rent+this.state.services+this.state.permits+this.state.paysheet).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`}
        </Text>
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
    flex: 1,
		padding:15,
		fontSize:25,
    //backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 14,
    color: '#2c3e50',
    borderRadius: 10,
    backgroundColor: '#ecf0f1',
    //width: 50
    //color:'white'
	},
  moneySymbol:{
    fontSize:24,
    fontWeight:'bold',
    //marginRight:2,
    color: '#2c3e50',
    marginBottom: 14,
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    marginVertical:5,
    textAlign:'center',
    marginBottom: 10,
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
    marginTop: 15,
    backgroundColor: '#029343'
    //backgroundColor: '#2980b9'
  },
  btnText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:23
  }
});

export default InitialInvestmentForm;