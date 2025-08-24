import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import LogoBat from '../../../assets/logo-bat.png'

import { styles } from './style';

export function Home() {
    return (
        <View style={styles.container}>
            <Image source={LogoBat}/>
            <Text style={styles.buttonHome}>Active bat signal</Text>
            <StatusBar style="auto" />
        </View>
    );
}