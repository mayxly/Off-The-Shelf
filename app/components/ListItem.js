import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import colours from '../config/colours';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({ title, subTitle, image, ImageComponent, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colours.lightgrey}
                onPress={onPress}>
                <View style={styles.container}>
                    {ImageComponent}
                    {image && <Image style={styles.image} source={image}/>}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colours.lightgrey
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent:"center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: "700",
        fontSize: 16
    },
    subTitle: {
        color: colours.grey,
        fontSize: 15
    }
})
export default ListItem;