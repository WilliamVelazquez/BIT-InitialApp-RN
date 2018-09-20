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

import Loader from '../sections/components/loader';
import IndicatorsList from '../sections/components/indicators-list';
//import Separator from '../sections/components/vertical-separator';
import ResultItem from '../sections/components/result-item';

function FinancialIndicatorsForm (props){
  console.log(this.props);
 	return(
    <View style={styles.container}>
      {
        (!props.viable) ?
        <Loader />
        :
     		<ScrollView>

          <ResultItem viable={true}/>

          <IndicatorsList 
            indicators={[
            {
              key:'VPN',
              indicator:'Valor Presente Neto',
              value:'$ 50,000.00',
              description:'Efectivo que se genera del proyecto (dinero líquido)'
            },
            {
              key:'TIR',
              indicator:'Tasa Interna de Retorno',
              value:'16 %',
              description:'Buena en caso de ser mayor al % de utilidad esperada'
            },
            {
              key:'IVP',
              indicator:'Índice de Valor Presente',
              value:'20 %',
              description:'El proyecto da esta rentabilidad'
            },
            {
              key:'PRI',
              indicator:'Periodo de Recuperación de Inversión',
              value:'7 meses',
              description:'Se recuperará en un plazo considerable'
            }
          ]}
          />

          <TouchableOpacity
            style={styles.btn}
            onPress={props.handlePress}
           >
            <Text style={styles.btnText}>Contáctanos</Text>
          </TouchableOpacity>
     		</ScrollView>
      }
    </View>
 	)
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    //alignItems:'center',
    //paddingHorizontal:20,
    //paddingVertical:20,
    backgroundColor: 'white'
  },
  btn:{
    flex:1,
    borderRadius: 4,
    alignItems:'center',
    padding: 10,
    marginHorizontal:5,
    marginVertical: 10,
    //marginTop: 15,
    backgroundColor: '#029343'
    //backgroundColor: '#2980b9'
  },
  btnText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:23
  }
});

export default FinancialIndicatorsForm;