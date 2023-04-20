import { View, Text } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'

export default function OptimizationScreen() {
  return (
    <View>
      <NavBar title='Optimization Portfolio' showHeart={false}/>
      <Text>Optimization</Text>
    </View>
  )
}