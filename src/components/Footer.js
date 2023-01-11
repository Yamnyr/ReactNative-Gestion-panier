import { StyleSheet, Text, View } from 'react-native';
export default function Footer(props) {
    return (
        <View style={styles.Title}>
            <Text style={styles.footer}>{props.Footer}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Title: {
        textAlign: 'center',
    },
    footer: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    }
});