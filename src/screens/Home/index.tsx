import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Text, View, Image, TextInput, ScrollView, Pressable } from 'react-native';
import LogoBat from '../../../assets/logo-bat.png'
import LogoBatMine from '../../../assets/logo-bat-small.png'

import { styles } from './style';
import { MaskedTextInput } from 'react-native-mask-text';

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
            <View style={[
                styles.containerForm,
                { display: isActive ? "flex" : "none" }
            ]}>
                <Image
                    source={LogoBatMine}
                />
                <View style={styles.containerInput}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput
                        style={styles.textInputSimple}
                        placeholder='Digite seu nome'
                        value={name}
                        onChangeText={setName}
                    />
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.label}>Telefone</Text>
                    <MaskedTextInput
                        mask="(99) 99999-9999"
                        onChangeText={(text, rawText) => setPhone(rawText)}
                        keyboardType="phone-pad"
                        placeholder="Digite seu telefone"
                        value={phone}
                        style={styles.textInputSimple}
                    />
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.label}>Localização atual</Text>
                    <TextInput
                        style={styles.textInputMultiline}
                        placeholder="Digite sua mensagem"
                        multiline={true}
                        value={localization}
                        onChangeText={setLocalization}
                    />
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.label}>Observação</Text>
                    <TextInput
                        style={styles.textInputMultiline}
                        placeholder="Digite sua mensagem"
                        multiline={true}
                        value={observation}
                        onChangeText={setObservation}
                    />
                </View>

                <Pressable
                    onPress={handleSend}
                >
                    <Text
                        style={styles.buttonSend}
                    >
                        Enviar
                    </Text>
                </Pressable>

            </View>
        </View>
    );
}