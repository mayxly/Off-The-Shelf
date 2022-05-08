import React from 'react';
import { View, StyleSheet } from 'react-native';
import colours from '../config/colours';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ListItemDeleteAction(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                name="trash-can"
                size={35}
                color={colours.white}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colours.red,
        width: 70,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default ListItemDeleteAction;