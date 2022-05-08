import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Screen from '../components/Screen';
import colours from '../config/colours';

const listings = [
    {
        id: 1,
        title: "Soul Book",
        subtitle: "Kate",
        price: 25,
        image: require("../assets/SoulBook.jpg")
    },
    {
        id: 2,
        title: "Soul Book",
        subtitle: "Kate",
        price: 25,
        image: require("../assets/SoulBook.jpg")
    }
];

function ListingsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={item.subtitle}
                        price={"$" + item.price}
                        image={item.image}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colours.lightgrey,
        padding: 20
    }
})

export default ListingsScreen;