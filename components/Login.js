import { useState } from "react";
import { View, Text, Button, TextInput } from "react-native"

export const Login = (props) => {
    const [name, setName] = useState("")
    const age = 24;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>Login Screen</Text>
            <TextInput
                style={{
                    fontSize: 20,
                    borderColor: 'skyblue',
                    borderWidth: 2,
                    borderRadius: 20,
                    margin: 10,
                    padding: 10
                }}
                onChangeText={(text) => setName(text)}
                placeholder="Enter Name" />
            <Button title='go to home' onPress={() => props.navigation.navigate("Home", { name, age })} />
        </View>
    )
}