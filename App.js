import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Home,
  Login,
  Signup,
  Welcome,
  Create_edit,
  Favorite,
  EditNote,
  User,
  Create_cat,
} from "./screens";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Create_edit"
          component={Create_edit}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Favorite"
          component={Favorite}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EditNote"
          component={EditNote}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Create_cat"
          component={Create_cat}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
