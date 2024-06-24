import { StyleSheet, Text, View ,SafeAreaView,TouchableOpacity,TextInput, KeyboardAvoidingView, ScrollView,TouchableHighlight,Slider}from 'react-native';
import React,{useState}  from 'react'
import { navbarStyles } from './NavBar';
import ReactCalendar from 'react-native-calendars';
const DOB = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: 'Home',
          ...navbarStyles, // Spread the navbarStyles object to apply the styles
        });
      }, [navigation]);
      const [date, setDate] = useState(new Date());
  return (
    <View style={styles.container}>
      <ReactCalendar
        value={date}
        onChange={setDate}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => setDate(new Date())}
      >
        <Text style={styles.buttonText}>Today</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DOB

const styles = StyleSheet.create({

    MainView: {
      backgroundColor: '#FFFFFF',
      flex : 1,
      marginTop:0,
      padding:30
      
    },
    container: {
      width: '100%',
      height: '100%',
    },
    button: {
      backgroundColor: 'red',
      width: 100,
      height: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
    },
})