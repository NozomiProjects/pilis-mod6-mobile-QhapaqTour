import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./RegisterScreen.styles";
import { signUp } from "../../api/usuarios";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ModalInfo } from "../../components/ModalInfo/ModalInfo";

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      dni: "",
      password: "",
      username: "",
    },
  });

  const handleRegister = (data) => {
    signUp(data)
      .then((res) => {
        setIsVisible(true);
      })
      .catch((error) =>
        Alert.alert(
          "Error",
          error.message
        )
      );
  };

  const handleClose = () => {
    setIsVisible(false);
    navigation.navigate("Main", { screen: "Profile" });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../../../assets/images/main.jpg")}
      >
        <View style={styles.content}>
          <Text style={styles.title}>QhapaqTour</Text>
          <Text style={styles.subTitle}>Registrarse</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Nombre"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
              />
            )}
            name="nombre"
            rules={{ required: "El nombre es requerido" }}
          />
          {errors.nombre && (
            <Text style={styles.errorText}>{errors.nombre.message}</Text>
          )}

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Apellido"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
              />
            )}
            name="apellido"
            rules={{ required: "El apellido es requerido" }}
          />
          {errors.apellido && (
            <Text style={styles.errorText}>{errors.apellido.message}</Text>
          )}

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Tu email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
                autoCapitalize="none"
              />
            )}
            name="email"
            rules={{ required: "El email es requerido" }}
          />
          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="DNI"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
              />
            )}
            name="dni"
            rules={{ required: "El DNI es requerido" }}
          />
          {errors.dni && (
            <Text style={styles.errorText}>{errors.dni.message}</Text>
          )}

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
            rules={{ required: "La contraseña es requerida" }}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Tu nombre de usuario"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.input}
                autoCapitalize="none"
              />
            )}
            name="username"
            rules={{ required: "El nombre de usuario es requerido" }}
          />
          {errors.username && (
            <Text style={styles.errorText}>{errors.username.message}</Text>
          )}

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(handleRegister)}
          >
            <Text style={styles.buttonText}>Registrarme</Text>
          </TouchableOpacity>
        </View>

        <ModalInfo
          isVisible={isVisible}
          content="¡Te has registrado con éxito!"
          handleClose={handleClose}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};
