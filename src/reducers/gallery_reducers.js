import { FETCH_GALLERY } from 'actions/index';

export default function(state = {}, action){
  switch(action.type){
    case FETCH_GALLERY:
      return action.payload;
  }
  return state;
}