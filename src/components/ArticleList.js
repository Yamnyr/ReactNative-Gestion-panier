import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Articles from "../services/api/articles";
import { fetchAllArticles } from "../services/api/articles";

export default function ArticleList(props) {
  const listArticles = articlesList.map((v, i) => (
    <Articles key={v.id} data={v} />
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