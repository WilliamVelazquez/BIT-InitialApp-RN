//@Author William E. Velázquez Amarra - williamvelazquez.isc@gmail.com
import {
  combineReducers
} from 'redux';

import navigation from './navigation.js';
import data from './data.js';
import user from './user.js';

const reducer = combineReducers({
  navigation,
  data,
  user
});

export default reducer;