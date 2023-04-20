import { View, Text } from 'react-native'
import React from 'react'
import TrendingCard from './TrendingCard'

export default function Trending() {
    return (
        <View style={{ height: '20%', backgroundColor: '#007F76', marginTop: 4, padding: 15 }}>
            <Text style={{ fontWeight: 'bold', color: "white" }}>Trending Mutual Fund</Text>
            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: 20, gap: 10 }}>
                <TrendingCard name="SCBEMS" price={5.55} profit="+6.28" />
                <TrendingCard name="SCBEMS" price={5.55} profit="+6.28" />
                <TrendingCard name="SCBEMS" price={5.55} profit="+6.28" />
            </View>
        </View>
    )
}