import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage

export const UserContext = createContext({
    currentUser: null,
    userId: null,
    setCurrentUser: () => { },
});


export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const storedUserId = await AsyncStorage.getItem("userId");

                if (storedUserId) {
                    setUserId(storedUserId);
                }
            } catch (error) {
                console.error('Error loading user data:', error);
            }
        };

        loadUserData();
    }, []);

    const value = {
        currentUser,
        userId,
        setCurrentUser,
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};