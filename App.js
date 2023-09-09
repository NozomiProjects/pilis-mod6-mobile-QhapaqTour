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
import { ModifyProfileNavigator } from './src/screens/ModifyProfile/ModifyProfileNavigator.jsx';
import { ReservasScreen } from "./src/screens/Reservas/ReservasScreen";
/*import { GeneralScreen } from "./src/screens/General/GeneralScreen";
import {DetalleScreen} from "./src/screens/Detalle/DetalleScreen";
import {ComentariosScreen} from "./src/screens/Comentario/ComentariosScreen";
*/

const ListStack = createNativeStackNavigator();
export default function App() {
  const { setFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    const getFavorites = async () => {
      try {
        const favoritesJSON = await AsyncStorage.getItem("favorites");
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
                <ListStack.Screen name='ModifyProfile' component={ModifyProfileNavigator} />
                <ListStack.Screen name='Reservas' component={ReservasScreen} />
                <ListStack.Screen name='RecorridoDetail' component={RecorridoDetailScreen} />

                {/* <ListStack.Screen name='General' component={GeneralScreen} />                 
                <ListStack.Screen name='Detalle' component={DetalleScreen} /> 
                <ListStack.Screen name='Comentarios' component={ComentariosScreen} />  */}

                {/* Pantallas con Tab */}
                <ListStack.Screen name="Main" component={MainStackScreen} />

              </ListStack.Navigator>
            </NavigationContainer>
          </RegionProvider>
        </FavoritesProvider>
      </UserProvider>
      <StatusBar style="light" backgroundColor={COLORS.primary} />
    </>
  );
}
