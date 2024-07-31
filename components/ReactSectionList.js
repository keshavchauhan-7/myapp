import React from 'react'
import { View, Text, SectionList } from 'react-native'

const ReactSectionList = () => {
    const users = [
        {
            id: 1,
            name: 'John',
            data: ['PHP', 'React js', 'Angular']
        },
        {
            id: 2,
            name: 'Mike',
            data: ['Java', 'Python', 'C#']
        },
        {
            id: 3,
            name: 'Sara',
            data: ['C++', 'C', 'JS']
        },
        {
            id: 4,
            name: 'Tony',
            data: ['HTML', 'CSS', 'Bootstrap']
        }
    ]

    return (
        <View>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>Section List in React Native</Text>
            <SectionList
                sections={users}
                renderItem={({ item }) => <Text style={{ fontSize: 20, marginLeft: 20 }}>{item}</Text>}
                renderSectionHeader={({ section: { name } }) => (
                    <Text style={{ fontSize: 25, color: 'red' }}>{name}</Text>
                )}
            />
        </View>
    )
}

export default ReactSectionList

/*

Interview Questions:
 Q. kya hum flatlist or customlist ke saath bhi nested list bna sakte h.
 Ans. ha hum nested list bhi bna sakte h but section list hume by default option deta h or flatlist option nhi deta h.

 Q. aap section list kahan use karoge or flatlist kahan.
 Ans. agar humaare paas single array h to hum flatlist ka use karenge, or agar humaare paas nested array h to hum sectionlist ka use karenge.

*/