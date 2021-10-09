import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Loading() {
    return (
        <View StyleSheet={style.Container}>
            <Text>Loading</Text>
        </View>
    )

}

const style = StyleSheet.create({
    Container: {
        flex: 1
    }
})