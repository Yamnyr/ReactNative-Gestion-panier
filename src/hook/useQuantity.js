import { useEffect, useReducer } from "react";
import {Context} from "../context/store"
import { fetchAllArticles, fetchPanier } from "../services/api/articles";
import { reducer } from "../reducer/Reducer"


export default function useQuantity(){
  const [state, dispatch ]= useReducer(reducer, initialState)

  /*gestion de quantité local + diastante
  (3 possibilité -> ajout d'un article, suppression d'un article et mise a jour de la quantité différente)
  (pour le distant -> 3 requete differente a ajouté dans api/articles.js)
   */




  return [state, dispatch ]
}
export const defaultState = {

};
