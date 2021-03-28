import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Card from "../shared/card";
import { globalStyles, imagePaths } from "../styles/global";

export default function ReviewDetails({route}){
    /*
    const pressHandler = ()=>{
        navigation.goBack();
        // navigation.navigate("ReviewDetails")
    }
    */
   const { title, body, rating } = route.params;
    return (
        <View style={globalStyles.container}>
           <Card>
              <Text>{title}</Text>
              <Text>{body}</Text>
              <Text>{rating}</Text>
              <View style={styles.rating}>
                  <Text>GameZone rating:</Text>
                  <Image style={{
                        width: rating * 21,
                        height: 21,
                        resizeMode: 'contain'
                  }} source={imagePaths[rating]} />
              </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: "#eee"
    }
})