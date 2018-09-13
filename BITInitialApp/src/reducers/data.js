function data(state={}, action){
  switch(action.type){
    case 'Test1':{
      return {...state, ...action.payload}
    }
    case 'Test2':{
    	return {}
    }
    default:
      return state;
  }
}

export default data;