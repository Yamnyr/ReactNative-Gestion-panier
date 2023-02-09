import { StyleSheet, Text, View } from 'react-native';
import ArticleView from "./src/components/ArticleView";
import {Context} from "./src/context/store";
import { useReducer } from "react";
import { reducer } from "./src/reducer/Reducer";
import useArticles from "./src/hook/useArticles"

export default function App() {
  const [state, dispatch] = useArticles();
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
