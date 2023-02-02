import {useState} from "react";

const BASE_URL = "http://localhost:7000";

export async function fetchAllArticles() {
   return fetch(`${BASE_URL}/articles`)
       .then((response) => response.json())
}

export async function fetchPanier() {
   return fetch(`${BASE_URL}/panier`)
     .then((response) => response.json())
}

export async function fetchImage() {
   return fetch(`${BASE_URL}/images/${image}`)
     .then((response) => response.json())
}
export default {
   fetchAllArticles,
   fetchPanier,
};
