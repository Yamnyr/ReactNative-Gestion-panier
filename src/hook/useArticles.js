import { useEffect, useReducer } from "react";
import {Context} from "../context/store"
import { fetchAllArticles, fetchPanier } from "../services/api/articles";
import { reducer } from "../reducer/Reducer"

export default function useArticle(){
  const initialState = {articles:[], cart :{}};
  const [state, dispatch ]= useReducer(reducer, initialState)
  useEffect(() => {
    fetchAllArticles()
      .then((articles) => {
        dispatch({type:'set_articles', articles:articles})
      });
    fetchPanier()
      .then((panier)=>{
        // setPanier(structure(panier))
        let d = cart.reduce((panier, article) => {
          panier[article.id] = article;
          return panier;
        }, {});
        dispatch({type:'set_panier', panier:panier})
      })
  },[])

}
// function structure(panier) {
//   return panier.reduce((obj, article) => {
//     return {...obj,[article.id]: article};
//   }, {})
// }
export const defaultState = {

};
