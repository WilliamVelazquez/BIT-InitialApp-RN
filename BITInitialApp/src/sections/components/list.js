//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React from 'react';
import {
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

function List(props){

  const ListItem = (props) => (
    <Text style={styles.text}>{`\u2022 ${props.key}`}</Text>
  );

  return(
    <FlatList
      data={props.items}
      renderItem={({ item }) => ListItem(item)}
    />
  );
}

const styles = StyleSheet.create({
  text:{
    //padding:15,
    fontSize:21,
    marginLeft:15,
    //fontWeight:'bold'
    //textAlign:'justify',
    //marginBottom: 5
  }
})

export default List;