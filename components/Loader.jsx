import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from '../assets/icon.png'
import Constants from 'expo-constants'

export default function Loader({ message, showVersion }) {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.image} />
            <Text style={styles.text}>{message || 'Scratch For Discord'}</Text>
            <Text style={styles.version}>{showVersion && showVersion === 'true' ? `${Constants.manifest.version.startsWith('v') ? '' : 'v'}${Constants.manifest.version}` : ''}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000000',
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image: {
        width: 100,
        height: 100
    },
    version: {
        fontSize: 22,
        textAlign: 'center'
    }
});