import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'

const ReactUseEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.warn('Hello World!')
    }, [])
    return (
        <View>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>UseEffect {count} </Text>
            <Button title="UpdateCount" onPress={() => setCount( count + 1)} />
        </View>
    )
}

export default ReactUseEffect

// hooks only function based components ke andar use hote h