import { combineReducers } from 'redux';

import FoodReducers from 'reducers/food_reducers';

const rootReducer = combineReducers({
  foods: FoodReducers
});

export default rootReducer;
