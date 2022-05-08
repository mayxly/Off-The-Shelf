import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colours from '../config/colours';
import { Platform } from 'react-native-web';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={colours.grey} style={styles.icon}/>}
            <TextInput style={styles.textInput} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colours.lightgrey,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10
    },
    textInput: {
        fonrSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
    icon: {
        margin: 10
    }
})

export default AppTextInput;