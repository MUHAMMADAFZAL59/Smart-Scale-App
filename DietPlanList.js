import React from 'react';
import { FlatList, Text, View } from 'react-native';

const DietPlanList = ({ dietPlan }) => {
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.calories}</Text>
    </View>
  );

  return (
    <FlatList
      data={dietPlan}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  );
};

export default DietPlanList;