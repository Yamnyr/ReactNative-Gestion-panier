import { useEffect, useReducer } from "react";
import {Context} from "../context/store"
import { fetchAllArticles, fetchPanier } from "../services/api/articles";
import { reducer } from "../reducer/Reducer"

export const initialState = {articles:[], cart :{}};

export default function useArticles(){
  const [state, dispatch ]= useReducer(reducer, initialState)
  useEffect(() => {
    fetchAllArticles()
      .then((articles) => {
        dispatch({type:'set_articles', articles:articles})
      });
    fetchPanier()
      .then((panier)=>{
        // setPanier(structure(panier))
        let d = panier.reduce((panier, article) => {
          panier[article.id] = article;
          return panier;
        }, {});
        dispatch({type:'set_panier', cart:d})
      })
  },[])

  return [state, dispatch ]
}
// function structure(panier) {
//   return panier.reduce((obj, article) => {
//     return {...obj,[article.id]: article};
//   }, {})
// }

