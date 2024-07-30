import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectunmount = () => {
    const [show, setShow] = useState(true)
    return (
        <View>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>useEffect for Unmount Component</Text>
            <Button title='Toogle' onPress={() => { setShow(!show) }} />
            {
                show ? <Student /> : null
            }
        </View>
    )
}

const Student = () => {
    useEffect(()=>{
        console.warn('Student Component Mounted');
    })
    return (
        <View>
            <Text style={{ fontSize: 20, color: 'red' }}>Student</Text>
        </View>
    )
}

export default UseEffectunmount