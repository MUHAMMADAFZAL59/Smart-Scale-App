import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { navbarStyles } from './NavBar';
import { customStyles } from './Styles';

const BMICalculatorScreen = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'BMI Result',
            ...navbarStyles, // Spread the navbarStyles object to apply the styles
        });
    }, [navigation]);

    const [weightText, setWeightText] = useState('');
    const [heightText, setHeightText] = useState('');
    const [counter, setCounter] = useState(0);
    const [showSnackbar, setShowSnackbar] = useState(false);

    const handleWeightInput = (inputText) => {
        setWeightText(inputText);
        // console.log(inputText);
    };

    const handleHeightInput = (inputText) => {
        setHeightText(inputText);
        // console.log(inputText);
    };

    const dismissSnackbar = () => {
        setShowSnackbar(false);
    };

    const handlePress = () => {
        setShowSnackbar(true);
    };


    return (
        <ScrollView style={customStyles.MainView}>
            <Text style={customStyles.TextEnterYourHeight}> Calculate your BMI</Text>
            <Image style={{ width: '100%', height: 200 }} source={require('./assets/Images/bmi.jpeg')} />
            <View style={customStyles.verticalSizedBox}></View>
            <Text style={customStyles.smallTitleStyle} > Weight * </Text>
            <View style={{ height: 6 }}></View>
            <TextInput
                text style={customStyles.input}
                onChangeText={handleWeightInput}
                keyboardType='numeric'
                value={weightText}
                placeholder="Enter your Weight"
            />
            <View style={{ height: 17 }}></View>
            <Text style={customStyles.smallTitleStyle} > Height * </Text>
            <View style={{ height: 6 }}></View>
            <TextInput
                text style={customStyles.input}
                onChangeText={handleHeightInput}
                keyboardType='numeric'
                value={heightText}
                placeholder="Enter your Height"
            />
            <View style={{ height: 27 }}></View>
            <TouchableOpacity style={customStyles.buttonStyle}
                onPress={() => {
                    if (weightText != '' && heightText != '') {
                        navigation.navigate('BMIResultScreen',
                            { weight: weightText, height: heightText });
                    }
                    else {
                        console.log("Null");
                        handlePress();
                    }
                }}>
                <Text style={customStyles.buttonTextStyle}>
                    Calculate BMI
                </Text>
            </TouchableOpacity>
            <View style={{ paddingTop: 100 }}>
                <Snackbar
                    visible={showSnackbar}
                    onDismiss={dismissSnackbar}
                    duration={300}
                >
                    Complete all fields
                </Snackbar>
            </View>
            <View style={{ height: 10 }}></View>
        </ScrollView>
    )
}

export default BMICalculatorScreen