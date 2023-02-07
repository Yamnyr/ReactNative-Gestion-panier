import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Articles from "../services/api/articles";
import { useEffect, useState } from "react";
export default function Quantity( quantity, onUpdate ){
    const [value, setValue] = useState(quantity);
    function onUpdate2() {
      console.log('test');
    }
/*  useEffect(() => {
  }, [quantity]);*/

  const handleChange = event => {
    setValue(event.target.value);
    onUpdate2(event.target.value);
  };
  return (
    <div>
      <input type="number" value={value} onChange={handleChange} />
    </div>
  );
}

const styles = StyleSheet.create({

});