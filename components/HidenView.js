import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, StyleSheet, ListView, TouchableOpacity } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PersonalContentLibrary from './PersonalContentLibrary';
import 'react-native-gesture-handler';

class HidenView extends Component {
    render() {
        return (
            <View style={{
                width: '100%'
            }}>
                <PersonalContentLibrary name='Album' icon='album' size={25}></PersonalContentLibrary>
                <PersonalContentLibrary name='MV' icon='play' type='evilicon' size={25}></PersonalContentLibrary>
                <PersonalContentLibrary name='Nghệ sĩ' icon='artist' type='material-community'></PersonalContentLibrary>
                <PersonalContentLibrary name='Upload' icon='upload' type='antdesign' size={20}></PersonalContentLibrary>
                <PersonalContentLibrary name='Quản lý download' icon='download' type='antdesign' size={20}></PersonalContentLibrary>
            </View>
        )
    }
}

export default HidenView;