function data(state={}, action){
  switch(action.type){
    case '':{
      return {...state, ...action.payload}
    }
    case '':{

    }
    default:
      return state;
  }
}

export default data;