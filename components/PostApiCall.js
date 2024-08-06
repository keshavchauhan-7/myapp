import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const PostApiCall = () => {

    const saveApiData = async () => {

        const data = {
            "name": "abc",
            "age": 31,
            "email": "abc@mail"
        }

        const url = "http://10.0.2.2:3000/users"
        let result = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" }, // headera ka kaam hota h ki api ke andar jo data jaa rha h aur jo data aayega vo kis format mein hoga.
            body: JSON.stringify(data)
        })
        result = await result.json();
        console.warn(result)
    }

    return (
        <View>
            <Text style={{ fontSize: 24, textAlign: 'center' }}>PostApiCall</Text>
            <Button title='Save Data' onPress={saveApiData} />
        </View>
    )
}


const styles = StyleSheet.create({})

export default PostApiCall