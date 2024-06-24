import { StyleSheet } from 'react-native';


export const customStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    MainView: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        marginTop: 0,
        padding: 10,
    },
    TitleTextStyle: {
        paddingTop: 20,
        paddingLeft: 10,
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'poppins',
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: 'grey',
        paddingHorizontal: 10,
        borderRadius: 10,
        padding: 10,
    },
    verticalSizedBox: {
        height: 10,
    },
    smallTitleStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'poppins',
    },
    SliderStyle: {
        width: '90%',
        transform: [{ scaleX: 1 }, { scaleY: 2 }],
    },
    View1: {
        Flex: 1,
        backgroundColor: '#FFFFFF',
        Height: '90%',
        width: '100%',
        marginTop: '10%',
        flexDirection: 'row'
    },
    TextEnterYourHeight: {
        paddingTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'poppins',
        textAlign: 'center'
    },
    dropdownContainer: {
        width: 120,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 8,
        padding: 10,
    },
    dropdown: {
        height: 90,
        width: 110,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 8,
        padding: 10,
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
    View1Modal: {
        padding: 10,
        flex: 0.5,
    },
    ViewModalText: {
        fontSize: 20,
    },
    EmptyText: {
        padding: 60,
        fontSize: 20,
        fontWeight: 'bold'
    },
    ConditionHeightFeet: {},
    ConditionHeightCM: {
        marginTop: 20,
        // backgroundColor:'#000000'
    },
    Text_Input: {
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 10,
        marginLeft: 10,
        width: 120,
        padding: 10,
        fontSize: 20
    },
    buttonStyle: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#6495ED',
        padding: 10,
        borderRadius: 10,
    },
    buttonTextStyle: {
        color: 'white',
        textAlign: "center",
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'poppins',
    },

});