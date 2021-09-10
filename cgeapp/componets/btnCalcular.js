import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableHighlight, } from 'react-native'


export default props => {
    return (
        <View style={estilos.bloco}>
            <TouchableHighlight
                style={estilos.btn}
                onPress={props.aoPressionar}>
                <Text style={estilos.txtBtn}>Calcular</Text>
            </TouchableHighlight>

        </View >
    )
}

const estilos = StyleSheet.create({

    bloco: {
        marginBottom: 10
    },
    txt: {
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 7,
    },
    btn: {
        backgroundColor: '#800',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7

    },
    txtBtn: {
        textTransform: 'uppercase',
        color: '#fff',
        padding: 15,
        fontSize: 20
    }
})