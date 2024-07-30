import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, ScrollView } from 'react-native'

const ReactMapList = () => {

    const users =
        [
            {
                "id": 1,
                "name": "John Doe"
            },
            {
                "id": 2,
                "name": "Jane Smith"
            },
            {
                "id": 3,
                "name": "Michael Johnson"
            },
            {
                "id": 4,
                "name": "Emily Davis"
            },
            {
                "id": 5,
                "name": "David Brown"
            },

            {
                "id": 6,
                "name": "John Doe"
            },
            {
                "id": 7,
                "name": "Jane Smith"
            },
            {
                "id": 8,
                "name": "Alice Johnson"
            },
            {
                "id": 9,
                "name": "Bob Brown"
            },
            {
                "id": 10,
                "name": "Charlie Davis"
            },
            {
                "id": 11,
                "name": "Eve Martinez"
            },
            {
                "id": 12,
                "name": "Frank Wilson"
            },
            {
                "id": 13,
                "name": "Grace Lee"
            },
            {
                "id": 14,
                "name": "Henry Clark"
            },
            {
                "id": 15,
                "name": "Ivy Lewis"
            }

        ]


    return (

        <View>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>List with map function</Text>
            <ScrollView>
                {
                    users.map((item) => <Text style={styles.item}>{item.name}</Text>)
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        fontSize: 15,
        padding: 10,
        backgroundColor: 'blue',
        color: 'white',
        borderColor: 'black',
        borderWidth: 1,
        margin: 10
    }
})

export default ReactMapList;


//map function basically apne andar ek loop chala deta h aur jo bhi hum is function ke andar likhenge ye usko return bhi kar deta h  
