import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const CallJsonServerApi = () => {
    const [data, setData] = useState([]);
    const getAPIData = async () => {
        const url = "http://10.0.2.2:3000/users"
        let result = await fetch(url)
        result = await result.json();
        setData(result)
    }

    useEffect(() => {
        getAPIData();
    }, [])
    return (
        <ScrollView>
            <Text style={{ fontSize: 24, textAlign: 'center' }}>CallJsonServerApi</Text>
            {
                data.length ?
                    data.map((item) => {
                        return (
                            <View style={{ backgroundColor: '#fff', margin: 10, padding: 5, borderRadius: 10, shadowColor: '#000', elevation: 5 }}>
                                <Text>Id : {item.id}</Text>
                                <Text>Name : {item.name}</Text>
                                <Text>Age : {item.age}</Text>
                                <Text>Email : {item.email}</Text>
                            </View>
                        )
                    }) : null
            }
        </ScrollView>
    )
}


const styles = StyleSheet.create({})

export default CallJsonServerApi