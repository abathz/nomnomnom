import { combineReducers } from 'redux';

import FoodReducers from 'reducers/food_reducers';
import GalleryReducers from 'reducers/gallery_reducers';

const rootReducer = combineReducers({
  foods: FoodReducers,
  gallery: GalleryReducers
});

export default rootReducer;
