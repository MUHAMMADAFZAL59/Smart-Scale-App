import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { customStyles } from './Styles';

import { navbarStyles } from './NavBar';
const Height = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Data',
      ...navbarStyles, // Spread the navbarStyles object to apply the styles
    });
  }, [navigation]);
  
  const dropdownOptions = ['Height in cm', 'Height in Feet'];
  const [selectedValue, setSelectedValue] = useState('empty');

  return (
    <ScrollView style={styles.MainView}>
      <Text style={styles.TextEnterYourHeight}>Enter Your Height</Text>
    <View style={styles.View1}>
        <Text style={customStyles.smallTitleStyle} > Weight * </Text>
        <View style={{ height: 6 }}></View>
        <TextInput
          text style={customStyles.input}
          keyboardType='numeric'
          placeholder="Enter your Weight"
        />
        <View style={{ height: 17 }}></View>
        <Text style={customStyles.smallTitleStyle} > Height * </Text>
        <View style={{ height: 6 }}></View>
        <TextInput
          text style={customStyles.input}
          keyboardType='numeric'
          placeholder="Enter your Height"
        />
        <View style={{ height: 27 }}></View>
      
      </View>
  {selectedValue === 'Height in Feet' &&(<View>
    <Text style={{fontSize:30,marginTop:20}}>Height in Feets</Text>
    <View style={{flex:1,flexDirection:'row',padding:20}}>
      <TextInput style={styles.Text_Input} placeholder='Feets'></TextInput>
      <TextInput style={styles.Text_Input}placeholder = 'Inches'></TextInput>
  </View>
  </View>)}
      <View style={{ height: 27 }}></View>
      <TouchableOpacity style={customStyles.buttonStyle}
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}>
        <Text style={customStyles.buttonTextStyle}>
          Next
        </Text>
      </TouchableOpacity>

</ScrollView>
  )
}

export default Height
const styles = StyleSheet.create({

    MainView: {
      backgroundColor: '#FFFFFF',
      flex : 1,
      marginTop:0,
      padding:30
      
    },
    // Slider_View:{
    //   marginTop:100,
    // },
    SliderStyle:{
      width:'90%',
      transform: [{ scaleX: 1 }, { scaleY: 2}],
    },
    View1:{
      Flex:1,
      backgroundColor:'#FFFFFF',
      Height:'90%',
      width:'100%',
      marginTop:'10%',
      //flexDirection:'row'
      
    },
    TextEnterYourHeight:{
      marginTop: 30,
      fontSize:30,
      fontWeight:'bold'
    },
    dropdownContainer: {
      
      
      width: 120,
      borderWidth: 1,
      borderColor: '#000000',
      borderRadius: 8,
      padding: 10,
      
    },
    dropdown: {
      height:90,
      width: 110,
      borderWidth: 1,
      borderColor: '#000000',
      borderRadius: 8,
      padding:10,
      backgroundColor: '#fff',
    },
    dropdownText: {
      fontSize: 16,
      color: '#333',
      textAlign: 'center',
    },
    dropdownTextHighlight: {
      backgroundColor: '#ddd',
      color: '#333',
    },
    selectedValue: {
      marginTop: 20,
    },
    View1Modal:{
      padding:10,
      flex:0.5,
    },
    ViewModalText:{
      fontSize:20,
    },
    EmptyText:{
      padding:60,
      fontSize:20,
      fontWeight:'bold'
    },
    ConditionHeightFeet:{},
    ConditionHeightCM:{
      marginTop:20,
      // backgroundColor:'#000000'
    },
    Text_Input:{
      borderRadius:8,
      borderWidth:1,
      marginBottom:10,
      marginLeft:10,
      width:120,
      padding:10,
      fontSize:20
    },
    ButtonStyle:{
      width:'100%',
      Height:60,
      alignItems:'center',
      backgroundColor:'#0096FF',
      padding:10,
      borderRadius:50,
    }
    
  });