//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
function data(state={}, action){
  switch(action.type){
    case 'SET_INITIAL_INVESTMENT':{
      return {...state, ...action.payload}
    }
    case 'SET_SUPPLIES_COST':{
      return {...state, ...action.payload};
    }
    case 'SET_PAYSHEET_COST':{
      return {...state, ...action.payload};
    }
    case 'SET_RENT_COST':{
      return {...state, ...action.payload};
    }
    case 'SET_WORK_PERMITS_COST':{
    	return {...state, ...action.payload};
    }
    case 'SET_SERVICES_COST':{
      return {...state, ...action.payload};
    }
    default:
      return state;
  }
}

export default data;