//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import {createStore} from 'redux';
import reducer from './reducers/index';

//const store = createStore(reducer, estadoInicial, enhancer)
const store = createStore(reducer, {
  initialInvestment: 0,
  suppliesCost: 0,
  paySheetCost: 0,
  rentCost: 0,
  workPermitsCost: 0,
  servicesCost: 0
})

export default store;