//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

function ResultItem(props){
  return(
    <View style={styles.bar}>
      <View style={styles.indicatorValueBox}>
        <Text style={[styles.text,styles.indicatorValue,(props.viable)?styles.green:styles.red]}>{props.viable?"Viable":"No viable"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar:{
    justifyContent:'center',
    //marginVetical:5
    paddingTop:20,
    paddingVertical:15,
    paddingHorizontal:10,
  },
  text:{
    textAlign:'center',
    color: '#052A4F',
  },
  indicator:{
    fontSize:24,
    fontWeight:'bold',
  },
  indicatorValue:{
    fontSize:30,
    fontWeight:'bold',
    color:'white'
  },
  indicatorValueBox:{
    borderColor: '#052A4F',
    borderRadius: 4,
    borderWidth: 4,
    marginHorizontal:60,
    marginBottom:5
  },
  green:{
    backgroundColor:'#029343'
  },
  red:{
    backgroundColor:'#e84118'
  },
  normal:{
    fontSize:20,
    //marginVertical:5,
    marginBottom: 10,
  },
})

export default ResultItem;