import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colours from '../config/colours';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons 
                        name={icon} 
                        size={20} 
                        color={colours.grey} 
                        style={styles.icon}/>}
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    {icon && <MaterialCommunityIcons 
                        name="chevron-down" 
                        size={20} 
                        color={colours.grey}
                        style={styles.chevron} />}
                </View>
            </TouchableWithoutFeedback>
                <Modal visible={modalVisible} animationType="slide">
                    <Screen>
                        <Button title="close" onPress={() => setModalVisible(false)}/>
                        <FlatList
                            data={items}
                            keyExtractor={item => item.value.toString()}
                            renderItem={({ item }) => 
                                <PickerItem
                                    label={item.label}
                                    onPress={() => {
                                        setModalVisible(false);
                                        onSelectItem(item);
                                    }}/>}
                            />
                    </Screen>
                </Modal>
            

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colours.lightgrey,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 10,
        marginVertical: 10
    },
    icon: {
        margin: 10
    },
    text: {
        color: colours.grey,
        marginVertical: 8,
        flex:1
    },
    chevron: {
        marginVertical: 8
    }
})

export default AppPicker;