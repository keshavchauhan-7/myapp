import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const ReactModal = () => {
    const[show,setShow] = useState(false)
    return (
        <View style={styles.main}>
            <Modal
                transparent={true}
                visible={show}
                animationType={'slide'}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello Code Step by Step</Text>
                        <Button title='close modal' onPress={()=>setShow(false)} />
                    </View>
                </View>
            </Modal>

            <View style={styles.buttonView}><Button title='open modal' onPress={()=>setShow(true)} /></View>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    buttonView: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 20,
        shadowColor: '#000',
        elevation: 5
    },
    modalText: {
        fontSize: 25,
        marginBottom: 20
    }
})

export default ReactModal