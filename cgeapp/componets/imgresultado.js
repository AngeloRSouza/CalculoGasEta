import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableHighlight, Image } from 'react-native'


export default props => {
    return (
        <View style={estilos.bloco}>
            {
                props.comb == '' ?
                    <Image
                        source={require('../assets/o.png')}
                        sytle={estilos.bomba}
                    />
                    :
                    props.comb == 'G' ?

                        <Image
                            source={require('../assets/g.png')}
                            sytle={estilos.bomba}
                        />
                        :
                        <Image
                            source={require('../assets/e.png')}
                            sytle={estilos.bomba}
                        />



            }

        </View>
    )
}
const estilos = StyleSheet.create({

    bomba: {
        resizeMode: 'center',
    },

    bloco: {
        marginBottom: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: 333,
        backgroundColor: 'white'

    }
})
