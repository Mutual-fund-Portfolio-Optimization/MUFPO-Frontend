import { View, Text } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'

export default function LearnScreen() {
  return (
    <View style={{flex: 1}}>
      <NavBar title='Optimization Portfolio' showHeart={false} />
      <Text>LearnScreen</Text>
    </View>
  )
}