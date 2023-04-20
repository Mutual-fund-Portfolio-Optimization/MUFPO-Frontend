import { Image, Text, View, StyleSheet } from 'react-native'
import React from 'react'
import Trending from '../components/Trending'
import HomeNavigate from '../components/HomeNavigate'

export default function HomeScreen() {
    return (
        <View style={styles.base}>
            <View style={styles.navbar}>
                <Image source={require('../assets/Logo.png')} style={{ height: '50%', width: '20%', resizeMode: 'cover' }} />
                <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 20 }}>MUFPO</Text>
            </View>
            <Trending />
            <View style={{width: '100%', height: '100%',  display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: 10, gap: 10, alignItems: 'center', justifyContent: 'center', marginTop: 40}}>
                <HomeNavigate icon='briefcase' iconSource='font-awesome' title='Visit Your Port' bgcolor='#16C68A' navigateTo='Port'/>
                <HomeNavigate icon='wallet-outline' iconSource='ionicon' title='explor the fund' bgcolor='#E65252' navigateTo='Fund'/>
                <HomeNavigate icon='sliders' iconSource='font-awesome' title='portfolio optimization' bgcolor='#12BED6' navigateTo='Optimize'/>
                <HomeNavigate icon='book-open' iconSource='font-awesome-5' title='learn mutual fund' bgcolor='#F0DDB8' navigateTo='Learn'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    base: {
        backgroundColor: '#EBF5FD',
        height: '100%'
    },
    navbar: {
        height: '20%',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }

})