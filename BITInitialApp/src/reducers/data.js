//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
function data(state={}, action){
  switch(action.type){
    case 'SET_PROJECT_VALUES':{
      return {...state, ...action.payload}
    }
    case 'SET_INITIAL_INVESTMENT_VALUES':{
      return {...state, ...action.payload};
    }
    case 'SET_PRODUCT_VALUES':{
      return {...state, ...action.payload};
    }
    default:
      return state;
  }
}

export default data;