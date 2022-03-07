import React, { useRef } from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { useFonts } from "expo-font";
import Animated from "react-native-reanimated";

import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import MyStack from "./navigation/MyStack";

import Footer from './components/Footer'

const theme = extendTheme({
  colors: {
    primary: {
      50: "#319bed",
      100: "#939393",
    },
    secondary: {
      50: "#F2F2F2",
    },
  },
  config: {
    initialColorMode: "light",
  },
});

export default function App() {
  let [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const translation = useRef(new Animated.Value(0)).current;

  const hideFooter = () =>
    Animated.timing(translation, {
      toValue: 300,
      duration: 100,
      useNativeDriver: true,
    }).start();

  const showFooter = () =>
    Animated.timing(translation, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <MyStack />
        <Animated.View
        style={{
          transform: [{ translateY: translation }],
        }}
      >
        <Footer />
      </Animated.View>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
