import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colours from '../config/colours';

function AppButton({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        color: colours.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold"
    },
    button: {
        backgroundColor: colours.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%"
    }
    

})

export default AppButton;