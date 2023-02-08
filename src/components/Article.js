import { StyleSheet, Text, View } from 'react-native';
import Title from "./Title";
import { fetchImage } from "../services/api/articles";
import { useEffect } from "react";
import Quantity from "./Quantity";
export default function Article(props) {
  const {article: {id, prix, description, picture}, inCart} = props;
  return (
    <View style={styles.Article}>
      <div style={styles.Card}>
        <div style={styles.Div}>
          <Text >{description}</Text>
          <Text>{prix} €</Text>
        </div>
        <div style={styles.Div}>
          <img style={styles.Img} src={"http://localhost:7000"+(picture)}/>
          <View>
            <Quantity quantity={inCart.quantity} /*onUpdate={}*/></Quantity>
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
});