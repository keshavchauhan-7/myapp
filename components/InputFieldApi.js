import React, { useState } from 'react'
import {Button, StyleSheet, Text, TextInput, View } from 'react-native'

const InputFieldApi = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');

    const saveData = async () => {
        const url = 'http://10.0.2.2:3000/users'
        let result = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({ name, age, email }),
        })
        result = await result.json();
    }

    return (
        <View>
            <Text style={{ fontSize: 24, textAlign: 'center' }}>InputFieldApi</Text>
            <TextInput style={styles.input} value={name} onChangeText={(text) => setName(text)} placeholder='Enter Name' />
            <TextInput style={styles.input} value={age} onChangeText={(text) => setAge(text)} placeholder='Enter Age' />
            <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)} placeholder='Enter Email' />
            <Button title='Save Data' onPress={saveData} />
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        backgroundColor: "#fff",
        shadowColor: "#000",
        elevation: 5,
        borderRadius: 20,
        margin: 10,
        paddingLeft: 20
    }
})

export default InputFieldApi