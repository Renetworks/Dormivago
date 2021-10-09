import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

const Drawer = createDrawerNavigator()

export default function Board() {
    return (
        
        <View StyleSheet={style.Container}>
            <Text>Board</Text>
        </View>
    )

}

const style = StyleSheet.create({
    Container: {
        flex: 1
    }
})