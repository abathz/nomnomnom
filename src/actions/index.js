import axios from 'axios';

export const FETCH_FOOD = "FETCH_FOOD";
export const FETCH_CAKE = "FETCH_CAKE";

const foodJson = "./src/menu_food.json";
const cakeJson = "./src/menu_cake.json";

export function fetchDataFood(){
  const request = axios.get(foodJson);

  return {
    type: FETCH_FOOD,
    payload: request
  };
}

export function fetchDataCake(){
  const request = axios.get(cakeJson);

  return {
    type: FETCH_CAKE,
    payload: request
  };
}
