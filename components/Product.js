import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from './redux/action'

const Product = (props) => {
    const item = props.item;
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.reducer)
    const [isAdded, setIsAdded] = useState(0);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    }

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item.name));
    }

    useEffect(() => {
        let result = cartItems.filter((element) => {
            return element.name === item.name
        });
        if (result.length) {
            setIsAdded(true)
        } else {
            setIsAdded(false)
        }

    }, [cartItems])
    return (
        <View style={{ alignItems: 'center', borderBottomColor: 'orange', borderBottomWidth: 2, padding: 10 }}>
            <Text style={{ fontSize: 20 }}>{item.name}</Text>
            <Text style={{ fontSize: 18 }}>{item.price}</Text>
            <Text style={{ fontSize: 16 }}>{item.color}</Text>
            <Image style={{ width: 100, height: 100 }} source={{ uri: item.image }} />
            {
                isAdded ?
                    <Button title='remove to cart' onPress={() => handleRemoveFromCart(item)} />
                    :
                    <Button title='add to cart' onPress={() => handleAddToCart(item)} />
            }
        </View>
    )
}

const styles = StyleSheet.create({})

export default Product
