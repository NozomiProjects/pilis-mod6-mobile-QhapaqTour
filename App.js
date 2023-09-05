import { useContext, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  LoginScreen,
  RecorridoDetailScreen,
  RegisterScreen,
} from "./src/screens/index";
import {
  MainStackScreen
} from "./src/screens/Main/MainScreen";
import { COLORS } from "./src/utils/theme";
import { UserProvider } from "./src/contexts/UserContext";
import {
  FavoritesContext,
  FavoritesProvider,
} from "./src/contexts/FavoritesContext";
import { RegionProvider } from "./src/contexts/RegionContext";

const ListStack = createNativeStackNavigator();

export default function App() {
  const { setFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    const getFavorites = async () => {
      try {
        const favoritesJSON = await AsyncStorage.getItem("favorites");
        console.warn({ favoritesJSON });
        if (favoritesJSON) {
          setFavorites(JSON.parse(favoritesJSON));
        }
      } catch (error) {
        console.error(error);
      }
    };
    getFavorites();
  }, []);

  return (
    <>
      <UserProvider>
        <FavoritesProvider>
          <RegionProvider>
            <NavigationContainer>
              <ListStack.Navigator screenOptions={{ headerShown: false }}>
                {/* Pantallas sin Tab */}
                <ListStack.Screen name='LoginScreen' component={LoginScreen} />
                <ListStack.Screen name='Register' component={RegisterScreen} />

                {/* Pantallas con Tab */}
                <ListStack.Screen name="Main" component={MainStackScreen} />

                <ListStack.Screen name='RecorridoDetail' component={RecorridoDetailScreen} />
              </ListStack.Navigator>
            </NavigationContainer>
          </RegionProvider>
        </FavoritesProvider>
      </UserProvider>
      <StatusBar style="light" backgroundColor={COLORS.primary} />
    </>
  );
}
