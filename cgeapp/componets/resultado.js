import React from 'react';
import { Text, View, StyleSheet, TextInput, } from 'react-native'


export default props => {
    return (
        <View style={estilos.bloco}>
            <Text style={estilos.text1}>Melhor combustível: {props.resultado}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({

    bloco: {
        marginBottom: 10
    },
    text1: {
        fontSize: 20,
        textAlign: 'center',
        alignItems: 'center'

    }
})