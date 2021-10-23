import React from "react";
import {
  NativeBaseProvider,
  extendTheme,
  StatusBar,
} from "native-base";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import {AppBar} from "./components/AppBar";
import { HomeScreen } from "./components/HomeScreen/HomeScreen";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NativeBaseProvider>
        <StatusBar />
        <AppBar />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer> 
      </NativeBaseProvider>
  );
}
