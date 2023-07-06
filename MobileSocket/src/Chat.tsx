import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { socket } from './Socket';

const Chat = () => {
    const [message, setmessage] = useState<string>(``);
    const [messages, setmessages] = useState<string[]>([]);


    useEffect(() => {

        socket.on(`chatmessage2`, (msg) => {
            setmessages([...messages, msg])
        })

    }, [messages])


    const send = () => {
        socket.emit(`chatmessage`, message)
    }

    const renderItem = ({ item }: any) => {
        return <Text>{item}</Text>
    }

    return (
        <>
            <View>
                <Text>Message</Text>
                <TextInput style={styles.input} value={message} onChangeText={setmessage} />
                <Button title='Send' onPress={send}></Button>
            </View>
            <View>
                <FlatList
                    data={messages}
                    renderItem={renderItem}
                />
            </View>

        </>
    )
}

export default Chat


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});