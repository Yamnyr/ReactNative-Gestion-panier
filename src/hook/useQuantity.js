import { useEffect, useReducer } from "react";
import {Context} from "../context/store"
import { fetchAllArticles, fetchPanier } from "../services/api/articles";
import { reducer } from "../reducer/Reducer"


export default function useQuantity(){
  const [state, dispatch ]= useReducer(reducer, initialState)






  return [state, dispatch ]
}
export const defaultState = {

};
