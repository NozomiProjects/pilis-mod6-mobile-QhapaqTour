import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { UserContext } from '../../contexts/UserContext';
import { COLORS } from '../../utils/theme';
import { updateUserInfo } from '../../api/usuarios';
import { styles as ModifyProfileStyles } from "./ModifyProfileScreen.styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export const ModifyProfileScreen = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
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
            rol: 'cliente', // O el valor correcto que deba ir aquí
        });
    };

    const handleSaveChanges = async () => {
        try {
            // Obtener el ID del usuario desde AsyncStorage
            const userId = await AsyncStorage.getItem('userId');

            // Realizar la solicitud PUT para actualizar la información del usuario
            const updatedUser = await updateUserInfo(userId, formData, currentUser.token);

            // Actualiza el contexto con los nuevos datos del usuario
            setCurrentUser(updatedUser);

            // Muestra una alerta indicando que el usuario ha sido modificado con éxito
            Alert.alert('Éxito', 'Usuario modificado con éxito.', [
                {
                    text: 'OK',
                    onPress: () => {
                        // Programar la redirección a LoginScreen después de 2 segundos (2000 milisegundos)
                        setTimeout(() => {
                            // Navegar a LoginScreen
                            // Reemplaza 'LoginScreen' con el nombre de tu pantalla de inicio de sesión
                            // (asegúrate de importar 'useNavigation' y tener acceso a la navegación)
                            navigation.navigate('LoginScreen');
                        }, 500); // Cambia 2000 a la cantidad de milisegundos que desees
                    },
                },
            ]);
            // Puedes agregar un mensaje de éxito o redireccionar a otra pantalla aquí
        } catch (error) {
            console.error('Error al actualizar la información del usuario:', error.response);
            // Puedes manejar errores aquí
            // Muestra una alerta de error
            Alert.alert('Error', 'No se pudo actualizar la información del usuario. Por favor, intenta nuevamente.');
        }
    };

    return (
        <View style={ModifyProfileStyles.container}>
            <Text>Modificar perfil</Text>
            <TextInput
                placeholder="Email"
                value={formData.email}
                onChangeText={(text) => handleInputChange('email', text)}
            />
            <TextInput
                placeholder="Username"
                value={formData.username}
                onChangeText={(text) => handleInputChange('username', text)}
            />
            <TextInput
                placeholder="Nuevo Password"
                secureTextEntry
                value={formData.password}
                onChangeText={(text) => handleInputChange('password', text)}
            />
            <TextInput
                placeholder="Apellido"
                value={formData.apellido}
                onChangeText={(text) => handleInputChange('apellido', text)}
            />
            <TextInput
                placeholder="Nombre"
                value={formData.nombre}
                onChangeText={(text) => handleInputChange('nombre', text)}
            />
            <TextInput
                placeholder="DNI"
                value={formData.dni}
                onChangeText={(text) => handleInputChange('dni', text)}
            />
            <TouchableOpacity onPress={handleSaveChanges} style={ModifyProfileStyles.button}>
                <Text style={ModifyProfileStyles.buttonText}>Guardar Cambios</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 12,
        marginTop: 24,
        alignItems: 'center',
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 18,
    },
});
