import { useState, useContext } from "react";
import { Image, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../../contexts/UserContext";
import { updateUserInfo } from "../../api/usuarios";
import { styles } from "./ModifyProfileScreen.styles";

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
      const userId = credentials.user.id;
      const token = credentials.token.token;
      await updateUserInfo(userId, formData, token);

      Alert.alert("Éxito", "Usuario modificado con éxito.", [
        {
          text: "OK",
          onPress: () => {
            // Programar la redirección a LoginScreen después de 2 segundos (2000 milisegundos)
            setTimeout(() => {
              navigation.navigate("Login");
            }, 500);
          },
        },
      ]);
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
      <Image source={{ uri: "https://i.pravatar.cc" }} style={styles.avatar} />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Email"
          value={formData.email}
          onChangeText={(text) => handleInputChange("email", text)}
          style={styles.input}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          placeholder="Username"
          value={formData.username}
          onChangeText={(text) => handleInputChange("username", text)}
          style={styles.input}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nuevo Password</Text>
        <TextInput
          placeholder="Nuevo Password"
          secureTextEntry
          value={formData.password}
          onChangeText={(text) => handleInputChange("password", text)}
          style={styles.input}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Apellido</Text>
        <TextInput
          placeholder="Apellido"
          value={formData.apellido}
          onChangeText={(text) => handleInputChange("apellido", text)}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          placeholder="Nombre"
          value={formData.nombre}
          onChangeText={(text) => handleInputChange("nombre", text)}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>DNI</Text>
        <TextInput
          placeholder="DNI"
          value={formData.dni}
          onChangeText={(text) => handleInputChange("dni", text)}
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={handleSaveChanges} style={styles.button}>
        <Text style={styles.buttonText}>Guardar cambios</Text>
      </TouchableOpacity>
    </View>
  );
};
