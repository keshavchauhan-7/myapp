import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ReactAsyncStorage = () => {

    const [user, setUser] = useState('');

    const setData = async () => {
        AsyncStorage.setItem("user", "hello")
    }

    const getData = async () => {
        const name = await AsyncStorage.getItem("user");
        setUser(name);
    }

    const removeData = async () => {
        await AsyncStorage.removeItem("user");
        setUser('');
    }

    return (
        <View>
            <Text style={{ fontSize: 24, textAlign: 'center' }}>ReactAsyncStorage</Text>
            <Text style={{ fontSize: 24, textAlign: 'center', color: 'skyblue', margin: 10 }}>{user}</Text>
            <View>
                <Button title='set data' onPress={setData} />
                <Button title='get data' onPress={getData} />
                <Button title='remove data' onPress={removeData} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ReactAsyncStorage
   