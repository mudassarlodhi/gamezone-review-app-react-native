import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import About from "../screens/about";
import Header from "../shared/header";

const Stack = createStackNavigator()

export default Navigator = (props) => {
 const { navigation } = props;
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#eee' , height: 70 }, 
        headerTintColor: "#444"
       }}>
        <Stack.Screen name='About' component={About} options={{
          header: ()=><Header title="About GameZone" navigation={navigation} />
        }}  />
      </Stack.Navigator>
  )
}