import React from 'react';
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import DrawerNavigator from "./routes/drawer";

// const getFonts = ()=>Font.loadAsync({
//     "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
//     "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf")
// })

export default function App() {
  // const [fontsLoaded , setFontsLoaded] = useState(false);
  let [fontsLoaded] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf")
  });

  if(fontsLoaded){
    return (
      <DrawerNavigator />
     )
  }
  else {
   return <AppLoading
    //  startAsync={getFonts}
    //  onFinish={()=>setFontsLoaded(true)}
    //  onError={()=>console.log(error)} 
    />
  }
 
}

