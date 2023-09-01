import { Controller, useForm } from "react-hook-form";
import { ImageBackground, Modal, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { Manjari_700Bold } from "@expo-google-fonts/manjari";
import { styles } from "./RegisterScreen.styles";
import { signUp } from "../../api/usuarios";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      dni: "",
      password: "",
      username: "",
    },
  });

  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Manjari_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handleRegister = (data) => {
    signUp(data)
    .then(res => {
        setModalVisible(true);
      })
      .catch(err => console.warn(err))
  }

  const handleClose = () => {
    setModalVisible(false);
    navigation.navigate('Profile');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.bgImage} source={require('../../../assets/images/main.jpg')}>
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
            name='nombre'
            rules={{ required: 'El nombre es requerido' }}
          />
          {errors.nombre && <Text style={styles.errorText}>{errors.nombre.message}</Text>}

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
            name='apellido'
            rules={{ required: 'El apellido es requerido' }}
          />
          {errors.apellido && <Text style={styles.errorText}>{errors.apellido.message}</Text>}

          <Controller 
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Tu email"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.input}
                  autoCapitalize='none'
                />
            )}
            name='email'
            rules={{ required: 'El email es requerido' }}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

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
            name='dni'
            rules={{ required: 'El DNI es requerido' }}
          />
          {errors.dni && <Text style={styles.errorText}>{errors.dni.message}</Text>}

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
            name='password'
            rules={{ required: 'La contraseña es requerida' }}
          />
          {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

          <Controller 
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Tu nombre de usuario"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.input}
                  autoCapitalize='none'
                />
            )}
            name='username'
            rules={{ required: 'El nombre de usuario es requerido' }}
          />
          {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}

          <TouchableOpacity style={styles.button} onPress={handleSubmit(handleRegister)}>
            <Text style={styles.buttonText}>Registarme</Text>
          </TouchableOpacity>
        </View>

        <Modal visible={modalVisible} animationType='fade' transparent>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>¡Te has registrado con éxito!</Text>
              <TouchableOpacity onPress={handleClose} style={styles.button}>
                <Text style={styles.buttonText}>Continuar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
};

