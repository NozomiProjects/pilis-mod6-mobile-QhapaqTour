import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ModifyProfileScreen } from './ModifyProfileScreen';

const Stack = createNativeStackNavigator();

export const ModifyProfileNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='ModifyProfileScreen' component={ModifyProfileScreen} />
        </Stack.Navigator>
    );
};