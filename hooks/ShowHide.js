import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const ShowHide = () => {
    const [show, setShow] = useState(true);
    return (
        <View>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>ShowHide</Text>
            {/* <Button title='hide text' onPress={() => setShow(false)} /> */}
            {/* <Button title='show text' onPress={() => setShow(true)} /> */}
            <Button title='toggle text' onPress={() => setShow(!show)} />
            {
                show ? <User /> : null
            }

        </View>
    )
}

const User = () => {
    return (
        <View>
            <Text style={{ fontSize: 20, color: 'green' }}>User</Text>
        </View>
    )
}
export default ShowHide