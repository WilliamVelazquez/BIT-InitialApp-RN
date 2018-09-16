//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';
import {
  Button,
  Text,
	View,
  StatusBar,
	StyleSheet
} from 'react-native';

function HomeLayout(props) {
	return(
		<View style={styles.container}>
      <StatusBar
       barStyle="light-content"
       backgroundColor="#5c9fd6"
      />
      <View style={styles.content}>
        <Text style={styles.text}>
          Analizaremos la factibilidad financiera de tu negocio a través
          de indicadores que evaluarán si puede ponerse en marcha y mantenerse
          en funcionamiento.
        </Text>
        <Text style={[styles.text, styles.marginBottom]}>
          Al finalizar el análisis obtendrás el Valor Presente Neto, 
          el Índice de Valor Presente, la Tasa Interna de Retorno
          y el Periodo de Recuperación de la Inversión de tu proyecto.
        </Text>
        <Button 
          title="Comenzar"
          color="#57D843"
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
    //paddingVertical:10
  },
  text:{
    //padding:15,
    fontSize:22,
    marginVertical:10,
    textAlign:'justify',
    marginBottom: 15
  },
  marginBottom:{
    marginBottom: 45
  }
});

export default HomeLayout;