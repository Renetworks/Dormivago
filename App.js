import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SideBarMenu} from './Components/SideBarMenu'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import {Entypo} from '@expo/vector-icons'
import Board from './Pages/Board'
import Setting from './Pages/Setting'
import Home from './Pages/Home';

const Drawer = createDrawerNavigator()

export default function App () {
  return (
      <SideBarMenu /> //a
  )
}