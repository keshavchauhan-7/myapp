import React, { useState } from 'react'
import { Button, StyleSheet, View, Text } from 'react-native'

const ReactCustomModal = () => {
    const [show, setShow] = useState(false)
    return (
        <View style={styles.container}>

            {
                show ?
                    <View style={styles.modal}>
                        <View style={styles.body}>
                            <Text style={styles.text}>This is a custom modal</Text>
                            <Button title='close' onPress={() => setShow(false)} />
                        </View>
                    </View>
                    :
                    null

            }
            <Button title='Open Dialog' onPress={() => setShow(true)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modal: {
        flex: 1,
        backgroundColor: 'rgba(50, 50, 50, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        backgroundColor: 'white',
        height: 200,
        width: 300,
        padding: 20,
        justifyContent: 'flex-end',
        borderRadius: 20
    }
})

export default ReactCustomModal
