import React, {Component} from 'react'
import {
  View, StyleSheet, Text
} from 'react-native'
import{
Icon, Avatar
} from 'react-native-elements'

export default class List extends Component{
    render(){
        return( 
            <View style={styles.container}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', padding: 5}}>
                        <Avatar
                            size="medium"
                            title="BP"
                            />
                        </View>
                        <View style={{ flex: 8, justifyContent: 'center'}}>
                                <Text style={{fontSize: 20}}>
                                    {this.props.name}
                                </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Icon type="entypo" name="dots-three-horizontal">

                            </Icon>
                        </View>
                    </View>
            </View>
        );
    }
}
const styles= StyleSheet.create({
    container:{
         flex: 1
    }
})