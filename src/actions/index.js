import axios from 'axios';

export const FETCH_FOOD = "FETCH_FOOD";
export const FETCH_CAKE = "FETCH_CAKE";
export const FETCH_GALLERY = "FETCH_GALLERY";

const foodJson = "./src/actions/json/menu_food.json";
const cakeJson = "./src/actions/json/menu_cake.json";
const galleryJson = "./src/actions/json/gallery.json";

export async function fetchDataFood(){
  const request = await axios.get(foodJson);

  return {
    type: FETCH_FOOD,
    payload: request
  };
}

export async function fetchDataCake(){
  const request = await axios.get(cakeJson);

  return {
    type: FETCH_CAKE,
    payload: request
  };
}

export async function fetchDataGallery(){
  const request = await axios.get(galleryJson);

  return {
    type: FETCH_GALLERY,
    payload: request
  };
}
