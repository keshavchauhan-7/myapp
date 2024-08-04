import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
const ReactStackNavigation = () => {
    const btnAction = () => {
        console.warn('Button clicked')
    }
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
                        headerTitle: () => <Button title='Left' onPress={btnAction} />,
                        headerRight: () => <Header />,
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

const Header = () => {
    return (
        // <Button title='btn'/>
        <TextInput placeholder='Enter Name' />
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
