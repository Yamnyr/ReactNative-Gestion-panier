import { StyleSheet, Text, View } from 'react-native';
import Title from "./Title";
import Footer from "./Footer";
import ArticleList from "./ArticleList";
import { useEffect, useState } from "react";
import { fetchAllArticles, fetchPanier } from "../services/api/articles";
export default function ArticleView(props) {
  const [articles, setArticles] = useState([]);
  const [panier, setPanier] = useState([])
  useEffect(() => {
    fetchAllArticles()
      .then((articles) => {
        setArticles(articles)
      });
    fetchPanier()
      .then((panier)=>{
        setPanier(structure(panier))

      })
  },[])

  function structure(panier) {
    return panier.reduce((obj, article) => {
      return {...obj,[article.id]: article};
    }, {})
  }
    return (
        <View  style={styles.ArticleView}>
            <Title Title={'Titre'}></Title>
            <ArticleList articles={articles} cart={panier}></ArticleList>
            <Footer Footer={'Footer'} cart={panier}></Footer>
        </View>
    )
}

const styles = StyleSheet.create({
  ArticleView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});