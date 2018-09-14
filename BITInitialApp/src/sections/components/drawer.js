import React from 'react';

import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from 'react-native';

import {DrawerItems} from 'react-navigation';

function Drawer(props) {
  //console.log(props);
  return(
    <ScrollView>
      <SafeAreaView>
        <Image 
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  )
};

const styles=StyleSheet.create({
  logo:{
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginVertical: 20,
    marginLeft: 10
  }
});

export default Drawer;