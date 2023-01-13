import {useState} from "react";

const BASE_URL = "http://localhost:7000/";
/*const API_URL = `${BASE_URL}/api`;*/

export async function fetchAllArticles() {
   /*console.log('page index = '+page)*/
   return fetch(`${BASE_URL}/articles`)
       .then((response) => response.json())
}

export async function fetchPanier() {
   return fetch(`${BASE_URL}/panier`)
     .then((response) => response.json())
}
export default {
   fetchAllArticles,
   fetchPanier,
};
