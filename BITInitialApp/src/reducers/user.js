//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
//function user(state = false,action){
function user(state = {},action){
  switch(action.type){
    case 'SET_USER': {
      return {...action.payload};
    }
    case 'REMOVE_USER': {
      return false;
    }
    default:
      return state;
  }
};

export default user;