import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Home() {
    return (
        <View StyleSheet={style.Container}>
            <Text>Home</Text>
        </View>
    )

}

const style = StyleSheet.create({
    Container: {
        flex: 1
    }
})