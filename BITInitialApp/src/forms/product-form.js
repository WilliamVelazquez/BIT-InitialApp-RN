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

class ProductForm extends Component{
  state = {
    cost:0,
    price:0,
    monthlyExpectedSales:0,
    monthlyExpectedSalesGrowthRate:0,
    profitRate:0
  }

  changeCost = (cost) => {
    this.setState({
      cost:parseFloat(cost)
    });
  }

  changePrice = (price) => {
    this.setState({
      price:parseFloat(price)
    });
  }

  changeMonthlyExpectedSales = (monthlyExpectedSales) => {
    this.setState({
      monthlyExpectedSales:parseFloat(monthlyExpectedSales)
    });
  }

  changeMonthlyExpectedSalesGrowthRate = (monthlyExpectedSalesGrowthRate) => {
    this.setState({
      monthlyExpectedSalesGrowthRate:parseFloat(monthlyExpectedSalesGrowthRate)
    });
  }

  changeProfitRate = (profitRate) => {
    this.setState({
      profitRate:parseFloat(profitRate)
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
            placeholder="Costo del producto/servicio"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            //placeholderTextColor="white"
            underlineColorAndroid="transparent"
            returnKeyType="next"
            keyboardType="numeric"
            value={this.state.cost}
            onChangeText={this.changeCost}
            onSubmitEditing={() => this.priceInput.focus()}
    			/>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.moneySymbol}>$ </Text>
          <TextInput 
            ref={(input) => this.priceInput = input}
            placeholder="Precio del producto/servicio"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            underlineColorAndroid="transparent"
            returnKeyType="next"
            keyboardType="numeric"
            value={this.state.price}
            onChangeText={this.changePrice}
            onSubmitEditing={() => this.monthlyExpectedSalesInput.focus()}
          />
        </View>
        <Text style={styles.text}>
          Valores esperados
        </Text>
        <View style={styles.rowContainer}>
          <Text style={styles.moneySymbol}>$ </Text>
          <TextInput 
            ref={(input) => this.monthlyExpectedSalesInput = input}
            placeholder="Ventas mensuales"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            underlineColorAndroid="transparent"
            returnKeyType="next"
            keyboardType="numeric"
            value={this.state.monthlyExpectedSales}
            onChangeText={this.changeMonthlyExpectedSales}
            onSubmitEditing={() => this.monthlyExpectedSalesGrowthRateInput.focus()}
          />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.moneySymbol}>% </Text>
          <TextInput 
            ref={(input) => this.monthlyExpectedSalesGrowthRateInput = input}
            placeholder="Tasa de crecimiento mensual"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            underlineColorAndroid="transparent"
            returnKeyType="next"
            keyboardType="numeric"
            value={this.state.monthlyExpectedSalesGrowthRate}
            onChangeText={this.changeMonthlyExpectedSalesGrowthRate}
            onSubmitEditing={() => this.profitRateInput.focus()}
          />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.moneySymbol}>% </Text>
          <TextInput 
            ref={(input) => this.profitRateInput = input}
            placeholder="Porcentaje de ganancias"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            underlineColorAndroid="transparent"
            returnKeyType="done"
            keyboardType="numeric"
            value={this.state.profitRate}
            onChangeText={this.changeProfitRate}
            //onSubmitEditing={this.handlePress}
          />
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={this.handlePress}
         >
          <Text style={styles.btnText}>Comenzar análisis</Text>
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
		fontSize:23,
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

export default ProductForm;