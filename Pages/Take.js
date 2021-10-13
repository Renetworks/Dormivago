import React from 'react'
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import 'expo-file-system'

export default function Take() {
    let image = <Image style={style.Image} source={{uri: 'https://github.com/csnewcs/TranslateMirrorBot/blob/main/Logo/logo.png?raw=true'}}/>
    let views = []
    for (let i = 0; i < 10; i++) {
        views.push(
            <View style={style.Item}>
                <View style={style.TextView}>
                    <Text style={style.Text}>{i}</Text>
                </View>
                <View style={style.ImageView}>
                    {image}
                </View>
            </View>
        )
    }
    console.log('take')
    return (
        <ScrollView StyleSheet={style.Container}>
            {views}
        </ScrollView>
    )

}

const style = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Item: {
        flex: 1,
        margin: 20,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    TextView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    // Text: {
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    ImageView: {
        flex: 1,
        // flexDirection: 'row',
        alignItems: 'flex-end'
    },
    Image: {
        width: 100,
        height: 100,
    }
})