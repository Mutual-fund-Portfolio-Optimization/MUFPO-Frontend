import { View, Text, StyleSheet, FlatList } from 'react-native'

interface listfund {
    name: string;
    percentage: number;
}

const Item = ({ name, percentage }: listfund) => {
    return (
        <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', flex: 1 }}>
            {name} {percentage}
        </Text>
    );
}

export default function FundTable({listfund}: {listfund: listfund[]}) {
    const renderItem = ({ item }: { item: listfund }) => {
        return (
            <Item name={item.name} percentage={item.percentage} />
        );
    };
    return (
        <View style={{ height: "50%", marginTop: 30, backgroundColor: "#374D50", marginHorizontal: 20, borderRadius: 20 }}>
            <View style={styles.container}>
                <View style={{ width: '100%', justifyContent: 'center' }}>
                    <View style={{ height: '30%', alignItems: 'center', justifyContent: "center" }}>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', marginTop: 10 }}>Fund List</Text>
                    </View>
                    <View style={{ flex: 1, marginLeft: 50, marginTop: 10 }}>
                        <FlatList data={listfund} keyExtractor={(item, index) => index.toString()} style={{ flex: 1 }} renderItem={renderItem} numColumns={2} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Set direction to row for horizontal layout
        flex: 1
    },
})
