import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const ComponentLoopFlatList = () => {

    const users =
        [
            {
                "id": 1,
                "name": "John Doe",
                "email": "john@mail.com"
            },
            {
                "id": 2,
                "name": "Jane Smith",
                "email": "jane@mail.com"
            },
            {
                "id": 3,
                "name": "James Peter",
                "email": "james@mail.com"
            },


        ]

    return (
        <View>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>Component in Loop with FlatList</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => <UsrerData item={item} />}
            />
        </View>
    )
}

const UsrerData = (props) => {
    const item = props.item;

    return (
        <View style={styles.box} >
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>{item.email}</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    item: {
        fontSize: 24,
        color: 'orange',
        flex: 1,
        margin: 2,
        textAlign: 'center'
    },
    box: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'orange',
        marginBottom: 10
    }
})

export default ComponentLoopFlatList