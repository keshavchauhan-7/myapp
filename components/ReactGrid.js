import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ReactGrid = () => {

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
      },

      {
        "id": 6,
        "name": "John Doe"
      },
      {
        "id": 7,
        "name": "Jane Smith"
      },
      {
        "id": 8,
        "name": "Alice Johnson"
      },
      {
        "id": 9,
        "name": "Bob Brown"
      },
      {
        "id": 10,
        "name": "Charlie Davis"
      },

    ]
  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: 'center' }}>Grid with Dynamic Data </Text>
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        {
          users.map((item) => <Text style={styles.item}>{item.name}</Text>)
        }
      </View>


    </View>
  )

}

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    backgroundColor: 'blue',
    color: '#fff',
    margin: 5,
    padding: 5,
    width: 120,
    height: 120,
    textAlignVertical: 'center',
    textAlign: 'center'
  }
})

export default ReactGrid;
