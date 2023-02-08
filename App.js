import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from "./src/components/Title";
import ArticleView from "./src/components/ArticleView";
import {Context} from "./src/context/store";
import useArticle from "./src/hook/useArticles";

export default function App() {
  const [state, dispatch] = useArticle();
  return (
    <View style={styles.container}>
      <Context.Provider value={{state, dispatch}}>
        <ArticleView></ArticleView>
      </Context.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0,
  },
});
