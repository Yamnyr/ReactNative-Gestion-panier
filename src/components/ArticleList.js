import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Article from "./Article";
import { fetchAllArticles } from "../services/api/articles";

export default function ArticleList(props) {
  const { articles, cart } = props;
  const listArticles = articles.map((article, i) => (
    <Article key={article.id} article={article} inCart={cart[article.id]}/>
  ));
    return (
        <ScrollView style={styles.ArticleList}>
          {listArticles}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ArticleList: {
        textAlign: 'center',
    },
    footer: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    }
});