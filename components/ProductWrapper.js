import React from 'react'
import { Text, View, ScrollView, StyleSheet, Button } from 'react-native'
import Header from './Header'
import Product from './Product'

const ProductWrapper = ({navigation}) => {
    const products = [
        {
            name: 'Samsung Mobile',
            color: 'white',
            price: 30000,
            image: 'https://media.istockphoto.com/id/1840192421/photo/smartphone-template-with-blank-screen-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=Nnf-jxIKiC-uYc3LHL-KVxiRnGhnal-97adjzRSw-m4='
        },
        {
            name: 'Apple Phone',
            color: 'black',
            price: 130000,
            image: 'https://media.istockphoto.com/id/1840192421/photo/smartphone-template-with-blank-screen-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=Nnf-jxIKiC-uYc3LHL-KVxiRnGhnal-97adjzRSw-m4='
        },
        {
            name: 'Nokia Mobile',
            color: 'green',
            price: 20000,
            image: 'https://media.istockphoto.com/id/1840192421/photo/smartphone-template-with-blank-screen-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=Nnf-jxIKiC-uYc3LHL-KVxiRnGhnal-97adjzRSw-m4='
        }
    ]

    return (

        <View>

            <Button title='go to user list' onPress={()=>navigation.navigate('User')}/>
            <Header />

            <ScrollView>
                {
                    products.map((item) => <Product item={item} />)
                }
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({

})



export default ProductWrapper;