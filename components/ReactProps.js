import React, { Component, useState } from 'react'
import { Button, Text, View } from 'react-native'

const ReactProps =(props)=> {

    const [name,setName] = useState("Keshav")

    return (
      <View>
        <Text style={{fontSize:20, textAlign:'center' }}>Props in React-Native</Text>
        <Text>{props.name}</Text>
        <Button title='update props' onPress={()=>{setName("Chauhan")}}/>
        <User name={name} age={20}/>
      </View>
    )
  }


  const User = (props) =>{
    return(
        <View style={{backgroundColor:'#ff9' }}>
                <Text style={{fontSize:30}}>{props.name}</Text>
                <Text style={{fontSize:30}}>{props.age}</Text>                
        </View>
    )
  }

  export default ReactProps


//   jab ek component se doosre component mein data send karna hota h to props ka use karte h