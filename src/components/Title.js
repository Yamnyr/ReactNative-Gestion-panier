import { StyleSheet, Text, View } from 'react-native';
export default function Title(props) {
    return (
        <View style={styles.Title}>
            <Text style={styles.title}>{props.Title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Title: {
        textAlign: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    }
});