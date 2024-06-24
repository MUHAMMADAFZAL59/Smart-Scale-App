import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { navbarStyles } from './NavBar';
import { customStyles } from './Styles';

const Welcome = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "red" },
      headerTitleStyle: { color: 'blue' },
      title: 'Home',
      ...navbarStyles, // Spread the navbarStyles object to apply the styles
    });
  }, [navigation]);
  const[isMale,setIsMale] = useState(false);
  const[isFemale,setIsFemale] = useState(false);
  const[name,setName] = useState('')
  handleName = (Text) => {
    setName(Text)
  }

  touchHandler = () =>{
    setIsMale(true);
    setIsFemale(false);
  }
  touchHandler2 = () =>{
    setIsFemale(true);
    setIsMale(false);
  }
  
  
  return (
    <ScrollView style={styles.mainView}>
      <View style = {styles.View1}>
        <Text style={styles.Text}>Scale Smart App</Text>
        <Image style={{ width: '100%', height: '100%' }} source={require('./assets/Images/logo.png')} />
    </View>
      <View style = {styles.View2}>
        <Text style={{ paddingVertical: 5, fontFamily: 'poppins', fontSize: 15 }}>Name: *</Text>
        <TextInput
          text style={customStyles.input}
          keyboardType='numeric'
          placeholder="Enter your Diastolic blood pressure"
        />
        <Text style={styles.gender}>Please Select your Gender: *</Text>
        <View style = {styles.touchHeightView}>
        <TouchableHighlight style={[styles.touchHighlight, {backgroundColor:isMale ? '#0096FF':'#FFFFFF'},]} onPress={touchHandler} underlayColor="#FFFFFF">
          <Text>Male</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.touchHighlight, {backgroundColor:isFemale ? '#ffb6c1':'#FFFFFF'},]} onPress={touchHandler2} underlayColor="#FFFFFF">
          <Text>Female</Text>
        </TouchableHighlight>
        </View>
        <TouchableOpacity style={customStyles.buttonStyle} onPress={() => {
          navigation.navigate('Height');
        }}>
          <Text style={customStyles.buttonTextStyle}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  )
}

export default Welcome
const styles = StyleSheet.create({
  touchHeightView: {
    marginTop: 20,
    flexDirection: 'row',
    alignContent: 'space-between',
    marginBottom: 30,
  },
 
    mainView: {
      backgroundColor: '#FFFFFF',
      flex : 1,
      marginTop:0,
      // marginTop:50,
      padding:30
      
    },

    gender:{
      marginTop: 20,
      fontSize: 15,
      fontFamily: 'poppins'

    },
  View1: {
    height: 200,
        backgroundColor:'#FFFFFF',
        // margin: 10,
        // padding:20,
        //alignItems:'Center'

    },
  View2: {
      backgroundColor:'#FFFFFF',
    marginTop: 30,

  },
  Text:{
    fontSize:25,
    fontWeight: 'bold',
    fontFamily: 'poppins',
    textAlign: 'center'
  },
  Input:{
    width:'100%',
    height:62,
    borderRadius:8,
    borderWidth:1,
    paddingHorizontal: 10,
    fontSize:20,
  },
  touchHighlight: {
    height: 50,
    width: 90,
    borderRadius:8,
    borderWidth: 1,
    alignItems: 'center',
    alignContent: 'center',
    padding: 14,
    marginHorizontal: 40
  },
  button:{
    backgroundColor:'#0096FF',
    height:60,
    width:'100%',
    marginTop:50,
    borderRadius:100,
    marginBottom:10,
    alignItems:'center',
    padding:10
  },
  buttonText:{
    fontSize:30,
    color:'#FFFFFF'
  }
  });