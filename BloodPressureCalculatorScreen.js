import React from 'react';
import { ScrollView, Text, TextInput } from 'react-native';
import { navbarStyles } from './NavBar';
import { customStyles } from './Styles';


const BloodPressureCalculatorScreen = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Blood Pressure Calculator',
            ...navbarStyles,
        });
    }, [navigation]);
    return (

        <ScrollView style={customStyles.MainView}>
            <Text style={{ fontFamily: 'poppins', fontSize: 17, paddingHorizontal: 10, paddingTop: 20, paddingBottom: 10 }}>
                NOTE:  The calculated Blood pressure is not accurated, it is based on the formula calculation so its just for record
            </Text>
            <Text style={{ paddingVertical: 10 }}>Systoloc Pressure: *</Text>
            <TextInput
                text style={customStyles.input}
                keyboardType='numeric'
                placeholder="Enter your Systolic blood pressure"
            />
            <Text style={{ paddingVertical: 10 }}>Disystolic Pressure: *</Text>
            <TextInput
                text style={customStyles.input}
                keyboardType='numeric'
                placeholder="Enter your Diastolic blood pressure"
            />
            <Text style={{ fontSize: 20, paddingVertical: 10, paddingTop: 40, fontWeight: 'bold', paddingHorizontal: 5 }}>
                Calculated Values
            </Text>
            <Text style={{ paddingVertical: 10, paddingHorizontal: 14 }}>
                Mean Arterial Pressure:          80 mm Hg
            </Text>
            <Text style={{ paddingVertical: 10, paddingHorizontal: 14 }}>
                Pulse Pressure:          40 mm Hg
            </Text>
            <Text style={{ paddingVertical: 10, paddingHorizontal: 14 }}>
                Blood Pressure:          90 mm Hg
            </Text>
        </ScrollView>
    );
}
export default BloodPressureCalculatorScreen
