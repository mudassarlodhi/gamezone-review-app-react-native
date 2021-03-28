import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View, StyleSheet, FlatList, TouchableWithoutFeedback, Keyboard  } from "react-native";
import Card from "../shared/card";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from "./reviewForm";

export default function Home({ navigation }){
    const [modalOpen , setModalOpen] = useState(false); 
    const [reviews , setReviews] = useState([
        {title: "Zelda Fresh Air" , rating : 5, body:"Lorem Ipsum" , key:"1"},
        {title: "Gotta Catch them All" , rating : 4, body:"Lorem Ipsum" , key:"2"},
        {title: "Not So Final Fantasy" , rating : 3, body:"Lorem Ipsum" , key:"3"},
        {title: "1 start Hotel" , rating : 1, body:"Lorem Ipsum" , key:"4"}
    ])
    /*
    const pressHandler = ()=>{
        // props.navigation.push("ReviewDetails")
        navigation.navigate("ReviewDetails")
    }
    */

    const addReview = (review)=>{
        review.key = new Date().getTime().toString();
        setReviews((preReviews)=>[review , ...preReviews])
        setModalOpen(false);
    }

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons style={{...styles.modalToggle , ...styles.modalClose}} name="close" size={24} onPress={()=>setModalOpen(false)} />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons name="add" size={24} style={styles.modalToggle} onPress={()=>setModalOpen(true)} />
            <FlatList
             data={reviews}
             renderItem={({ item })=>(
                 <TouchableOpacity onPress={()=>navigation.navigate("ReviewDetails" , item)}>
                    <Card>
                      <Text style={globalStyles.titleText}>{item.title}</Text>
                    </Card>
                 </TouchableOpacity>   
             )} />  
        </View>
    )
}


const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#f2f2f2",
        padding: 10,
        borderRadius: 10,
        alignSelf: "flex-end"
    },
    modalClose: {
        marginBottom: 10      
    },
    modalContent : {
        flex: 1,
        padding: 20
    }
})