import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Badges from '../screens/Badges';

function MyDrawer() {
  return (
      <Drawer.Screen name="Feed" component={Badges} />
  );
}; 

export default MyDrawer;