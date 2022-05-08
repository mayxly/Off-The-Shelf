import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colours from '../config/colours';
import Icon from '../components/Icon';

const menuItems = [
    { 
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colours.primary
        }
    },
    { 
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colours.secondary
        }
    }
]

function AccountScreen(props) {
    return (
       <Screen>
           <View style={styles.container}>
                <ListItem 
                    title="May"
                    subTitle="mayxly@gmail.com"
                    image={require("../assets/kathyProfile.jpg")}/>
           </View>
           <View style={styles.container}>
               <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({ item }) => 
                        <ListItem
                            title={item.title}
                            ImageComponent={
                                <Icon 
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}/>
                            }
                        />
                    }
                 />
           </View>
           <ListItem
                title="Log Out"
                ImageComponent={
                    <Icon name="logout" backgroundColor="#ffe66d"/>
                }/>
       </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
})

export default AccountScreen;