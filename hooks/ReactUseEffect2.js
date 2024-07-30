import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const ReactUseEffect2 = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(100);

    // useEffect(() => {
    //     console.warn(count);
    // }, [count])

    // useEffect(() => {
    //     console.warn(data);
    // }, [data])
    return (
        <View>
            <Text style={{ fontSize: 20, textAlign: 'center' }}> {data} UseEffect {count}</Text>
            <Button title="update counter" onPress={() => setCount(count + 1)} />
            <Button title="update data" onPress={() => setData(data + 1)} />
            <User info={{ count, data }} />
        </View>
    )
}

const User = (props) => {
    useEffect(() => {
        console.warn("count aa gya")
    }, [props.info.count])
    useEffect(() => {
        console.warn("data aa gya")
    }, [props.info.data])
    return (
        <View>
            <Text style={{ fontSize: 20, textAlign: 'center', color:'red' }}>Count : {props.info.count}</Text>
            <Text style={{ fontSize: 20, textAlign: 'center', color:'red' }}>Data : {props.info.data}</Text>
        </View>
    )
}

export default ReactUseEffect2