import { StyleSheet, Text, View } from 'react-native';
export default function Article(props) {
  return (
    <View style={styles.Article}>
      <div>
        <Title >{props.description}</Title>{/*description*/}
        <Text>{props.prix}</Text>{/*prix*/}
        <img src={props.picture}/>{/*picture*/}
        <View>
          {/*gestionnaire de quantité*/}
        </View>
      </div>
    </View>
  )
}


const styles = StyleSheet.create({

});