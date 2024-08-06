import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const ReactApiCall = () => {
    const [data, setData] = useState(undefined)
    getAPIData = async () => {
        //api call
        const url = 'https://jsonplaceholder.typicode.com/posts/1'
        let result = await fetch(url);
        result = await result.json();
        setData(result)
    }

    useEffect(() => {
        getAPIData();
    }, [])


    return (
        <View>
            <Text>ReactApiCall</Text>
            {
                data ? <View>
                    <Text>{data.id}</Text>
                    <Text>{data.userId}</Text>
                    <Text>{data.title}</Text>
                    <Text>{data.body}</Text>
                </View> : null
            }
        </View>
    )
}


const styles = StyleSheet.create({})

export default ReactApiCall