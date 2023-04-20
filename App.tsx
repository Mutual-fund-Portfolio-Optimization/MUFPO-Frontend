import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FundScreen from './src/screens/FundScreen';
import HomeScreen from './src/screens/HomeScreen';
import LearnScreen from './src/screens/LearnScreen';
import LogoScreen from './src/screens/LogoScreen';
import OptimizationScreen from './src/screens/OptimizationScreen';
import PortScreen from './src/screens/PortScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Logo' component={LogoScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Optimize' component={OptimizationScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Fund' component={FundScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Learn' component={LearnScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Port' component={PortScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
