import { StyleSheet, Text, View } from 'react-native';
import Title from "./Title";
import Footer from "./Footer";
import ArticleList from "./ArticleList";
import { useContext, useEffect, useReducer, useState } from "react";
import { fetchAllArticles, fetchPanier } from "../services/api/articles";
import { reducer } from "../reducer/Reducer";
import { Context } from "../context/store";

export default function ArticleView(props) {
  const { state } = useContext(Context);
  // const [state, dispatch ]= useReducer(reducer, initialState)
  // const [articles, setArticles] = useState([]);
  // const [panier, setPanier] = useState([])
  // useEffect(() => {
  //   fetchAllArticles()
  //     .then((articles) => {
  //       setArticles(articles)
  //     });
  //   fetchPanier()
  //     .then((panier)=>{
  //       setPanier(structure(panier))
  //     })
  // },[])
  //
  // function structure(panier) {
  //   return panier.reduce((obj, article) => {
  //     return {...obj,[article.id]: article};
  //   }, {})
  // }
    return (
        <View  style={styles.ArticleView}>
            <Title Title={'Titre'}></Title>
            <ArticleList articles={state.articles} cart={state.cart}></ArticleList>
            <Footer Footer={'Footer'} cart={state.cart}></Footer>
        </View>
    )
}

const styles = StyleSheet.create({
  ArticleView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});