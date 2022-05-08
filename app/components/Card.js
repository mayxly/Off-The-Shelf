import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import colours from '../config/colours';
import AppText from './AppText';

function Card({ title, subTitle, price, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}></Image>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
                <AppText style={styles.price}>{price}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colours.white,
        marginBottom: 20,
        overflow: "hidden"
    },
    detailsContainer: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 200,
    },
    price: {
        color: colours.primary,
        fontWeight: "bold",
        marginTop: 5
    },
    subTitle: {
        color: colours.grey,
        textTransform: "uppercase",
        fontSize: 12,
        marginTop: -5
    },
    title: {
        marginBottom: 5,
        fontWeight: "600"
    }
})

export default Card;