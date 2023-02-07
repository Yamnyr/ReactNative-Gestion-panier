import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from "./src/components/Title";
import ArticleView from "./src/components/ArticleView";
import { useReducer } from "react";

export default function App() {
  const [state, dispatch] = useReducer();
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
