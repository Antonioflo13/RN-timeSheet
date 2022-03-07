import { createStackNavigator } from "@react-navigation/stack";

import Badge from "../screens/Badge";
import Meeting from "../screens/Meeting";
import Links from "../screens/Links";

const Stack = createStackNavigator();

const myStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Badge"
      screenOptions={{
        headerMode: "float",
        headerStyle: { height: 80, backgroundColor: "#319bed" },
      }}
    >
      <Stack.Screen name="Badge" component={Badge} />
      <Stack.Screen name="Meeting" component={Meeting} />
      <Stack.Screen name="Links" component={Links} />
    </Stack.Navigator>
  );
};

export default myStack;
