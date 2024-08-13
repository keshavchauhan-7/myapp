import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'

const Product = (props) => {
    const item = props.item
    return (
        <View style={{alignItems:'center', borderBottomColor:'orange', borderBottomWidth:2, padding:10}}>
                <Text style={{ fontSize: 20 }}>{item.name}</Text>
                <Text style={{ fontSize: 18 }}>{item.price}</Text>
                <Text style={{ fontSize: 16 }}>{item.color}</Text>
                <Image style={{ width: 100, height: 100 }} source={{ uri: item.image }} />
                <Button title='add to cart' />
        </View>
    )
}

const styles = StyleSheet.create({})

export default Product
