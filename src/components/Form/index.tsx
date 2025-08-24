import React from 'react';
import LogoBatMine from '../../../assets/logo-bat-small.png'
import { Text, View, Image, TextInput, Pressable } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import { styles } from './style';

interface FormProps {
    isActive: boolean,
    name: string,
    setName: (name: string) => void,
    phone: string,
    setPhone: (phone: string) => void,
    localization: string,
    setLocalization: (name: string) => void,
    observation: string,
    setObservation: (observation: string) => void,
    handleSend: () => void
}

export function Form({isActive, name, setName, phone, setPhone, localization, setLocalization, observation, setObservation, handleSend}: FormProps) {
    return (
        <View style={[
            styles.containerForm,
            { display: isActive ? "flex" : "none" }
        ]}>
            <Image
                source={LogoBatMine}
            />
            <View style={{gap: 5}}>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                    style={styles.textInputSimple}
                    placeholder='Digite seu nome'
                    value={name}
                    onChangeText={setName}
                />
            </View>
            <View style={{gap: 5}}>
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
            <View 
                // style={styles.containerInput}
                >
                <Text style={styles.label}>Localização atual</Text>
                <TextInput
                    style={styles.textInputMultiline}
                    placeholder="Digite sua mensagem"
                    multiline={true}
                    value={localization}
                    onChangeText={setLocalization}
                />
            </View>
            <View 
                // style={styles.containerInput}
            >
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
    );
}