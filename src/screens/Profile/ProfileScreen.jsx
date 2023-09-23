import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { LoginScreen } from "../Login/LoginScreen";
import { WelcomeScreen } from "../Welcome/WelcomeScreen";

export const ProfileScreen = () => {
  const { credentials } = useContext(UserContext)

  return (
    <>
      {credentials ? <WelcomeScreen /> : <LoginScreen />}
    </>
  );
};