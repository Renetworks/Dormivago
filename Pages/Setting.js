import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Setting() {
    return (
        <View StyleSheet={style.Container}>
            <Text>Setting</Text>
        </View>
    )

}

const style = StyleSheet.create({
    Container: {
        flex: 1
    }
})