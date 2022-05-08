import React from 'react';
import { View, Image, StyleSheet} from 'react-native';
import AppText from '../components/AppText';
import colours from '../config/colours';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require("../assets/SoulBook.jpg")}></Image>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Your Soul is a River</AppText>
                <AppText style={styles.subTitle}>Nikita Gill</AppText>
                <AppText style={styles.price}>$25</AppText>
                <ListItem 
                    image={require("../assets/kathyProfile.jpg")}
                    title="Kathy Laine"
                    subTitle="5 Listings">
                </ListItem>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 300
    },
    price: {
        color: colours.primary,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: -10
    },
    subTitle: {
        color: colours.grey,
        textTransform: "uppercase",
        fontSize: 15,
        marginTop: -5
    },
    title: {
        marginTop: -8,
        marginBottom: 5,
        fontWeight: "600",
        fontSize: 20
    }
})
export default ListingDetailsScreen;