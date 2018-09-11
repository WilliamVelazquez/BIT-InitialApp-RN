import {createStore} from 'redux';
import reducer from '../reducers/data';

//const store = createStore(reducer, estadoInicial, enhancer)
const store = createStore(reducer, {})

export default store;