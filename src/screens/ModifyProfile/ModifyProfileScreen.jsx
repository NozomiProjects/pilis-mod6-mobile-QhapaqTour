import React, { useState, useContext, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { UserContext } from "../../contexts/UserContext";
import { COLORS } from "../../utils/theme";
import { updateUserInfo } from "../../api/usuarios";
import { styles } from "./ModifyProfileScreen.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export const ModifyProfileScreen = () => {
  const { currentUser, credentials } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: currentUser.email,
    username: currentUser.username,
    password: currentUser.password,
    apellido: currentUser.apellido,
    nombre: currentUser.nombre,
    dni: currentUser.dni,
    rol: currentUser.rol,
  });

  const navigation = useNavigation();

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSaveChanges = async () => {
    try {
      // Obtener el ID del usuario desde AsyncStorage
      const userId = await AsyncStorage.getItem("userId");

      // Realizar la solicitud PUT para actualizar la información del usuario
      const updatedUser = await updateUserInfo(
        userId,
        formData,
        credentials.token.token
      );

      // Actualiza el contexto con los nuevos datos del usuario
      // setCurrentUser(updatedUser);

      // Muestra una alerta indicando que el usuario ha sido modificado con éxito
      Alert.alert("Éxito", "Usuario modificado con éxito.", [
        {
          text: "OK",
          onPress: () => {
            // Programar la redirección a LoginScreen después de 2 segundos (2000 milisegundos)
            setTimeout(() => {
              // Navegar a LoginScreen
              // Reemplaza 'LoginScreen' con el nombre de tu pantalla de inicio de sesión
              // (asegúrate de importar 'useNavigation' y tener acceso a la navegación)
              navigation.navigate("LoginScreen");
            }, 500); // Cambia 2000 a la cantidad de milisegundos que desees
          },
        },
      ]);
      // Puedes agregar un mensaje de éxito o redireccionar a otra pantalla aquí
    } catch (error) {
      console.error(
        "Error al actualizar la información del usuario:",
        error.response
      );
      // Puedes manejar errores aquí
      // Muestra una alerta de error
      Alert.alert(
        "Error",
        "No se pudo actualizar la información del usuario. Por favor, intenta nuevamente."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modificar perfil</Text>
      <View>
        <Text>Email</Text>
        <TextInput
          placeholder="Email"
          value={formData.email}
          onChangeText={(text) => handleInputChange("email", text)}
          style={styles.input}
        />
      </View>
      <View>
        <Text>Username</Text>
        <TextInput
          placeholder="Username"
          value={formData.username}
          onChangeText={(text) => handleInputChange("username", text)}
          style={styles.input}
        />
      </View>
      <View>
        <Text>Nuevo Password</Text>
        <TextInput
          placeholder="Nuevo Password"
          secureTextEntry
          value={formData.password}
          onChangeText={(text) => handleInputChange("password", text)}
          style={styles.input}
        />
      </View>
      <View>
        <Text>Apellido</Text>
        <TextInput
          placeholder="Apellido"
          value={formData.apellido}
          onChangeText={(text) => handleInputChange("apellido", text)}
          style={styles.input}
        />
      </View>
      <View>
        <Text>Nombre</Text>
        <TextInput
          placeholder="Nombre"
          value={formData.nombre}
          onChangeText={(text) => handleInputChange("nombre", text)}
          style={styles.input}
        />
      </View>
      <View>
        <Text>DNI</Text>
        <TextInput
          placeholder="DNI"
          value={formData.dni}
          onChangeText={(text) => handleInputChange("dni", text)}
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={handleSaveChanges} style={styles.button}>
        <Text style={styles.buttonText}>Guardar Cambios</Text>
      </TouchableOpacity>
    </View>
  );
};
