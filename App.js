import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import BMICalculatorScreen from './BMICalculatorScreen';
import BloodPressureCalculatorScreen from './BloodPressureCalculatorScreen';
import BMIResultScreen from './Components/BMICalculator/BMIResultScreen';
import DOB from './DOB';
import Height from './Height';
import Home from './Home';
import SuggestedDietPlanScreen from './SuggestedDietPlanScreen';
import Welcome from './Welcome';


const Stack = createNativeStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    poppins: require('./assets/Poppins-Regular.ttf'),
  });

  // Check if the font is loaded successfully
  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="Height" component={Height} />
        <Stack.Screen name="DOB" component={DOB} />
        <Stack.Screen name="BMICalculatorScreen" component={BMICalculatorScreen} />
        <Stack.Screen name="BMIResultScreen" component={BMIResultScreen} />
        <Stack.Screen name="SuggestedDietPlanScreen" component={SuggestedDietPlanScreen} />
        <Stack.Screen name="BloodPressureCalculatorScreen" component={BloodPressureCalculatorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
