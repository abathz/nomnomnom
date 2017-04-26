import { FETCH_FOOD, FETCH_CAKE } from 'actions/index';

export default function(state = {}, action){
  switch(action.type){
    case FETCH_FOOD:
      return action.payload;
    case FETCH_CAKE:
      return action.payload;
  }
  return state;
}