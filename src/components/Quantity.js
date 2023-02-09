import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import Articles from "../services/api/articles";
import { useEffect, useState } from "react";
import useArticles from "../hook/useArticles";
export default function Quantity({ quantity, onUpdate } ){

  return (
    <View style={styles.container}>
      <button style={styles.button} onClick={() => onUpdate(quantity>0? quantity-1: quantity+0)} title={'-'}>-</button>
      <Text style={styles.text}>Total :{quantity}</Text>
      <button style={styles.button} onClick={() => onUpdate(quantity+1)} title={'+'}>+</button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  button:{
    height: 30
  },
  text:{
    margin: 20,
    fontSize:15,
    fontWeight: 'bold',
  }
});