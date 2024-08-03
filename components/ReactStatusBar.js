import React, { useState } from 'react'
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'

const ReactStatusBar = () => {
    // const [hide, setHide] = useState(false)
    // const [barStyle, setBarStyle] = useState('default')
    return (
        <View style={styles.container}>
            <StatusBar
                // backgroundColor={"grey"}
                // barStyle={barStyle}
                // hidden={hide}
            />

            {/* <Button title='Toogle Status Bar' onPress={() => setHide(!hide)} />
            <Button title='Update Style' onPress={() => setBarStyle('dark-content')} /> */}
        </View>
    )
}


const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    // }
})

export default ReactStatusBar