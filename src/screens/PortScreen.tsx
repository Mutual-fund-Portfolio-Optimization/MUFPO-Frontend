import { View, Text } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'

export default function PortScreen() {
  return (
    <View style={{flex: 1}}>
      <NavBar title='Optimization Portfolio' showHeart={false} />
      <Text>Port</Text>
    </View>
  )
}