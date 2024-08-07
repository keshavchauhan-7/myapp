import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const ReactFormValidation = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');

    const [nameError, setNameError] = useState(false);
    const [ageError, setAgeError] = useState(false);
    const [emailError, setEmailError] = useState(false);


    const saveData = async () => {


        if (!name) {
            setNameError(true);
        } else {
            setNameError(false)
        }

        if (!age) {
            setAgeError(true);
        } else {
            setAgeError(false)
        }

        if (!email) {
            setEmailError(true);
        } else {
            setEmailError(false)
        }

        if (!name || !age || !email) {
            return false
        }

        console.warn("next")

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
            <Text style={{ fontSize: 24, textAlign: 'center' }}>Form Validation</Text>
            <TextInput style={styles.input} value={name} onChangeText={(text) => setName(text)} placeholder='Enter Name' />
            {nameError ? <Text style={styles.errorText}>Please enter valid name</Text> : null}

            <TextInput style={styles.input} value={age} onChangeText={(text) => setAge(text)} placeholder='Enter Age' />
            {ageError ? <Text style={styles.errorText}>Please enter valid age</Text> : null}

            <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)} placeholder='Enter Email' />
            {emailError ? <Text style={styles.errorText}>Please enter valid mail</Text> : null}


            <Button title='Save Data' onPress={saveData} />
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        backgroundColor: "#fff",
        shadowColor: "#000",
        elevation: 5,
        borderRadius: 20,
        margin: 20,
        paddingLeft: 20,
        marginBottom: 5
    },
    errorText: {
        color: 'red',
        marginLeft: 30
    }
})

export default ReactFormValidation