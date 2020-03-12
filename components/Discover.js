import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon, Avatar } from 'react-native-elements';
import 'react-native-gesture-handler';


class Discover extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('../images/circle-cropped.png'), // Local image
                require('../images/avatar.jpg'), // Local image
            ],
        };
    }

    render() {
        return (
            <View>
                
                <ScrollView>
                    {/* <SliderBox autoplay={true} circleLoop images={this.state.images} /> */}
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            marginTop: 10,
                            marginLeft: 10,
                        }}>
                        <Text style={styles.textBold}>CÓ THỂ BẠN SẼ THÍCH</Text>
                        <Ionicons name="ios-arrow-forward" />
                    </View>
                    <ScrollView horizontal={true} style={{ marginTop: 20, paddingBottom: 15 }}>
                        <View
                            style={{
                                marginLeft: 10,
                            }}>
                            <Avatar
                                size="xlarge"
                                title="LW"
                                onPress={() => console.log('Works!')}
                                activeOpacity={0.7}
                            />
                            <View>
                                <Text>EDM</Text>
                                <Text>Various Artists</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                marginLeft: 10,
                            }}>
                            <Avatar
                                size="xlarge"
                                title="LW"
                                onPress={() => console.log('Works!')}
                                activeOpacity={0.7}
                            />
                            <View>
                                <Text>EDM</Text>
                                <Text>Various Artists</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                marginLeft: 10,
                            }}>
                            <Avatar
                                size="xlarge"
                                title="LW"
                                onPress={() => console.log('Works!')}
                                activeOpacity={0.7}
                            />
                            <View>
                                <Text>EDM</Text>
                                <Text>Various Artists</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View
                        style={{
                            marginTop: 20,
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                color: '#a00ca0',
                                fontSize: 16,
                            }}>
                            Xem thêm
            </Text>
                    </View>
                    <View
                        style={{
                            marginTop: 20,
                            marginLeft: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Text style={styles.textBold}>MIX RIÊNG CHO BẠN</Text>
                        <Ionicons name="ios-arrow-forward" />
                    </View>
                    <ScrollView horizontal={true} style={{ marginTop: 20, paddingBottom: 15 }}>
                        <View
                            style={{
                                marginLeft: 10,
                            }}>
                            <Avatar
                                size="xlarge"
                                title="LW"
                                onPress={() => console.log('Works!')}
                                activeOpacity={0.7}
                            />
                            <View>
                                <Text>EDM</Text>
                                <Text>Various Artists</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                marginLeft: 10,
                            }}>
                            <Avatar
                                size="xlarge"
                                title="LW"
                                onPress={() => console.log('Works!')}
                                activeOpacity={0.7}
                            />
                            <View>
                                <Text>EDM</Text>
                                <Text>Various Artists</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                marginLeft: 10,
                            }}>
                            <Avatar
                                size="xlarge"
                                title="LW"
                                onPress={() => console.log('Works!')}
                                activeOpacity={0.7}
                            />
                            <View>
                                <Text>EDM</Text>
                                <Text>Various Artists</Text>
                            </View>
                        </View>
                    </ScrollView>
                </ScrollView>
            </View>
        );
    }
}

export default Discover;

const styles = StyleSheet.create({
    textBold: {
        fontWeight: 'bold',
        fontSize: 15,
        marginRight: 10
    },
});