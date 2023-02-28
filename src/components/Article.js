import { StyleSheet, Text, View } from 'react-native';
import Title from "./Title";
import { fetchImage } from "../services/api/articles";
import { useContext, useEffect } from "react";
import {Context} from "../context/store";
import Quantity from "./Quantity";
import useArticles from "../hook/useArticles";
export default function Article(props) {
  const {article: {id, prix, description, picture}, inCart} = props;

  const {dispatch} = useContext(Context);
  function onUpdate(newQuantity) {
    if (newQuantity === 0) {
      dispatch({type: 'delete_in_cart', id})
      // mise à jour des données distantes
    }
    else {
      dispatch({type: 'set_in_cart', inCart: {id, prix, quantity: newQuantity}})
      // mise à jour des données distantes
    }
  }
//^^ mettre cette fucntion dans useQuantity ^^



  return (
    <View style={styles.Article}>
      <div style={styles.Card}>
        <div style={styles.Div}>
          <Text style={styles.text} >{description}</Text>
          <Text style={styles.text} >{prix} €</Text>
        </div>
        <div style={styles.Div}>
          <img style={styles.Img} src={"http://localhost:7000"+(picture)}/>
          <View>
            <Quantity quantity={inCart? inCart.quantity : 0} onUpdate={onUpdate} />
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
  Article:{
    border: 'solid',
    margin: '5px',
    width: '95%',
    fontSize:'40vw',
  },
  text:{
    fontSize:20,
    fontWeight: 'bold',
  }
});