import React, { Component } from "react";
import {  Text, View, TextInput } from "react-native";
import Modal from "react-native-modal";
import {
Button
} from 'react-native-elements'
export default class ModalTester extends Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  
  render() {
    return (
      <View style={{ width: 250, height: 50, borderWidth: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30,
        borderBottomLeftRadius: 30, borderBottomRightRadius: 30, backgroundColor: '#8e1185', justifyContent: 'center',
        alignItems: 'center' }}>
        
        <Text  onPress={this.toggleModal} style={{color: '#fff', fontSize: 20}}>TẠO PLAYLIST</Text>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{ width: 300, height: 200, borderTopLeftRadius: 5, borderTopRightRadius: 5,
          borderBottomLeftRadius: 5, borderBottomRightRadius: 5,
           backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                      <Text style={{fontSize: 25}}>Tạo Playlist</Text>
                  </View>
                  <View style={{flex: 1,justifyContent: 'center'}}>
                  <TextInput
                        style={{flex:1, fontSize: 20,   }}
                        placeholder="Tạo Playlist"
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                      />
                  </View>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                      <View style={{flex: 1, padding: 5, borderWidth: 0.5}}>
                        <Button type='clear' title="Hủy" titleStyle={{color: '#24292e', fontSize: 20}} onPress={this.toggleModal}/>
                      </View> 
                      <View style={{flex:1, padding: 5, borderWidth: 0.5}}>
                        <Button type='clear' title="Tiếp tục" titleStyle={{color: "#5a084e",fontSize: 20}} onPress={this.toggleModal}/>
                      </View>

                  </View>
                  
          </View> 
          </View>
        </Modal>
      </View>
    );
  }
}
{/* <Button title="Hide modal" onPress={this.toggleModal} /> */}