import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CATEGORIES } from './data/dummy-data';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesScreen from './screens/FavoritesScreen';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import MealsOverviewScren from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
function DrawerNavigator(){
  return <Drawer.Navigator
  screenOptions={{
    headerStyle:{backgroundColor:"#351401"},
    headerTintColor:'white',
    sceneContainerStyle:{backgroundColor:"#3f2f25"},
    drawerContentStyle:{backgroundColor:"#351401"},
    drawerActiveTintColor:"#351401",
    drawerActiveBackgroundColor:"#e4baa1",
    drawerInactiveTintColor:"#FFFFFF"
  }}
  >
    <Drawer.Screen
    name="Categories"
    component={CategoriesScreen}
    options={{
      title:"All Categories",
      drawerIcon:({color,size})=><Entypo name="list" size={24} color={color} />
    }}

    />
    <Drawer.Screen
    name="Favorites"
    component={FavoritesScreen}
    options={{
      drawerIcon:({color,size}) => <AntDesign name="star" size={24} color={color} />
    }}
    />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <FavoritesContextProvider>
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle:{backgroundColor:"#351401"},
        headerTintColor:'white',
        contentStyle:{backgroundColor:"#351401"}
      }}
      >
        <Stack.Screen 
        name="Drawer"
        component={DrawerNavigator}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen
        name="MealsOverView"
        component={MealsOverviewScren}
        />
        <Stack.Screen
        name="MealsDetail"
        component={MealDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </FavoritesContextProvider>
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
