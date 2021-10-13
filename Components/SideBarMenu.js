import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import {Button, View, StyleSheet, Text} from 'react-native'
import Setting from '../Pages/Setting'
import Board from '../Pages/Board';
import Home from '../Pages/Home';
import Loading from '../Pages/Loading';
import Login from '../Pages/Login';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PanGestureHandler } from 'react-native-gesture-handler';
import {FontAwesome5, AntDesign, Ionicons} from '@expo/vector-icons'
import Take from '../Pages/Take';


const pages = {
    'Home': {
        text: '홈',
        iconType: 'FontAwesome5',
        iconName: 'home',
        page: Home
    },
    'Take': {
        text: '물건 챙기기',
        page: Take
    },
    'Board': {
        text: '게시판',
        iconType: 'AntDesign',
        iconName: 'book',
        page: Board
    },
    'Setting': {
        text: '설정',
        iconType: 'Ionicons',
        iconName: 'settings',
        page: Setting
    }
}

const Drawer = createDrawerNavigator()

export function SideBarMenu () {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home'>
                <Drawer.Screen name={pages.Home.text} component={pages.Home.page}/>
                <Drawer.Screen name={pages.Take.text} component={pages.Take.page}/>
                <Drawer.Screen name={pages.Board.text} component={pages.Board.page} />
                <Drawer.Screen name={pages.Setting.text} component={pages.Setting.page}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
