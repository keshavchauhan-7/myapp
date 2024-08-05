import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
const ReactTabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Login' component={Login} />
                <Tab.Screen name='SignUp' component={SignUp} />
                <Tab.Screen name='Other' component={SignUp} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const Login = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20 }}>Login</Text>
        </View>
    )
}

const SignUp = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20 }}>SignUp</Text>
        </View>
    )
}


const styles = StyleSheet.create({})

export default ReactTabNavigation