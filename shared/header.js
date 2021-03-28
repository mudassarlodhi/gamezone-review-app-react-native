import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({navigation, title , withImage}){
   const openMenu = ()=> {
    navigation.openDrawer();
   }

   let header;
   if(!withImage){
     header = <View style={styles.header}>
        <MaterialIcons name="menu" size={28} style={styles.icon} onPress={openMenu} />
        <View style={styles.headerTitle}>
            <Image source={require(`../assets/heart_logo.png`)} style={styles.headerImage} />
           <Text style={styles.headerText}>{title}</Text>
        </View>   
      </View>
   }
   else {
     header = <ImageBackground source={require("../assets/game_bg.png")} style={styles.header}>
            <MaterialIcons name="menu" size={28} style={styles.icon} onPress={openMenu} />
            <View style={styles.headerTitle}>
                <Image source={require(`../assets/heart_logo.png`)} style={styles.headerImage} />
            <Text style={styles.headerText}>{title}</Text>
            </View>   
      </ImageBackground>
   }

    return header
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    headerText : {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
        letterSpacing: 1
    },
    icon : {
        position: "absolute",
        left: 10
    },
    headerImage: {
        width: 26, 
        height:26,
        marginHorizontal: 10
    },
    headerTitle: {
        flexDirection: "row"
    }
})