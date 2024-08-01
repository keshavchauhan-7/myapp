import React, { useState } from 'react'
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'

const ReactStatusBar = () => {
    const [hide, setHide] = useState(false)
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={"orange"}
                barStyle={'default'}
                hidden={false}
            />

            <Button title='Toogle Status Bar' />
            <Button title='Update Style' />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})

export default ReactStatusBar