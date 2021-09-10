
import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView } from 'react-native'
import Gasolina from './componets/gasolina'
import Etanol from './componets/etanol'
import BtnCalular from './componets/btnCalcular'
import Resultado from './componets/resultado'
import ImgResultado from './componets/imgresultado'

export default function App() {

  const [gasolina, setGasolina] = useState(0)
  const [etanol, setEtanol] = useState(0)
  const [resultado, setResultado] = useState('')

  const calcular = () => {
    if (!gasolina) {
      alert('informe o preço da Gasolina')
      return
    }
    if (!etanol) {
      alert('informe o preço do Etanol')
      return
    }

    let res
    let calc = ((etanol / gasolina) * 100).toFixed(1)
    if (calc > 70) {
      res = 'Gasolina'
    } else {
      res = 'Etanol'
    }

    alert('O Etanol está custando ' + calc + '% da Gasolina. Portanto é melhor abastecer com ' + res)
    setResultado(res)
  }

  const limpar = () => {
    setResultado('')
  }
  const setarGasolina = (v) => {
    limpar()
    setGasolina(v)
  }
  const setarEtanol = (v) => {
    limpar()
    setEtanol(v)
  }



  return (
    <View style={estilos.fundo}>
      <SafeAreaView style={estilos.principal}>
        <Gasolina aoModificar={setarGasolina} />
        <Etanol aoModificar={setarEtanol} />
        <BtnCalular aoPressionar={calcular} />
        <Resultado resultado={resultado} />
        <ImgResultado comb={resultado.charAt(0)} />
      </SafeAreaView>
    </View>

  )
}
const estilos = StyleSheet.create({
  principal: {
    padding: 15,
  },
  fundo: {
    backgroundColor: 'white',
    flex: 1

  }
})



