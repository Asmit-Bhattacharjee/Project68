import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FaceBookScreen from './screens/FaceBookScreen';
import InstagramScreen from './screens/InstagramScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'

export default class App extends React.Component {
  render(){
  return (
    <AppContainer></AppContainer>
  );
}}

const TabNavigator = createBottomTabNavigator({
  FaceBookScreen:{screen:FaceBookScreen},
  InstagramScreen:{screen:InstagramScreen}
})

const AppContainer = createAppContainer(TabNavigator)