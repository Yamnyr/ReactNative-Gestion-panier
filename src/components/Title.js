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
        border: 'solid',
        margin: '2%',
        width: '100%'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
    }
});