//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  //createReduxBoundAddListener,
  //initializeListeners
  reduxifyNavigator
} from 'react-navigation-redux-helpers';

import AppNavigator from './app-navigator';

//Inicializar con la key que se inicializó el Middleware (root)
//const addListener = createReduxBoundAddListener('root');


const ReduxifyApp = reduxifyNavigator(AppNavigator, 'root');

class AppNavigatorWithState extends ReduxifyApp {

}

/*
class AppNavigatorWithState extends Component{
  //Inicializar los listeners después de que se monta el componente 
  componentDidMount() {
    //2 Keys -> De donde vamos a tomar los listeners y bajo que estado
    initializeListeners('root', this.props.navigation);
  }

  render() {
    const navigation = {
      dispatch:this.props.dispatch,//Cambiar al dispatch de redux
      state: this.props.navigation,//El que traemos con el connect
      addListener//Crear la función a partir del helper
    }
    return (
      <AppNavigator
        //Objeto con 3 Keys->Dispatch(A donde mandar las acciones), 
        //State(Estado con el que va a manejar las acciones), 
        //AddListener(Forma de escuchar los eventos de react navigation - Lo que ocurra en la screen)
        navigation={navigation}
      />
    );
  }
}
*/
function mapStateToProps(state) {
  return {
    //navigation: state.navigation,//utilizar state.navigation que se le dio en el index de los reducers (en el combine)
    state: state.navigation
  }
}

export default connect(mapStateToProps)(AppNavigatorWithState);