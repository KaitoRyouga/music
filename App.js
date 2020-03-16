import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import { Icon } from 'react-native-elements';
import Fontisto from 'react-native-vector-icons/Fontisto';

import Personal from './components/Personal';
import Discover from './components/Discover';
import OnMusic from './components/OnMusic';
import Rank from './components/Rank';
import RankUK from './components/RankUK';
import RankKorea from './components/RankKorea';
import RankChina from './components/RankChina';

import Dsplaylist from './components/playlist/inplaylist'
import Playlist from './components/playlist/Playlist'
import List from './components/playlist/list'
import AppPlay from './components/playlist/AppPlay'

// Create function of Rank for transmission navigation
function MusicChartComponent({navigation}) {
  return <Rank nav={navigation}></Rank>;
}

// Create function of OnMusic ( play music ) for transmission navigation
function OnMusicComponent({ route, navigation }) {
  return <OnMusic nav={navigation} route={route}></OnMusic>;
}

function DSPlaylistComponent({ route, navigation }) {
  return <Dsplaylist nav={navigation} route={route}></Dsplaylist>;
}

function PlaylistComponent({ route, navigation }) {
  return <Playlist nav={navigation} route={route}></Playlist>;
}

const StackPlaylist = createStackNavigator();

function PlaylistStack() {
  return (
    <StackPlaylist.Navigator>
      <StackPlaylist.Screen
        options={{ headerShown: false }}
        name="Playlist"
        component={PlaylistComponent}></StackPlaylist.Screen>
      <StackPlaylist.Screen
        name="DSPlay"
        component={DSPlaylistComponent}></StackPlaylist.Screen>
    </StackPlaylist.Navigator>
  );
}

// Create stack in a component ( from Rank to playmusic )
const StackChart = createStackNavigator();

function MusicChartStack() {
    return (
      <StackChart.Navigator>
        <StackChart.Screen
          options={{headerShown: false}}
          name="Rank"
          component={RankComponent}></StackChart.Screen>
        <StackChart.Screen
          name="Play"
          component={OnMusicComponent}></StackChart.Screen>
      </StackChart.Navigator>
    );
}

// Create TopTab Rank ( VN, US-UK, Korea, China )
const TabChart = createMaterialTopTabNavigator();

class RankComponent extends Component {
  render() {
    return (
      <TabChart.Navigator>
        <TabChart.Screen
          name="VN"
          component={MusicChartComponent}></TabChart.Screen>

        {/* lazy should just add a component VN, not care UK, Korea, China :v */}
        <TabChart.Screen name="US-UK" component={RankUK}></TabChart.Screen>
        <TabChart.Screen name="Korea" component={RankKorea}></TabChart.Screen>
        <TabChart.Screen name="China" component={RankChina}></TabChart.Screen>
      </TabChart.Navigator>
    );
  }
 }

const Tab = createMaterialBottomTabNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
              if (route.name == 'Personal') {
                return (
                  <Icon
                    name="folder-music"
                    type="entypo"
                    size={21}
                    color={focused ? '#672076' : 'grey'}></Icon>
                );
              } else if (route.name == 'Discover') {
                return (
                  <Fontisto
                    name="earth"
                    type="fontisto"
                    size={21}
                    color={focused ? '#672076' : 'grey'}></Fontisto>
                );
              } else if (route.name == 'Playlist') {
                return (
                  <Icon
                    name="playlist-play"
                    size={25}
                    color={focused ? '#672076' : 'grey'}></Icon>
                );
              } else if (route.name == 'Music Chart') {
                return (
                  <Icon
                    name="areachart"
                    type="antdesign"
                    size={21}
                    color={focused ? '#672076' : 'grey'}></Icon>
                );
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: '#672076',
            inactiveTintColor: 'grey',
          }}
          barStyle={{backgroundColor: 'white'}}>
          {/* add direct Personal and Discover, not navigation child :v */}
          <Tab.Screen name="Personal" component={Personal}></Tab.Screen>
          <Tab.Screen name="Discover" component={Discover}></Tab.Screen>
          <Tab.Screen name="Playlist" component={PlaylistStack}></Tab.Screen>
          
          {/* add stack for transmission with components Rank and playmusic */}
          <Tab.Screen
            name="Music Chart"
            component={MusicChartStack}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}