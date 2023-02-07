import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Article from "./Article";
import { fetchAllArticles } from "../services/api/articles";

export default function ArticleList(props) {
  const { articles, cart } = props;
  const listArticles = articles.map((v, i) => (
    <Article key={v.id} article={v} inCart={cart[articles.id]}/>
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