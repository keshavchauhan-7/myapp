import React, { Component, useState } from 'react'
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'

const ReactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [display, setDisplay] = useState(false);
    const resetFormData = () => {
        setName("");
        setEmail("");
        setPassword("");
        setDisplay(false);
    }
    return (
        <View>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>Form in React-Native</Text>
            {/* <Text>name: {name}</Text> */}
            <TextInput
                style={styles.text}
                placeholder='Enter User Name'
                onChangeText={(text) => setName(text)}
                value={name}
            />

            <TextInput
                style={styles.text}
                placeholder='Enter User Password'
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />

            <TextInput
                style={styles.text}
                placeholder='Enter User Email'
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <View style={{ marginBottom: 10 }}>
                <Button color={'green'} title='print kar do' onPress={() => setDisplay(true)} />
            </View>

            <Button color={'red'} title='clear kar do' onPress={resetFormData} />
            <View>
                {
                    display ?
                        <View>
                            <Text style={{ fontSize: 20 }}> User Name is : {name}</Text>
                            <Text style={{ fontSize: 20 }}> User Password is : {password}</Text>
                            <Text style={{ fontSize: 20 }}> User Email is : {email}</Text>
                        </View>
                        : null
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: "blue",
        borderWidth: 2,
        borderColor: 'blue',
        margin: 10,
    }
})

export default ReactForm