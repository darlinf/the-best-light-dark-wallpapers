import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import WallpaperScreen from '../screens/Wallpaper';
import FavoriteScreen from '../screens/Favorite';
import { BottomTabParamList, WallpaperParamList, FavoriteParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Wallpaper" 
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>

      <BottomTab.Screen
        name="Wallpaper"
        component={WallpaperNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-images" color={color} />,
        }}
      />
      
      <BottomTab.Screen
        name="Favorite"
        component={FavoriteNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-heart" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const WallpaperStack = createStackNavigator<WallpaperParamList>();

function WallpaperNavigator() {
  return (
    <WallpaperStack.Navigator>
      <WallpaperStack.Screen
        name="WallpaperScreen"
        component={WallpaperScreen}
        options={{ headerTitle: 'Wallpapers' }}
      />
    </WallpaperStack.Navigator>
  );
}

const FavoriteStack = createStackNavigator<FavoriteParamList>();

function FavoriteNavigator() {
  return (
    <FavoriteStack.Navigator>
      <FavoriteStack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{ headerTitle: 'Favorite' }}
      />
    </FavoriteStack.Navigator>
  );
}
