import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import colours from '../config/colours';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colours.lightgrey}
                onPress={onPress}>
                <View style={styles.container}>
                    <Image style={styles.image} source={image}></Image>
                    <View>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.subTitle}>{subTitle}</AppText>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        marginTop: 10,
        fontWeight: "700",
        fontSize: 16
    },
    subTitle: {
        color: colours.grey,
        fontSize: 15
    }
})
export default ListItem;