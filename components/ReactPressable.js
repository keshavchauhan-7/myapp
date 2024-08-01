import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const ReactPressable = () => {
    return (
        <View style={styles.main}>
            <Pressable
                onPress={()=> console.warn('press')}
                onLongPress={()=>console.warn('long press')}
                onPressIn={() => { console.warn('press in') }}
                onPressOut={() => { console.warn('press out') }}
            >
                <Text style={styles.text}>Press me!</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: '#fff',
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        textAlign: 'center',
        shadowColor: '#000',
        elevation: 5,
    }
})

export default ReactPressable