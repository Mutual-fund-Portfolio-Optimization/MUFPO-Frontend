import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'
import FundTable from '../components/FundTable'
import PieChart from 'react-native-pie-chart';
import { VictoryChart, VictoryPie, VictoryTheme } from 'victory-native';
import { FlatList } from 'react-native-gesture-handler';

interface listfund {
  name: string;
  percentage: number;
}

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

  const [fund, setFund] = React.useState(mockFund);
  const [selectedFund, setSelectedFund] = React.useState<listfund>();

  function renderExpenseSummary() {
  const renderItem = ({item}: {item: listfund}) => { // Changed parameter name from `listfund` to `item`
    return (
      <TouchableOpacity 
        style={{flexDirection: 'row', height: 40, paddingHorizontal: 20, borderRadius: 10}} 
        onPress={() => {
          let fundType = item.name; // Fixed variable name from `listfund.name` to `item.name`
          setSelectedFundByName(fundType);
        }}
      >
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: 20, height: 20, backgroundColor: "", borderRadius: 5}} />
          <Text style={{marginLeft: 10, color: ""}}>{item.name}</Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={{}}>{item.percentage}</Text> 
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{padding: 20}}>
      <FlatList data={mockFund} renderItem={renderItem} keyExtractor={item => `${item.name}`} />
    </View>
  );
}


  function setSelectedFundByName(name: string) {
    let fund = mockFund.filter(fund => fund.name == name)
    setSelectedFund(fund[0]);
  }

  return (
    <View style={{ flex: 1 }}>
      <NavBar title='Optimization Portfolio' showHeart={false} />
      <View style={{ flex: 1, height: "30%", width: "100%", justifyContent: "center", alignItems: "center" }}>
        <VictoryPie width={300}
          data={mockFund.map(item => item.percentage)}
          labels={mockFund.map(mockFund => mockFund.name.toString())}
          colorScale={colorSerices}
          events={[{target: "data",
            eventHandlers: {
              onPress: () => {
                return [{
                  target: "labels",
                  mutation: (props) => {
                    let fund = mockFund[props.index]
                    console.log(fund)
                  }
                }]
              }
            }
          }]}
          />
      </View>
      <View style={{ flex: 1, backgroundColor: "#EBF5FD" }}>
        <FundTable listfund={mockFund} />
      </View>
    </View>
  )
}

