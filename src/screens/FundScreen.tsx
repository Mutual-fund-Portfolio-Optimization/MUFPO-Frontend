import { View, Text } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'

export default function FundScreen() {
  return (
    <View style={{flex: 1}}>
      <NavBar title='Optimization Portfolio' showHeart={false} />
      <Text>FundScreen</Text>
    </View>
  )
}