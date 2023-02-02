import { StyleSheet, Text, View } from 'react-native';
import Title from "./Title";
import { fetchImage } from "../services/api/articles";
import { useEffect } from "react";
export default function Article(props) {
  return (
    <View style={styles.Article}>
      <div style={styles.Card}>
        <div style={styles.Div}>
          <Text >{props.data.description}</Text>{/*description*/}
          <Text>{props.data.prix} €</Text>{/*prix*/}
        </div>
        <div style={styles.Div}>
          <img style={styles.Img} src={"http://localhost:7000"+(props.data.picture)}/>{/*picture*/}
          <View>
            gestion de quantité
          </View>
        </div>
      </div>
    </View>
  )
}


const styles = StyleSheet.create({
  Div: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
    padding: '10px',
  },
  Card:{
    border: 'solid',
    margin: '5px',
  },
  Img:{
    border: '1,0,1,0 solid',
  }
});