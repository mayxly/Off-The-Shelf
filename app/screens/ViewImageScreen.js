import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colours from '../config/colours';

function ViewImageScreen(props) {
    return (
        
        <View style={styles.container}>
        <View style={styles.closeIcon}>
            <MaterialCommunityIcons name="close" color="white" size={30}/>
        </View>
        <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name="trash-can-outline" color="white" size={30}/>
        </View>
            <Image 
                resizeMode="contain"
                style={styles.image} 
                source={require("../assets/SoulBook.jpg")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        position: "absolute",
        top: 40,
        left: 30
    },
    container: {
        backgroundColor: "#000",
        flex: 1,
    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30
    },
    image: {
        width: "85%",
        height: "100%",
        alignSelf:"center"
    }
})

export default ViewImageScreen;