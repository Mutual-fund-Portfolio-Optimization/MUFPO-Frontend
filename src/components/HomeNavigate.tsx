import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

interface props {
    icon: string;
    iconSource: string;
    title: string;
    bgcolor: string;
    navigateTo: string
}

export default function HomeNavigate(props: props) {

    const navigation = useNavigation()    

    function clickHandler() {
        navigation.navigate(props.navigateTo)
    }

    return (
        <TouchableOpacity style={{backgroundColor: props.bgcolor, width: '40%', height: '20%', alignItems: 'center', justifyContent: 'center', borderRadius: 10}} onPress={clickHandler}>
            <Icon
                raised
                name={props.icon}
                type={props.iconSource}
                size={40}
            />
            <Text style={{color: "white", fontWeight: "bold", marginTop: 20}}>{props.title.toLocaleUpperCase()}</Text>
        </TouchableOpacity>
    )
}