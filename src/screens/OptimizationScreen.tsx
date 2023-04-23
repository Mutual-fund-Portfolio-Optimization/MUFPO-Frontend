import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'
import FundTable from '../components/FundTable'
import PieChart from 'react-native-pie-chart';
import { VictoryChart, VictoryPie, VictoryTheme } from 'victory-native';

const mockFund = [
  { name: "stock", percentage: 14.28 },
  { name: "Balance", percentage: 14.28 },
  { name: "Bond", percentage: 14.28 },
  { name: "Index", percentage: 14.28 },
  { name: "Income", percentage: 14.28 },
  { name: "Money Market", percentage: 14.28 },
  { name: "International", percentage: 14.28 }
];

const colorSerices = ['#2E8652', '#3BA566', '#26B44D', '#8BD1B7', '#4ECEB4', '#187498', '#4E96C1']

export default function OptimizationScreen() {
  return (
    <View style={{ flex: 1 }}>
      <NavBar title='Optimization Portfolio' showHeart={false} />
      <View style={{ flex: 1, height: "30%", width: "100%", justifyContent: "center", alignItems: "center" }}>
        <VictoryPie width={300}
          data={mockFund.map(item => item.percentage)}
          labels={mockFund.map(mockFund => mockFund.name.toString())}
          colorScale={colorSerices
          } />
      </View>
      <View style={{ flex: 1, backgroundColor: "#EBF5FD" }}>
        <FundTable listfund={mockFund} />
      </View>
    </View>
  )
}

