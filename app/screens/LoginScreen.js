import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

function LoginScreen(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <Screen style={styles.container}>
            <Image 
                style={styles.logo}
                source={require("../assets/OTFlogo.png")}/> 
                <AppTextInput
                    placeholder="Email"
                    icon="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    onChangeText={text => setEmail(text)}
                    textContentType="emailAddress"/>
                <AppTextInput
                    placeholder="Password"
                    icon="lock"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                    textContentType="password"/>
                <AppButton title="Login" onPress={() => console.log(email, password)}/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 130,
        height: 130, 
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 20
    },
    container: {
        padding: 13
    }
})

export default LoginScreen;