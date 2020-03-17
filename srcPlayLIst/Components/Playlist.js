import React, {Component} from 'react'
import {
  View, StyleSheet, ScrollView, Text, TouchableOpacity, Modal
} from 'react-native'
import{
Icon, SearchBar
} from 'react-native-elements'

import ModalExample from './src/Components/Modal'
import ModalTester from './src/Components/ModalPlaylist'
export default class Playlist extends Component{
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };
  
  render(){
    const { search } = this.state;
    return(
      <View style ={styles.container}>
            <View style={styles.container1}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={this._onPressButton}>
                <Icon name='left' type='antdesign'/>
                </TouchableOpacity>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center', flex: 9, paddingRight: 40}}>
                <Text style={{fontSize: 25}}>
                  PLAYLIST
                </Text>
              </View>
            </View>
            <View style={styles.container2}>
                <View style={{flex: 9, justifyContent: 'center', alignItems: 'center', paddingTop: 5, paddingBottom: 5 }}>
                <SearchBar
                    containerStyle={{backgroundColor: '#fff',}}
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search} platform='ios' cancelButtonTitle="Hủy"
                    // inputContainerStyle={{backgroundColor: '#fff',}}
                             />
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Icon   type='MaterialIcons' name='playlist-play'/>
                </View>
            </View> 
            <View style={styles.container3}>
              <View style={styles.container31}>
              <TouchableOpacity>
                  <ModalTester></ModalTester>
                  </TouchableOpacity>
              </View>
            </View>
            <View style={styles.container4}>
              <ScrollView>
                  <ModalExample></ModalExample>
                  <ModalExample></ModalExample>
                  <ModalExample></ModalExample>
                  <ModalExample></ModalExample>
                  <ModalExample></ModalExample>
                  <ModalExample></ModalExample>
                  <ModalExample></ModalExample>
                  <ModalExample></ModalExample>
                  <ModalExample></ModalExample>
                  

              </ScrollView>
            </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'column',
  }, 
  container1:{
    flex: 1, flexDirection: 'row', 
  },
  container2:{
    flex: 1, flexDirection: 'row',
  },    
  container3:{
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  container31: {
    width: 250, height: 50, borderWidth: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30,
    borderBottomLeftRadius: 30, borderBottomRightRadius: 30, backgroundColor: '#8e1185', justifyContent: 'center',
    alignItems: 'center'
  },
  container4:{
    flex: 8, flexDirection: 'column'
  },

})