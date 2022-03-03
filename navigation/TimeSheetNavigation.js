import { createStackNavigator } from "@react-navigation/stack";

import Badge from "../screens/Badge";

const Stack = createStackNavigator();

const MyScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Badge"
    >
      <Stack.Screen name="Badge" component={Badge} />
    </Stack.Navigator>
  );
};

export default MyScreen;
