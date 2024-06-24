import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { navbarStyles } from './NavBar';
import { customStyles } from './Styles';


const Home = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Home Screen',
      ...navbarStyles,
    });
  }, [navigation]);

    return (

      <ScrollView style={customStyles.MainView}>
        <Text style={customStyles.TitleTextStyle}>Welcome</Text>
          <View style={styles.InnerView1}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.profileName}>Zubair Ali</Text>
            <Text style={styles.Logos}>January 01, 2024</Text>
          </View>
          <Icon style={{ marginTop: 5, marginRight: 10 }} name="person" size={80} color="red" />
          </View>
          <View style={styles.InnerView2}>
            <View style={styles.HeightWeight}>
              <Text style={styles.View2Text1}>Height</Text>
              <Text style={styles.View2Text1}>Weight</Text>
              <Text style={styles.View2Text1}>BMI</Text>
            </View>
            <View style={styles.HeightWeightValue}>
            <View style={{ height: 70, width: 70, backgroundColor: 'lightgreen', borderRadius: 35, alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ height: 55, width: 55, flexDirection: 'column', backgroundColor: 'white', borderRadius: 27, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 18, fontFamily: 'poppins' }}>172</Text>
                <Text style={{ fontSize: 10, fontFamily: 'poppins' }}>CM</Text>
              </View>
            </View>
            <View style={{ height: 70, width: 70, backgroundColor: 'red', borderRadius: 40, alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ height: 55, width: 55, flexDirection: 'column', backgroundColor: 'white', borderRadius: 27, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 18, fontFamily: 'poppins' }}>68</Text>
                <Text style={{ fontSize: 10, fontFamily: 'poppins' }}>KG</Text>
              </View>
            </View>
            <View style={{ height: 70, width: 70, backgroundColor: 'blue', borderRadius: 35, alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ height: 55, width: 55, flexDirection: 'column', backgroundColor: 'white', borderRadius: 27, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 18, fontFamily: 'poppins' }}>22.7</Text>
                <Text style={{ fontSize: 10, fontFamily: 'poppins' }}>BMI</Text>
              </View>
            </View>
            </View>
          </View>
          <View style={styles.InnerView3}>
          <TouchableOpacity style={styles.BmiCalculator} onPress={() => { navigation.navigate('BloodPressureCalculatorScreen'); }}>
            <Image style={{ width: '100%', height: '100%' }} source={require('./assets/Images/heartrate.png')} />
            <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 9 }}> BP Calculator</Text>
            </TouchableOpacity>
          <TouchableOpacity style={styles.BmiCalculator} onPress={() => { navigation.navigate('BMICalculatorScreen'); }}>
            <Image style={{ width: '100%', height: '100%' }} source={require('./assets/Images/bmi.jpeg')} />
            <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 9 }}> BMI Calculator</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BmiCalculator}>
            <Image style={{ width: '100%', height: '100%' }} source={require('./assets/Images/heartrate.png')} />
            <Text style={{ fontSize: 10, textAlign: 'center', marginBottom: 9 }}> Sugar Calculator</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.InnerView4}>
          <TouchableOpacity style={styles.InnerView4Sub} onPress={() => { navigation.navigate('SuggestedDietPlanScreen') }}>
              <Text style={styles.InnerView4Subtext}>Suggested Diet Plan</Text>
            <Icon name="edit" size={30} color="red" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.InnerView4Sub}>
            <Text style={styles.InnerView4Subtext}>Custom Diet Plan</Text>
            <Icon name="edit" size={30} color="red" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.InnerView4Sub}>
            <Text style={styles.InnerView4Subtext}>Ideal Weight Calculator</Text>
            <Icon name="edit" size={30} color="red" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.InnerView4Sub}>
            <Text style={styles.InnerView4Subtext}>Weight Calculator</Text>
            <Icon name="edit" size={30} color="red" />
            </TouchableOpacity>
          </View>
      </ScrollView>
      );
    }
    export default Home    
    const styles = StyleSheet.create({
      MainView: {
        backgroundColor: '#ffff',
        flex : 1,
        marginTop:0,
        padding:30
        
      },
      InnerView1: {
        flex: 0.12,
        backgroundColor: '#FFFFFF',
        padding: 4,
        flexDirection: 'row',
        margin: 10,
        borderRadius: 10,
        shadowColor: 'grey',
        shadowOpacity: 0.8,
        justifyContent: 'space-between',
        shadowOffset: {
          height: 0,
          width: 0,
        },
      },
      InnerView2: {
        flex: 0.18,
        backgroundColor: '#ffFFFF',
        justifyContent: 'space-between',
        marginTop:10,
        flexDirection:'column',
        borderRadius: 30,
        borderRadius: 10,
        margin: 10,
        shadowColor: 'grey',
        shadowOpacity: 0.8,
        justifyContent: 'space-between',
        shadowOffset: {
          height: 0,
          width: 0,
        },
        
      },
      InnerView3: {
        flex: 0.2,
        marginTop:10,
        flexDirection:'row'
        
    
      },
      InnerView4: {
        marginTop:10,
        flexDirection: 'column',
      },
      profileName: {
        padding:10,
        fontSize: 25,
        marginLeft: 10,
        fontFamily: "poppins",
        color: 'red',
      },
      Logos: {
        marginLeft: 20,
        fontSize: 17,
        marginBottom: 20,
      },
      View2Text1: {
        fontSize: 20,
        paddingHorizontal: 5,
        margin: 10,
        fontWeight: 'bold',
        fontFamily: 'poppins'
        
      },
      View2Text2: {
        fontSize: 20,
        marginBottom: 20,
        paddingHorizontal: 30,
        fontWeight: 'bold',
        fontFamily: 'poppins'
      },
      HeightWeight:{
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      HeightWeightValue:{
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        marginBottom: 20
      },
      BmiCalculator:{
        flex:0.35,
        backgroundColor: '#FFFFFF',
        padding:10,
        flexDirection: 'column',
        margin: 10,
        width: 100,
        height: 120,
        borderRadius: 20,
        shadowColor: 'grey',
        shadowOpacity: 0.8,
        alignContent: 'center',
        justifyContent: 'center',
        shadowOffset: {
          height: 0,
          width: 0,
        },
      },
      InnerView4Sub:{
        backgroundColor:'#FFFFFF',
        flex:0.4,
        borderRadius:20,
        margin:10,
        alignItems:'center',
        flexDirection: 'row',
        padding:20,
        borderRadius: 20,
        shadowColor: 'grey',
        shadowOpacity: 0.8,
        alignContent: 'center',
        justifyContent: 'space-between',
        shadowOffset: {
          height: 0,
          width: 0,
        },
      },
      InnerView4Subtext:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        fontFamily: 'poppins'
      },
    });
    


