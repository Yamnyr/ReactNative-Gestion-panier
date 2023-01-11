import { StyleSheet, Text, View } from 'react-native';
import Title from "./Title";
import Footer from "./Footer";
export default function ArticleView(props) {
    return (
        <View>
            <Title Title={'Titre'}></Title>
            <Footer Footer={'Footer'}></Footer>
        </View>
    )
}

const styles = StyleSheet.create({

});