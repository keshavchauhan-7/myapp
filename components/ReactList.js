import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

const ReactList = () => {

  const users =
    [
      {
        "id": 1,
        "name": "John Doe"
      },
      {
        "id": 2,
        "name": "Jane Smith"
      },
      {
        "id": 3,
        "name": "Michael Johnson"
      },
      {
        "id": 4,
        "name": "Emily Davis"
      },
      {
        "id": 5,
        "name": "David Brown"
      }
    ]


  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: 'center' }}>List with Flat List Component</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item => item.id}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize:15,
    padding: 10,
    backgroundColor: 'blue',
    color:'white',
    borderColor:'black',
    borderWidth:1,
    margin:10
  }
})

export default ReactList;
