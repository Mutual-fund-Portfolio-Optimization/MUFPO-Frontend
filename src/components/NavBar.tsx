import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';

interface props {
    title: string;
    showHeart: boolean
}

export default function NavBar(props: props) {
    return (
        <View style={{ height: '15%', backgroundColor: '#73B3B8' }}>
            <View style={styles.fixedArrow}>
                <Icon name='arrow-left' type='font-awesome-5' size={20}/>
            </View>
            {props.showHeart ?? <View style={styles.fixedHeart}>
                <Icon name='heart' type='font-awesome-5' size={20}/>
            </View>}
            <View style={{ alignItems: 'center', justifyContent: 'flex-end', height: '80%'}}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>{props.title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    fixedArrow: {
      position: 'absolute',
      top: 50,
      left: -370,
      right: 0,
      bottom: 0,
    },
    fixedHeart: {
        position: 'absolute',
        top: 50,
        left: 370,
        right: 0,
        bottom: 0,
      },
  });
  
