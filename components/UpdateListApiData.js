import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const UpdateListApiData = () => {

    const [data, setData] = useState([]);

    const getApiData = async () => {
        const url = "http://10.0.2.2:3000/users";
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setData(result);
        }
    }

    const deleteUser = async (id) => {
        const url = "http://10.0.2.2:3000/users";
        let result = await fetch(`${url}/${id}`, {
            method: "delete"
        });
        result = await result.json();
        if (result) {
            console.warn('user deleted')
            getApiData();
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
                        <View style={{ flex: 1, marginHorizontal: 5 }}><Button onPress={() => deleteUser(item.id)} title='Delete' color={"red"} /></View>
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
        backgroundColor: 'white',
        shadowColor: '#000',
        elevation: 5,
        borderRadius: 5,
        margin: 5,
        padding: 8,
    }
})

export default UpdateListApiData