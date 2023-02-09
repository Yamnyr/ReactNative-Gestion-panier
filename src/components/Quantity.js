import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import Articles from "../services/api/articles";
import { useEffect, useState } from "react";
import useArticles from "../hook/useArticles";
export default function Quantity({ quantity, onUpdate } ){

  return (
    <View>
      <Text>Entrez un nombre : {quantity}</Text>
      <button onClick={() => onUpdate(quantity>0? quantity-1: quantity+0)}>-</button>
      <button onClick={() => onUpdate(quantity+1)}>+</button>
    </View>
  );
}

const styles = StyleSheet.create({

});