import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerForm: {
        paddingHorizontal: 25,
        paddingTop: 100,
        gap: 15
    },

    label: {
        color: '#383838',
        fontWeight: '700',
        fontSize: 20
    },

    textInputSimple: {
        borderColor: '#383838',
        borderWidth: 3,
        borderRadius: 15,
        textAlign: 'left',
        paddingLeft: 20,
        fontWeight: '500',
        fontSize: 20
    },

    textInputMultiline: {
        borderWidth: 3,
        borderColor: '#383838',
        borderRadius: 15,
        padding: 10,
        fontWeight: '500',
        fontSize: 20,
        height: 150,
        textAlignVertical: "top",
    },

    buttonSend: {
        backgroundColor: '#383838',
        color: 'white',
        fontSize: 30,
        borderRadius: 25,
        textAlign: 'center',
        paddingVertical: 15
    }
});