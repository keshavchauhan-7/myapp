import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const ListApiData = () => {

    const [data, setData] = useState([]);

    const getApiData = async () => {
        const url = "http://10.0.2.2:3000/users";
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setData(result);
        }
    }

    useState(() => {
        getApiData();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24, textAlign: 'center' }}>ListApiData</Text>
            <View style={styles.dataWrapper}>
                <View style={{ flex: 1 }}><Text>Name</Text></View>
                <View style={{ flex: 2 }}><Text>Age</Text></View>
                <View style={{ flex: 2 }}><Text>Operations</Text></View>
            </View>
            {
                data.length ?
                    data.map((item) => <View style={styles.dataWrapper}>
                        <View style={{ flex: 1 }}><Text>{item.name}</Text></View>
                        <View style={{ flex: 1 }}><Text>{item.age}</Text></View>
                        <View style={{ flex: 1 }}><Button title='Delete' /></View>
                        <View style={{ flex: 1 }}><Button title='Update' /></View>
                    </View>)
                    : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    dataWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'orange',
        margin: 5,
        padding: 8
    }
})

export default ListApiData
