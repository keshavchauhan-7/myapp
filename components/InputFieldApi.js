import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'

const InputFieldApi = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');

    const [nameError, setNameError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [emailError, setEmailError] = useState('');


    const saveData = async () => {

        if (!name) {
            setNameError(false)
        }

        if (!name) {
            return false
        }


        const url = 'http://10.0.2.2:3000/users'
        let result = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({ name, email, age }),
        })
        result = await result.json();
        if (result) {
            console.warn('data is added')
        }
    }

    return (
        <View>
            <Text style={{ fontSize: 24, textAlign: 'center' }}>InputFieldApi</Text>
            <TextInput style={styles.input} value={name} onChangeText={(text) => setName(text)} placeholder='Enter Name' />
            {nameError ? <Text>Enter knjdfgname</Text> :null}
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