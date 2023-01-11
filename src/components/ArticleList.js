import {ScrollView, StyleSheet, Text, View} from 'react-native';
export default function ArticleList(props) {
    return (
        <ScrollView style={styles.ArticleList}>
            <Text style={styles.footer}>{props.Footer}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ArticleList: {
        textAlign: 'center',
    },
    footer: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    }
});