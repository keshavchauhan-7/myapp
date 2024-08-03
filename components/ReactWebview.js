import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'

const ReactWebview = () => {
    return (
        <SafeAreaView style={styles.container}>
            <WebView style={styles.view} source={{ uri: "https://www.youtube.com/" }} />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        flex: 1,
    },

})

export default ReactWebview