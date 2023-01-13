import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Articles from "../services/api/articles";
export default function Quantity(props) {
  return (
    <View>
      <Text>{props.quantity}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

});