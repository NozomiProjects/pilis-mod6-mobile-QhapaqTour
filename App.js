import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainStackScreen } from './src/screens/Main/MainScreen';
import { COLORS } from './src/utils/theme';
import { UserProvider } from './src/contexts/UserContext';
import { LoginScreen } from './src/screens/Login/LoginScreen';
import { RegisterScreen } from './src/screens/Register/RegisterScreen';

const ListStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <ListStack.Navigator screenOptions={{ headerShown: false }}>
            {/* Pantallas sin Tab */}
            <ListStack.Screen name='LoginScreen' component={LoginScreen} />
            <ListStack.Screen name='Register' component={RegisterScreen} />
            
            {/* Pantallas con Tab */}
            <ListStack.Screen name='Main' component={MainStackScreen} />
          </ListStack.Navigator>
        </NavigationContainer>
      </UserProvider>
      <StatusBar style='light' backgroundColor={COLORS.primary} />
    </>
  );
}

