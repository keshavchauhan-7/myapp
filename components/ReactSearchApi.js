import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const ReactSearchApi = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchUser = async (text) => {
        setSearchTerm(text); // Update search term
        const url = `http://10.0.2.2:3000/users`; // Assuming this URL fetches all users
        try {
            let result = await fetch(url);
            result = await result.json();
            if (result) {
                // Filter results based on search term
                const filtered = result.filter(item =>
                    item.name.toLowerCase().includes(text.toLowerCase()) ||
                    item.age.toString().includes(text) ||
                    item.email.toLowerCase().includes(text.toLowerCase())
                );
                setFilteredData(filtered);
                setData(result); // Store all data for future reference
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setFilteredData([]);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 24, textAlign: 'center' }}>ReactSearchApi</Text>
            <TextInput
                style={{ borderColor: 'skyblue', borderWidth: 2, margin: 15, fontSize: 20 }}
                placeholder='Search by name, age, or email'
                onChangeText={(text) => searchUser(text)}
                value={searchTerm}
            />
            <View>
                {
                    filteredData.length > 0 ? (
                        filteredData.map((item) => (
                            <View key={item.id} style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 20 }}>{item.name}</Text>
                                <Text style={{ fontSize: 20 }}>{item.age}</Text>
                                <Text style={{ fontSize: 20 }}>{item.email}</Text>
                            </View>
                        ))
                    ) : (
                        <Text style={{ textAlign: 'center', fontSize: 18 }}>No results found</Text>
                    )
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    // Add your styles here if needed
});

export default ReactSearchApi;
