import React, {useState } from 'react'
import { Button, Text, View } from 'react-native'

const ReactState = () => {

    const [name,setName] = useState("Keshav");

    function textChange(){
        setName("Chauhan")
    }

    return (
      <View>
        <Text style={{fontSize:20, textAlign:'center' }}>State in React-Native</Text>
        <Text>{name}</Text>
        <Button title='Update Name' onPress={textChange}/>
      </View>
    )
  }

export default ReactState