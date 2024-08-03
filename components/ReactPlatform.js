import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ReactPlatform = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Platform : {Platform.OS}</Text>
      {
        Platform.OS === 'android' ? (<View style={{ backgroundColor: 'green', height: 100, width: 100 }}></View>
        ) : (<View style={{ backgroundColor: 'red', height: 100, width: 100 }}></View>)
      }
      <Text style={styles.text}>Hello</Text>
      <Text>{JSON.stringify(Platform)}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  text: {
    color: Platform.OS == 'android'?'orange':'blue',
    fontSize:20
  }
})

export default ReactPlatform