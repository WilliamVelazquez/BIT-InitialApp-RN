//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';
import {
  Button,
  Text,
	View,
  StatusBar,
	StyleSheet
} from 'react-native';

import List from '../../sections/components/list';

function HomeLayout(props) {
	return(
		<View style={styles.container}>
      <StatusBar
       barStyle="light-content"
       backgroundColor="#0A73ED"
       //backgroundColor="#5c9fd6"
      />
      <View style={styles.content}>
        <Text style={styles.text}>
          Analizaremos la factibilidad financiera de tu negocio a través
          de indicadores que evaluarán si puede ponerse en marcha y mantenerse
          en funcionamiento.
        </Text>
        <Text style={[styles.text, styles.marginBottom]}>
          Al finalizar el análisis obtendrás:
        </Text>
        <List 
          items={[
            {key:'Valor Presente Neto'},
            {key:'Índice de Valor Presente'},
            {key:'Tasa Interna de Retorno'},
            {key:'Periodo de Recuperación de la Inversión'}
          ]} />
        <Button 
          title="Comenzar"
          color="#029343"
          //color="#2ecc71"
          //color="#57D843"
          onPress={props.handlePress} 
          accessibilityLabel="Comenzar el proceso"
        />
      </View>
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		flex:1
	},
  content:{
    flex:1,
    justifyContent:'center',
    //alignItems:'center',
    paddingHorizontal:20,
    paddingVertical:40
  },
  text:{
    //padding:15,
    fontSize:21,
    marginVertical:10,
    textAlign:'justify',
    marginBottom: 5
  },
  marginBottom:{
    marginBottom: 45
  }
});

export default HomeLayout;