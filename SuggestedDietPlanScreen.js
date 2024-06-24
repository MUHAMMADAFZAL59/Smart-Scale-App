import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import getApi from './ApiHook';
import { navbarStyles } from './NavBar';


const SuggestedDietPlanScreen = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Suggested Diet plan',
            ...navbarStyles,
        });
    }, [navigation]);

    const [data, setData] = useState(null);
    const [filteredList, setFilteredList] = useState([]);
    const bmi = 22.2;

    const { userData, fetchData } = getApi();

    useEffect(() => {
        setData(userData);
    }, [userData]);

    useEffect(() => {
        if (data) {
            setFilteredList(data.filter(user =>
                bmi >= user.bmi_range.minimum && bmi <= user.bmi_range.maximum
            ));
        }
    }, [data]);

    const keyExtractor = (item, index) => index.toString();

    const renderItem = ({ item }) => {
        return (
            <View>
                <Text style={{ fontFamily: 'poppins', fontSize: 17, paddingHorizontal: 10, paddingTop: 20 }}>
                    NOTE:  Below is your syggested Diet plan, calculated on your BMI values. This is not confirmed, you should counter check it.
                </Text>
                {item.diet_plan.map((meal, index) => (
                    <View key={index}>
                        <View style={styles.breakFastView}>
                            <Text style={{ fontFamily: 'poppins', fontSize: 23, fontWeight: 'bold' }} >{meal.meal}</Text>
                        </View>
                        {meal.items.map((food, foodIndex) => (
                            <View style={styles.mealView}>
                                <Text style={{ fontFamily: 'poppins', fontSize: 17 }} key={foodIndex}>
                                    {foodIndex + 1}.   {food.name}
                                </Text>
                            </View>
                        ))}
                    </View>
                ))}
                <View style={{ marginBottom: 100 }}></View>
            </View>
        );
    };

    return (
        <FlatList
            data={filteredList}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
        />
    );
}
export default SuggestedDietPlanScreen

const styles = StyleSheet.create({
    breakFastView: {
        height: 50,
        marginRight: 230,
        borderTopRightRadius: 40,
        backgroundColor: '#6495ED',
        marginVertical: 20,
        shadowColor: 'grey',
        shadowOpacity: 0.8,
        justifyContent: 'center',
        textAlign: 'center',
        alignContent: 'center',
        paddingLeft: 25,
        shadowOffset: {
            height: 0,
            width: 0,
        },
    },
    mealView: {
        marginHorizontal: 30,
        justifyContent: 'center',
        textAlign: 'center',
        alignContent: 'center',
        borderWidth: 2,
        marginVertical: 2,
        borderTopRightRadius: 30,
        borderRadius: 3,
        paddingLeft: 20,
    }
});