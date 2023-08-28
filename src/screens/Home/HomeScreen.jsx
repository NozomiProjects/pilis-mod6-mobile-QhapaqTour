import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { useContext } from 'react';
// import { UserContext } from '../../contexts/UserContext';
// import { WelcomeScreen } from '../Welcome/WelcomeScreen';
// import { LoginScreen } from '../Login/LoginScreen';

export const HomeScreen = () => {
    // const { currentUser } = useContext(UserContext);

    return (
        <View style={styles.container}>
        <Text>Home Screen</Text>
        <StatusBar style="auto" />
        </View>
        // <>
        //     { currentUser ? <WelcomeScreen /> : <LoginScreen />}
        // </>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
