import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function LogoScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        const delay = 2000;
        const redirectTimeout = setTimeout(() => {
            navigation.navigate("Home");
        }, delay);

        return () => clearTimeout(redirectTimeout);
    }, [navigation])
    return (
        <View style={styles.init}>
            <Image source={require('../assets/Logo.png')} style={styles.image} />
            <Text style={styles.text}>MUFPO</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    init: {
        backgroundColor: '#EBF5FD',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#003F41'
    },
    image: {

    }
})