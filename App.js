import React, { useState } from 'react';
import { View } from "react-native";
import AppText from './app/components/AppText';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import PickerItem from './app/components/PickerItem';

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
]
export default function App() {
  const [category, setCategory] = useState();
  return (
    <Screen>
      <AppPicker 
          selectedItem={category}
          onSelectItem={item => setCategory(item)}
          items={categories}
          icon="apps" 
          placeholder="Category"/>
      <AppTextInput placeholder="Email" icon="email"/>
    </Screen>
  );
}