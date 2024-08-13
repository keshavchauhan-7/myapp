import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef } from 'react'

const ReactRef = () => {
    const input = useRef();

    const updateInput = () => {
        console.warn("call")
        input.current.focus();
        input.current.setNativeProps({
            fontSize: 24,
            color:'red'
        })
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24, textAlign: 'center' }}>ReactRef</Text>
            <TextInput ref={input} style={styles.input} placeholder='Enter Name' />
            <TextInput style={styles.input} placeholder='Enter Password' />
            <Button title='update input' onPress={updateInput} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        borderColor: 'skyblue',
        borderWidth: 2,
        margin: 10
    }
})

export default ReactRef
