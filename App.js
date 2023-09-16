import { useContext, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { Manjari_700Bold } from "@expo-google-fonts/manjari";
import {
  LoginScreen,
  RecorridoDetailScreen,
  RegisterScreen,
} from "./src/screens/index";
import { MainStackScreen } from "./src/screens/Main/MainScreen";
import { COLORS } from "./src/utils/theme";
import { UserProvider } from "./src/contexts/UserContext";
import { FavoritesProvider } from "./src/contexts/FavoritesContext";
import { RecorridosProvider } from "./src/contexts/RecorridosContext";
import { RegionProvider } from "./src/contexts/RegionContext";
import { ModifyProfileNavigator } from "./src/screens/ModifyProfile/ModifyProfileNavigator";
import { ReservasScreen } from "./src/screens/Reservas/ReservasScreen";
import { NewReservaScreen } from "./src/screens/Reservas/NewReservaScreen";

const ListStack = createNativeStackNavigator();
export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_800ExtraBold,
    Manjari_700Bold,
  });


  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <UserProvider>
        <RecorridosProvider>
          <FavoritesProvider>
            <RegionProvider>
              <NavigationContainer>
                <ListStack.Navigator screenOptions={{ headerShown: false }}>
                  {/* Pantallas sin Tab */}
                  <ListStack.Screen name="Login" component={LoginScreen} />
                  <ListStack.Screen
                    name="Register"
                    component={RegisterScreen}
                  />
                  <ListStack.Screen
                    name="ModifyProfile"
                    component={ModifyProfileNavigator}
                  />
                  <ListStack.Screen
                    name="Reservas"
                    component={ReservasScreen}
                  />
                  <ListStack.Screen
                    name="NewReserva"
                    component={NewReservaScreen}
                  />
                  <ListStack.Screen
                    name="RecorridoDetail"
                    component={RecorridoDetailScreen}
                  />

                  {/* Pantallas con Tab */}
                  <ListStack.Screen name="Main" component={MainStackScreen} />
                </ListStack.Navigator>
              </NavigationContainer>
            </RegionProvider>
          </FavoritesProvider>
        </RecorridosProvider>
      </UserProvider>
      <StatusBar style="light" backgroundColor={COLORS.primary} />
    </>
  );
}
