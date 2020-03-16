import React, {Component} from 'react'
import{
View, ScrollView, TouchableOpacity, Text,Image
} from 'react-native'
import{
Icon
} from 'react-native-elements'
import List from './list'
import{
SliderBox
} from 'react-native-image-slider-box'
export default class Dsplaylist extends Component{
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../images/anh3.png'),  
        require('../../images/download.png'),
        require('../../images/images.png'),
      ]
    };
  }
  render(){
    return(
      <View style={{flex: 1, flexDirection: 'column'}}>
        {/* <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name='left' type ='antdesign'/>
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
        </View> */}
        <View style={{flex: 13}}>
              <ScrollView contentContainerStyle={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex :4}}>
                <SliderBox
                      images={this.state.images}
                      // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                      // currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
                      
                    />
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
    );
  }
}