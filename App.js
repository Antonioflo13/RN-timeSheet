import React, { useRef } from "react";
import { NativeBaseProvider, extendTheme, ScrollView } from "native-base";
import { Animated } from "react-native";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigation/MyStack";

import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <Header />
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
