import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from "./src/components/Title";
import ArticleView from "./src/components/ArticleView";

export default function App() {
  return (
    <View style={styles.container}>
      <ArticleView></ArticleView>
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
