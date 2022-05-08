import React from 'react';
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

export default function App() {
  return (
    <Screen>
      <Icon
        name="email"
        size={50}
        backgroundColor="red"
        iconColor="white"/>
    </Screen>
  );
}