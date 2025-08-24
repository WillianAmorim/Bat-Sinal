import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Text, View, Image, Pressable } from 'react-native';
import LogoBat from '../../../assets/logo-bat.png'
import { styles } from './style';
import {Form} from '../../components/Form'

export function Home() {
    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [localization, setLocalization] = useState<string>('')
    const [observation, setObservation] = useState<string>('')

    const [isActive, setIsActive] = useState<boolean>(false)

    const handleSend = () => {
        Alert.alert(
            "Dados Enviados",
            "Seus dados foram enviados com sucesso.",
        );

        setName('')
        setPhone('')
        setLocalization('')
        setObservation('')

    }

    const handleNextPass = () => {
        setIsActive(true)
    }

    return (
        <View style={styles.container}>
            <View style={[
                styles.containerHome,
                { display: isActive ? "none" : "flex" }
            ]}>
                <Image source={LogoBat} />
                <Pressable
                    onPress={handleNextPass}
                >
                    <Text style={styles.buttonHome}>Active bat signal</Text>
                </Pressable>
                <StatusBar style="auto" />
            </View>
            <Form 
                isActive={isActive}
                name={name}
                setName={setName}
                phone={phone}
                setPhone={setPhone}
                localization={localization}
                setLocalization={setLocalization}
                observation={observation}
                setObservation={setObservation}
                handleSend={handleSend}
            />
        </View>
    );
}