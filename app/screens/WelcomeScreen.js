import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import colours from '../config/colours';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        blurRadius={5}
            style={styles.background}
            source={require("../assets/bookbackground.jpg")}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require("../assets/OTFlogo.png")}/>
                    <Text style={styles.tagline}>Clear your bookshelf.</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <AppButton title="Login"></AppButton>
                    <AppButton title="Register" colour="secondary"></AppButton>
                </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    buttonContainer: {
        padding: 20,
        width: "100%",
    },
    logo: {
        width: 200,
        height: 200,
    },

    logoContainer: {
        position: "absolute",
        top: 20,
        alignItems: "center"
    },
    tagline: {
        fontsize: 25,
        fontWeight: "600",
        top: -35,

    
    }
})

export default WelcomeScreen;