//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import {createStore, applyMiddleware} from 'redux';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers'

import reducer from './reducers/index';

const navigationMiddleware =  createReactNavigationReduxMiddleware(
  'root',//Key donde vamos a escuchar las aplicaciones - Nombre de la App
  state => state.navigation//Función de como se va a manipular el Middleware - Función que devuelve el nuevo estado
  //se utiliza state.navigation ya que fue el nombre que se le dio en el index de los reducers (en el combine)
);
//const store = createStore(reducer, estadoInicial, enhancer)
const store = createStore(
  reducer, 
  applyMiddleware(navigationMiddleware)
)

export default store;