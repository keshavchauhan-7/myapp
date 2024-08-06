import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const ListApiCall = () => {
    const [data, setData] = useState(undefined);

    const getAPIData = async () => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        let result = await fetch(url) // fetch(method:'put') hume ye karna hota h but get by default hota h to hume e karne ki jarurat nahi hoti.
        result = await result.json()
        setData(result);
    }

    useEffect(() => {
        getAPIData();
    }, [])
    return (
        <ScrollView>
            <Text style={{ fontSize: 24, textAlign: 'center' }}>ListApiCall</Text>
            {
                data ?
                    data.map((item) => {
                        return (
                            <View style={{
                                margin: 10,
                                padding: 10,
                                borderRadius: 10,
                                backgroundColor: '#fff',
                                shadowColor: '#000',
                                elevation: 5,
                            }}>
                                <Text style={{ backgroundColor: '#ccc' }}>Id : {item.id}</Text>
                                <Text style={styles.text}>Title : {item.title}</Text>
                                <Text style={styles.text}>UserId : {item.userId}</Text>
                                <Text style={styles.text}>Body : {item.body}</Text>
                            </View>
                        )
                    })
                    :
                    null
            }
        </ScrollView>
    )
}


const styles = StyleSheet.create({

})

export default ListApiCall