import { StyleSheet ,View, Text,Slider } from 'react-native'
import React, { useState } from 'react'

export default Slider_Bar = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const onSliderValueChange = (value) => {
    const roundedValue = Math.round(value);
    setSliderValue(roundedValue);
  };
  return (
    <View>
    <Text style={styles.SliderText}>Height: {sliderValue}  cm</Text>
    <Slider
        style={styles.SliderStyle}
        minimumValue={0}
        step={1}
        maximumValue={250}
        value={sliderValue}
        onValueChange={onSliderValueChange}
        minimumTrackTintColor="#0096FF"
        maximumTrackTintColor="#CCCCCC" 
        thumbTintColor="#0096FF"
        // thumbStyle={{ width: 20, height: 20}} 
        // sliderStyle={{ height: 10 }} 
      />
    </View>
  )
}



const styles = StyleSheet.create({
  SliderStyle:{
    width:'90%',
    transform: [{ scaleX: 1.1 }, { scaleY: 2}],
    marginBottom:5,
    padding:10,
    marginLeft:5
    
    
  },
  SliderText:{
    marginTop:13,
    marginBottom:15,
    fontSize:30,
  }
});