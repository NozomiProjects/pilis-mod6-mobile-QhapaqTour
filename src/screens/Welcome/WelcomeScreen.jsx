import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { UserContext } from "../../contexts/UserContext";
import { COLORS } from "../../utils/theme";
import { getUserInfo } from "../../api/usuarios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./WelcomeScreen.styles";

export const WelcomeScreen = () => {
  const { currentUser, setCurrentUser, credentials, setCredentials } =
    useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("user");

      setCredentials(null);
      setCurrentUser(null);
    } catch (error) {
      console.error("Error durante el cierre de sesión:", error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const userId = credentials.user.id;
        const token = credentials.token.token;
        if (userId && token) {
          const fetchedUserData = await getUserInfo(userId, token);
          console.log(fetchedUserData)
          setCurrentUser(fetchedUserData);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleNavigate = (to) => {
    navigation.navigate(to);
  };

  return (
    <View style={styles.container}>
      {!isLoading && currentUser ? (
        <>
          <View style={styles.header}>
            <Image
              source={{ uri: "https://i.pravatar.cc" }}
              style={styles.avatar}
            />
            <View style={styles.userInfo}>
              <Text style={styles.name}>
                {currentUser.nombre} {currentUser.apellido}
              </Text>
              <Text style={styles.email}>{currentUser.email}</Text>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>
              ¡Bienvenido/a, {currentUser.nombre}!
            </Text>
            <TouchableOpacity
              onPress={() => handleNavigate("Favorites")}
              style={styles.button}
            >
              <Ionicons name="md-heart-sharp" size={24} color={COLORS.secondary} />
              <Text style={styles.buttonText}>Ir a Favoritos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleNavigate("Reservas")}
              style={styles.button}
            >
              <Ionicons
                name="calendar"
                style={styles.rightHeartIcon}
                size={24}
                color={COLORS.secondary}
              />
              <Text style={styles.buttonText}>Ir a Reservas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleNavigate("ModifyProfile")}
              style={styles.button}
            >
              <Entypo name="edit" size={24} color={COLORS.secondary} />
              <Text style={styles.buttonText}>Actualizar perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout} style={styles.button}>
              <Entypo name="log-out" size={24} color={COLORS.secondary} />
              <Text style={styles.buttonText}>Cerrar sesión</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Text>Cargando datos...</Text>
      )}
    </View>
  );
};
