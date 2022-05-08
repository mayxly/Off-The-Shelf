import React from 'react';
import { Image, StyleSheet, View } from 'react-native';


function ViewImageScreen(props) {
    return (
        
        <View style={styles.container}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
            <Image 
                resizeMode="contain"
                style={styles.image} 
                source={require("../assets/stoolbooks.jpg")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: "#fc5c65",
        position: "absolute",
        top: 40,
        left: 30
    },
    container: {
        backgroundColor: "#000",
        flex: 1,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: "#fff",
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