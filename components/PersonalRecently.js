import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';
import 'react-native-gesture-handler';

class PersonalRecently extends Component {
    render() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                    marginLeft: 10,
                }}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                    }}>
                    <Avatar
                        size="medium"
                        title="BP"
                        activeOpacity={0.7}
                    />
                </View>
                <View
                    style={{
                        flex: 2,
                    }}>
                    <Text
                        style={{
                            fontSize: 17,
                        }}>
                        {this.props.name}
                    </Text>
                    <Text>
                        {this.props.sub}
                    </Text>
                </View>
            </View>
        );
    }
}

export default PersonalRecently;