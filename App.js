import 'react-native-gesture-handler'; // MUST BE AT THE TOP
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerActions, NavigationContainer, TabActions } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen.jsx';
import PlanetsScreen from './screens/PlanetsScreen.jsx';
import MissionsScreen from './screens/MissionsScreen.jsx';
import CrewScreen from './screens/CrewScreen.jsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



export default function App() {
  const Stack = createNativeStackNavigator(); // this will contain the stack that will remember your trail of pages
  const Tabs = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
      <Drawer.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#0a0a1a' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '800' },
          drawerStyle: { backgroundColor: '#0a0a1a' },
          drawerActiveTintColor: '#5b4fff',
          drawerInactiveTintColor: '#8888aa',
        }}>
        <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
        <Drawer.Screen name="Crew" component={CrewScreen}></Drawer.Screen>
        <Drawer.Screen name="Mission" component={MissionsScreen}></Drawer.Screen>
        <Drawer.Screen name="Planets" component={PlanetsScreen}></Drawer.Screen>
      </Drawer.Navigator>
      
      
      {/*<Tabs.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#0a0a1a' },
          headerTintColor: '#509528',
          headerTitleStyle: { fontWeight: '800' },
          tabBarStyle: { backgroundColor: '#0a0a1a', borderTopColor: '#14142b' },
          tabBarActiveTintColor: '#259c29',
          tabBarInactiveTintColor: '#8888aa',
        }}>
        <Tabs.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />, tabBarBadge:4}}></Tabs.Screen>
        <Tabs.Screen name="Crew" component={CrewScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="people-circle-outline" size={size} color={color} />}}></Tabs.Screen>
        <Tabs.Screen name="Mission" component={MissionsScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="airplane-outline" size={size} color={color} />}}></Tabs.Screen>
        <Tabs.Screen name="Planets" component={PlanetsScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="planet-outline" size={size} color={color} />}}></Tabs.Screen>
      </Tabs.Navigator>*/}
    

    {/*<Stack.Navigator initialRouteName="Home" screenOptions={{
          headerStyle: { backgroundColor: '#0a0a1a' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '800' },
        }}>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Crew" component={CrewScreen}></Stack.Screen>
        <Stack.Screen name="Mission" component={MissionsScreen}></Stack.Screen>
        <Stack.Screen name="Planets" component={PlanetsScreen}></Stack.Screen>
        </NavigationContainer>
      </SafeAreaView>*/}
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
