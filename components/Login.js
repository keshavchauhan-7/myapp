import { View, Text, Button } from "react-native"

export const Login = (props) => {
    const name = 'anil';
    const age = 29;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>Login Screen</Text>
            <Button title='go to home' onPress={() => props.navigation.navigate("Home", { name, age })} />
        </View>
    )
}