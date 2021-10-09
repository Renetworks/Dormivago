import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Login() {
    return (
        <View StyleSheet={style.Container}>
            <Text>Login</Text>
        </View>
    )

}

const style = StyleSheet.create({
    Container: {
        flex: 1
    }
})