import React from 'react';
import { View } from "react-native";

import AppText from './app/components/AppText';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';

export default function App() {
  return (
    <View style={{
      backgroundColor: "#f8f4f4",
      padding: 20,
      paddingTop: 100,
    }}>
      <Card
        title="Your Soul is a River"
        subTitle="Nikita Gill"
        price="$100"
        image={require("./app/assets/SoulBook.jpg")}>
      </Card>
    </View>
  );
}