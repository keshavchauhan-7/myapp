import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
const ReactStackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTitleStyle: {
                        color: '#fff',
                        fontSize: 25
                    }
                }}
            >
                <Stack.Screen name="Login" component={Login}
                    options={{
                        title: 'User Login',
                        headerStyle: {
                            backgroundColor: 'skyblue',
                        },
                        headerTitleStyle: {
                            color: 'gray',
                            fontSize: 25
                        }
                    }}
                />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const Home = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>Home Screen</Text>
        </View>
    )
}

const Login = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>Login Screen</Text>
            <Button title='go to home' onPress={() => props.navigation.navigate("Home")} />
        </View>
    )
}

const styles = StyleSheet.create({})

export default ReactStackNavigation
