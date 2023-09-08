import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { COLORS, SPACING } from '../../utils/theme';
import { HomeScreen, ExploreScreen, FavoritesScreen, ProfileScreen } from '../index';


const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: 'home',
  Explore: 'search1',
  Favorites: 'hearto',
  Profile: 'user'
}

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ size, color }) => (
      <AntDesign name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.inactive,
    headerShown: false,
    tabBarStyle: styles.tabBar
  }
}

export const MainStackScreen = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name='Home' options={{ title: 'Inicio' }} component={HomeScreen} />
      <Tab.Screen name='Explore' options={{ title: 'Explorar' }} component={ExploreScreen} />
      <Tab.Screen name='Favorites' options={{ title: 'Favoritos' }} component={FavoritesScreen} />
      <Tab.Screen name='Profile' options={{ title: 'Perfil' }} component={ProfileScreen} />
    </Tab.Navigator>
  )
};

const styles = StyleSheet.create({
  tabBar: {
    height: SPACING.xxxl,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs
  }
});