import React, { useState } from 'react'
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native'

const ReactActivityIndicator = () => {

    const [show, setShow] = useState(false)
    const displayLoader = () => {
        setShow(true)

        // after some time loader will be closed automatically
        setTimeout(() => {
            setShow(false)
        }, 3000)

    }

    return (
        <View style={styles.main}>
            {/* <ActivityIndicator size={200} color={'blue'} />
            <ActivityIndicator size={'small'} color={'blue'} /> */}

            <ActivityIndicator size={100} color={'green'} animating={show} />
            {
                show ? <ActivityIndicator size={100} color={'red'} /> : null
            }
            <Button title='show loader' onPress={displayLoader} />
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ReactActivityIndicator