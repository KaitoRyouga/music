import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import 'react-native-gesture-handler';

class PersonalContentLibrary extends Component {
    render() {
        return (
            <View style={styles.viewEndFirst}>
                <View style={styles.viewIconMusic}>
                    <Icon
                        name={this.props.icon}
                        color="grey"
                        size={20}
                        type={this.props.type}
                        size={this.props.size}></Icon>
                </View>
                <View
                    style={{
                        flex: 3,
                        marginLeft: 20,
                    }}>
                    <Text>{this.props.name}</Text>
                    <Text>33</Text>
                </View>
                {
                    this.props.avatarMusic &&
                    <View
                        style={{
                            flex: 4,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                        }}>
                        <Avatar
                            size="large"
                            title="LW"
                            size={35}
                            activeOpacity={0.7}
                        />
                        <Avatar
                            size="large"
                            title="LW"
                            size={35}
                            activeOpacity={0.7}
                        />
                        <Avatar
                            size="large"
                            title="LW"
                            size={35}
                            activeOpacity={0.7}
                        />
                    </View>
                }
            </View>
        );
    }
}

export default PersonalContentLibrary;

const styles = StyleSheet.create({
    viewEndFirst: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
    viewIconMusic: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        width: 35,
        borderRadius: 400,
        backgroundColor: '#80808038',
    },
})