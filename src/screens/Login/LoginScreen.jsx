import { useState, useContext } from "react";
import {
  Alert,
  Button,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { login } from "../../api/usuarios";
import { styles } from "./LoginScreen.styles";

export const LoginScreen = () => {
  const navigation = useNavigation();
  const { setCredentials } = useContext(UserContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "", password: "" } });

  const goToMainScreen = () => {
    navigation.navigate("Main", { screen: "Home" });
  };

  const goToRegister = () => {
    navigation.navigate("Register");
  };

  const handleLogin = async (data) => {
    if (!data.email || !data.password) {
      Alert.alert(
        "Error",
        "Por favor ingresa un correo electrónico y una contraseña."
      );
      return;
    }
    try {
      const response = await login(data);

      setCredentials({
        token: response.token,
        user: response.user,
      });

      navigation.navigate("Main", { screen: "Home" });
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../../../assets/images/main.jpg")}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>QhapaqTour</Text>
        </View>
        <View style={styles.content}>
          <ImageBackground
            style={styles.whiteBackground}
            source={require("../../../assets/images/white-shape-mobile.png")}
          >
            <Text style={styles.subTitle}>Ingresa a tu cuenta</Text>

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Tu email o nombre de usuario"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.input}
                  autoCapitalize="none"
                />
              )}
              name="email"
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Tu contraseña"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.input}
                  secureTextEntry
                />
              )}
              name="password"
            />

            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit(handleLogin)}
            >
              <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={goToMainScreen}>
              <Text style={styles.buttonText}>Continuar como invitado</Text>
            </TouchableOpacity>

            <View style={styles.registerContainer}>
              <Text style={styles.registerContainerText}>
                ¿No tienes cuenta?
              </Text>
              <TouchableOpacity onPress={goToRegister}>
                <Text style={styles.primaryText}>Registrate</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
