import { StyleSheet, Text, View } from 'react-native';
import ArticleView from "./ArticleView";
import Article from "./Article";
import { fetchPanier } from "../services/api/articles";
import { useEffect, useState } from "react";
export default function Footer(props) {
    const {cart} = props;
    const table = Object.values(cart)
    const total = table.reduce((acc, article) => acc + article.quantity*article.prix, 0);

    return (
        <View style={styles.Title}>
            <Text style={styles.footer}>Articles dans le panier : {table.length}</Text>
            <Text style={styles.footer}>Prix Total : {Math.round(total)} €</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Title: {
        textAlign: 'center',
    },
    footer: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    }
});