import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const Stack = createStackNavigator()

export default Navigator = (props) => {
  const { navigation } = props;
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#eee' , height: 70 }, 
        headerTintColor: "#444"
       }}>
        <Stack.Screen name='Home' component={Home} options={{
          header: ()=><Header withImage title="GameZone" navigation={navigation}  />
          }}  />
        <Stack.Screen name='ReviewDetails' component={ReviewDetails} options={{
          title:"Review Details"
         }} />
      </Stack.Navigator>
  )
}