import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { LoginScreen } from "../Login/LoginScreen";
import { WelcomeScreen } from "../Welcome/WelcomeScreen";

export const ProfileScreen = () => {
  const { currentUser } = useContext(UserContext)

  return (
    <>
      {currentUser ? <WelcomeScreen /> : <LoginScreen />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
