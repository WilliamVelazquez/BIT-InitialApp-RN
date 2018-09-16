//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';
import {
  Button,
  Text,
	View,
	StyleSheet 
} from 'react-native';

function HomeLayout(props) {
	return(
		<View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>
          Analizaremos la factibilidad de tu nuevo proyecto 
          mediante una serie de preguntas con base en estrategias financieras 
          definidas por expertos que te ayudarán a conocer como mejorar 
          tus probabilidades de éxito!
        </Text>
        <Button 
          title="Comenzar!"
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
    paddingVertical:10
  },
  text:{
    //padding:15,
    fontSize:22,
    marginVertical:10,
    textAlign:'justify',
    marginBottom: 25
  }
});

export default HomeLayout;