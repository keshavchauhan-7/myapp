import React, { Component, useState } from 'react'
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'

const ReactTextInput = () => {
    const[name, setName] = useState();
    return (
        <View>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>Handle Text Input</Text>
            <Text style={{ fontSize: 20, marginLeft:10}}>Your name is : {name}</Text>

            <TextInput
                style={styles.text}
                placeholder="Enter your name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <Button title='clear input value' onPress={()=>setName('')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: "blue",
        borderWidth: 2,
        borderColor: 'green',
        margin: 10,
    }
})

export default ReactTextInput