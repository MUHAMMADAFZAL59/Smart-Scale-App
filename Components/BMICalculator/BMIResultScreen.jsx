import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { navbarStyles } from '../../NavBar';
import { customStyles } from '../../Styles';


const BMIResultScreen = ({ navigation, route }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'BMI Calculator',
            ...navbarStyles,
        });
    }, [navigation]);

    const { weight, height } = route.params;

    const [bmi, setBmi] = useState(0);

    const calculateBmi = () => {
        const weightDouble = parseFloat(weight);
        const heightDouble = parseFloat(height);

        const bmiDouble = weight / (heightDouble * heightDouble);
        setBmi(bmiDouble);
    };

    useEffect(() => {
        calculateBmi();
    }, []);

    return (
        <ScrollView style={customStyles.MainView}>
            <View style={{ alignItems: 'center' }}>
                <Text style={customStyles.TextEnterYourHeight}> Result</Text>
                <View style={{ shadowColor: 'grey', shadowOffset: { height: 5, width: 5 }, shadowOpacity: 0.8, height: 300, alignItems: 'center', marginBottom: 40, marginTop: 30, width: '80%', borderRadius: 10, backgroundColor: '#00FFFF' }}>
                    <View style={{ shadowColor: 'grey', shadowOffset: { height: 0, width: 0 }, shadowOpacity: 0.9, height: 50, paddingTop: 10, alignItems: 'center', alignContent: 'center', marginTop: 20, width: 150, borderRadius: 7, backgroundColor: 'white' }}>
                        <Text style={{ fontSize: 25, textAlign: 'center' }}>{bmi.toFixed(1)} </Text>
                    </View>
                </View>
                <TouchableOpacity style={customStyles.buttonStyle}
                    onPress={() => {
                        navigation.navigate('HomeScreen');
                    }}>
                    <Text style={customStyles.buttonTextStyle}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
};

export default BMIResultScreen;