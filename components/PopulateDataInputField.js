import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View, Modal, TextInput } from 'react-native'

const PopulateDataInputField = () => {

    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(undefined)

    const getApiData = async () => {
        const url = "http://10.0.2.2:3000/users";
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setData(result);
        }
    }

    const deleteUser = async (id) => {
        const url = "http://10.0.2.2:3000/users";
        let result = await fetch(`${url}/${id}`, {
            method: "delete"
        });
        result = await result.json();
        if (result) {
            console.warn('user deleted')
            getApiData();
        }
    }

    useEffect(() => {
        getApiData();
    }, [])

    const updateUser = (data) => {
        setShowModal(true)
        setSelectedUser(data)
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24, textAlign: 'center' }}>ListApiData</Text>
            <View style={styles.dataWrapper}>
                <View style={{ flex: 1 }}><Text>Name</Text></View>
                <View style={{ flex: 2 }}><Text>Age</Text></View>
                <View style={{ flex: 2 }}><Text>Operations</Text></View>
            </View>

            {
                data.length ?
                    data.map((item) => (
                        <View key={item.id} style={styles.dataWrapper}>
                            <View style={{ flex: 1 }}><Text>{item.name}</Text></View>
                            <View style={{ flex: 1 }}><Text>{item.age}</Text></View>
                            <View style={{ flex: 1, marginHorizontal: 5 }}>
                                <Button onPress={() => deleteUser(item.id)} title='Delete' color={"red"} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Button title='Update' onPress={() => updateUser(item)} />
                            </View>
                        </View>
                    ))
                    : null
            }
            <Modal visible={showModal} transparent={true}>
                <UserModal setShowModal={setShowModal} selectedUser={selectedUser} getApiData={getApiData} />
            </Modal>
        </View>
    )
}

const UserModal = (props) => {
    const [name, setName] = useState(undefined);
    const [age, setAge] = useState(undefined);
    const [email, setEmail] = useState(undefined);

    useEffect(() => {
        if (props.selectedUser) {
            setName(props.selectedUser.name)
            setAge(props.selectedUser.age.toString())
            setEmail(props.selectedUser.email)
        }
    }, [props.selectedUser])

    const updateUser = async () => {
        const url = "http://10.0.2.2:3000/users";

        const id = props.selectedUser.id;
        let result = await fetch(`${url}/${id}`, {
            method: "Put",
            headers: {
                "Content-Type": "application-json"
            },
            body: JSON.stringify({ name, age, email })
        });
        result = await result.json();
        if(result){
            console.log(result);
            props.getApiData();
            props.setShowModal(false);
        }

    }

    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <TextInput style={styles.input} value={name}
                    onChangeText={(text) => setName(text)} />
                <TextInput style={styles.input} value={age}
                    onChangeText={(text) => setAge(text)} />
                <TextInput style={styles.input} value={email}
                    onChangeText={(text) => setEmail(text)} />

                <View style={{ marginBottom: 15 }}>
                    <Button title='update' onPress={updateUser} />
                </View>
                <Button title='Close' onPress={() => props.setShowModal(false)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    dataWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        shadowColor: '#000',
        elevation: 5,
        borderRadius: 5,
        margin: 5,
        padding: 8,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        elevation: 5,
        shadowOpacity: 0.70
    },
    input: {
        borderWidth: 1,
        borderColor: 'skyblue',
        width: 300,
        marginBottom: 15
    }
})

export default PopulateDataInputField
