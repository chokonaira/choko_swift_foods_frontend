import { createAppContainer } from "react-navigation";
import TabRoutes from './TabRoutes';
import StackRoutes from './StackRoutes';
// import DrawerRoutes from './DrawerRoute';
// import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";


const RootNavigator = createStackNavigator({
  Home: {
    screen: StackRoutes,
    navigationOptions: {
      title: " ",
      headerStyle: { height: 0 },
    }
  },
  // Login: {
  //   screen: Routes
  // },
  // Register: {
  //   screen: Routes
  // },
  Dashboard: {
    screen: TabRoutes,
    navigationOptions: {
      title: "Choko Swift Foods",
      headerTintColor: "black",
      headerStyle: { backgroundColor: '#f0a500'},
    },
  },
  // Restaurant: {
  //   screen: DrawerRoutes,
  // },
  // Cart: {
  //   screen: TabRoutes
  // },
  // Category: {
  //   screen: TabRoutes
  // },
  // Profile: {
  //   screen: TabRoutes
  // }
})

export default createAppContainer(RootNavigator);

