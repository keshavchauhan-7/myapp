import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const ReactRadioButton = () => {

    const skills = [
        {
            id: 1,
            name: 'React'
        },
        {
            id: 2,
            name: 'Angular'
        },
        {
            id: 3,
            name: 'JAVA'
        },
        {
            id: 4,
            name: 'Python'
        },
        {
            id: 5,
            name: 'C++'
        }
    ]
    const [selectedRadio, setSelectedRadio] = useState(1)
    return (
        <View style={styles.main}>

            {/* Static Radio Button */}
            {/* <TouchableOpacity onPress={()=>setSelectedRadio(1)}>
                <View style={styles.radioWrapper}>
                    <View style={styles.radio}>
                        {
                            selectedRadio === 1 ? <View style={styles.radioBg}></View> : null
                        }
                    </View>
                    <Text style={styles.radioText}>Radio 1</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
                <View style={styles.radioWrapper}>
                    <View style={styles.radio}>
                        {
                            selectedRadio === 2 ? <View style={styles.radioBg}></View> : null
                        }
                    </View>
                    <Text style={styles.radioText}>Radio 2</Text>
                </View>
            </TouchableOpacity> */}



            {/* Dynamic Radion Button */}

            {
                skills.map((item, index) => <TouchableOpacity // item isliye use karte h kyoki hum array ke elements ko itrate kar paaye
                    key={index}
                    onPress={() => setSelectedRadio(item.id)}>
                    <View style={styles.radioWrapper}>
                        <View style={styles.radio}>
                            {selectedRadio === item.id ? <View style={styles.radioBg}></View> : null}
                        </View>
                        <Text style={styles.radioText}>{item.name}</Text>
                    </View>
                </TouchableOpacity>)
            }
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center'
    },
    radioText: {
        fontSize: 20,
        color: 'skyblue',
    },
    radio: {
        height: 40,
        width: 40,
        borderColor: 'skyblue',
        borderWidth: 2,
        borderRadius: 20,
        margin: 10,
    },
    radioWrapper: {
        marginLeft:50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioBg: {
        height: 28,
        width: 28,
        backgroundColor: 'skyblue',
        borderRadius: 14,
        margin: 4
    }
})

export default ReactRadioButton