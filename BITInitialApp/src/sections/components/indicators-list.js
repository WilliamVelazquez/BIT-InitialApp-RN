//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet
} from 'react-native';

import Separator from './vertical-separator';

function IndicatorsList(props){

  const ListItem = (props,index) => (
    <View style={(index%2==0)?styles.yellow:styles.white}>
      <Text style={[styles.text,styles.indicator]}>{props.key}</Text>
      <Text style={[styles.text,styles.normal]}>{props.indicator}</Text>
      <View style={styles.indicatorValueBox}>
        <Text style={[styles.text,styles.indicatorValue]}>{props.value}</Text>
      </View>
      <Text style={[styles.text,styles.normal]}>{props.description}</Text>
      {/*<Text style={[styles.text,styles.normal]}>{index}</Text>*/}
    </View>
  );

  const ItemSeparator = () => <Separator />;

  return(
    <FlatList
      data={props.indicators}
      renderItem={({ item, index }) => ListItem(item,index)}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
}

const styles = StyleSheet.create({
  white:{
    justifyContent:'center',
    //marginVetical:5
    paddingVertical:5,
    paddingHorizontal:10,
  },
  yellow:{
    justifyContent:'center',
    //marginBottom:5,
    //marginVetical:5
    paddingVertical:5,
    paddingHorizontal:10,
    backgroundColor:'#F1C40F'
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
  },
  indicatorValueBox:{
    borderColor: '#052A4F',
    borderRadius: 4,
    borderWidth: 4,
    marginHorizontal:100,
    marginBottom:5
  },
  normal:{
    fontSize:20,
    //marginVertical:5,
    marginBottom: 10,
  },
})

export default IndicatorsList;