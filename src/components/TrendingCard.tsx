import { View, Text } from 'react-native'
import React from 'react'

interface props {
    name: string;
    price: number;
    profit: string
}

export default function TrendingCard(props: props) {
    const isProfile = props.profit.includes('+')
    return (
        <View style={{ backgroundColor: "#D9D9D9", width: "30%", borderRadius: 20, height: "100%", padding: 15, gap: 15 }}>
            <Text>{props.name}</Text>
            <Text>{props.price}</Text>
            <Text style={{color: (isProfile?"green":"red")}}>{props.profit}</Text>
        </View>
    )
}