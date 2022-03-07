import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "native-base";

import HeaderRight from "../components/HeaderRight";

//AuthScreens
import Badges from "../screens/Badges";
import Meeting from "../screens/Meeting";
import Links from "../screens/Links";
import UserInfo from "../screens/UserInfo";

//notAuthScreens
import Login from "../screens/Login";

const Stack = createStackNavigator();
const LoginStack = createStackNavigator();

const NotAuthPage = () => {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#319bed" },
        headerTintColor: "white",
      }}
    >
      <LoginStack.Screen
        name="Login"
        component={Login}
        options={{ title: "" }}
      />
    </LoginStack.Navigator>
  );
};

const AuthPage = () => {
  return (
    <Stack.Navigator
      initialRouteName="Badge"
      screenOptions={{
        headerStyle: { backgroundColor: "#319bed" },
        headerTintColor: "white",
        headerRight: () => <HeaderRight />,
      }}
    >
      <Stack.Group>
        <Stack.Screen
          name="Badges"
          component={Badges}
          options={{
            headerLeft: () => (
              <Image
                source={{
                  uri: "https://cdn.octavianlab.com/octavianlab/bo/favicon.ico?t=1639734060331",
                }}
                alt="OC-logo"
                width="20%"
                height="10"
                resizeMode="contain"
                style={{ shadowOpacity: 0.2 }}
                ml="1"
              />
            ),
            title: "",
          }}
        />
        <Stack.Screen name="Meeting" component={Meeting} />
        <Stack.Screen name="Links" component={Links} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="UserInfo"
          component={UserInfo}
          options={{ title: "" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const myStack = () => {
  [isAuth, setIsAuth] = useState(false);

  switch (isAuth) {
    case true:
      return <AuthPage />;

    default:
      return <NotAuthPage />;
  }
};

export default myStack;
