import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight,ScrollView, View, Alert, TouchableOpacity} from 'react-native';
import List from './list'
import{
  Icon, Avatar
  } from 'react-native-elements'
  import{
    SliderBox
    } from 'react-native-image-slider-box'
 export default class ModalExample extends Component {
    
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Đang đóng');
          }}>
          <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
              <Icon name='left' type ='antdesign'/>
              </TouchableHighlight>
            </View>
            <View style={{flex:7, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{
                  fontSize: 20
                }}>
                  PLAYLIST1
                </Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
            <Icon name='message1' type ='antdesign'/>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name='dots-three-vertical' type ='entypo'/>
            </View>
        </View>
        <View style={{flex: 13}}>
              <ScrollView contentContainerStyle={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex :4}}>
               
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{ width: 250, height: 50, borderWidth: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30,
                      borderBottomLeftRadius: 30, borderBottomRightRadius: 30, backgroundColor: '#8e1185', justifyContent: 'center',
                      alignItems: 'center'}}>
                    <TouchableOpacity onPress={this._onPressButton}>
                        <Text style={{color: '#fff', fontSize: 20}}>Phát ngẫu nhên</Text>
                  </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                      <View style={{flex: 1,justifyContent: 'center', alignItems: 'center' }}>
                      <Icon name='download' type ='antdesign'/>
                      </View>
                      <View style={{flex:8, justifyContent: 'center'}}>
                        <Text style={{
                          fontSize: 20
                        }}> Đồng bộ</Text>
                      </View>
                      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                      <Icon name='checksquareo' type ='antdesign'/>
                      </View>

                </View>
                <View style={{ flex: 6, flexDirection: 'column'}}>
                        <ScrollView>
                           <List></List>
                           <List></List>
                           <List></List>
                           <List></List>
                           <List></List>
                           <List></List>
                           <List></List>
                           <List></List>
                         </ScrollView> 

                </View>
              </ScrollView>
        </View>
      </View>
     </Modal>



    
     <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
        <View>
        <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', padding: 5}}>
                        <Avatar
                            size="medium"
                            title="BP"
                            />
                        </View>
                        <View style={{ flex: 8, justifyContent: 'center'}}>
                                <Text style={{fontSize: 20}}>
                                    Playlist
                                </Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon type="entypo" name="dots-three-horizontal">

                            </Icon>
                        </View>
                    </View>
        </View>
          
        </TouchableHighlight>

      </View>
     
    );
  }
}
