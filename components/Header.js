import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const Header = () => {

    const cartData = useSelector((state) => state.reducer);
    const [cartItems, setCartItems] = useState(0);

    useEffect(() => {
        setCartItems(cartData.length);
    }, [cartData])
    return (
        <View>
            <Text style={{ fontSize: 24, textAlign: 'right', padding: 10, backgroundColor: 'orange' }}>
                <View style={{backgroundColor:'yellow', borderRadius:10, height:40, width:40}}>
                    <Text style={{fontSize:30, textAlign:'center'}}>{cartItems}</Text>
                </View>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Header
