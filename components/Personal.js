import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Avatar, SearchBar } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PersonalContentLibrary from './PersonalContentLibrary';
import HidenView from './HidenView'
import PersonalRecently from './PersonalRecently'
// import 'react-native-gesture-handler';

class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moreAndCollapse: false,
        };
    }

    changeColorMore = () => {
        this.setState({ moreAndCollapse: !this.state.moreAndCollapse });
    };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <View style={{ flex: 1 }}>
                        <Avatar rounded source={require('../images/avatar.jpg')} />
                    </View>
                    <View style={{ flex: 5 }}>
                        <SearchBar
                            placeholder="Type Here..."
                            lightTheme={true}
                            inputContainerStyle={{
                                borderRadius: 200,
                                height: 35
                            }}
                            containerStyle={{
                                borderRadius: 200,
                                height: 50
                            }}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Icon name="settings" color="grey" />
                    </View>
                </View>
                <ScrollView>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                        }}>
                        <TouchableOpacity>
                            <Text style={styles.textCenter}> PHÁT NHẠC CÁ NHÂN </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewTextLibary}>
                        <Text style={styles.textLibrary}>THƯ VIỆN</Text>
                    </View>
                    <View style={styles.viewCenterEnd}>
                        <View
                            style={{
                                width: '100%',
                            }}>
                            <PersonalContentLibrary
                                name="Bài hát"
                                icon="music-note"
                                avatarMusic={true}></PersonalContentLibrary>
                            <PersonalContentLibrary
                                name="Playlist"
                                icon="playlist-play"
                                avatarMusic={true}></PersonalContentLibrary>
                        </View>
                        <HidenView hide={this.state.moreAndCollapse}></HidenView>
                    </View>
                    <TouchableOpacity
                        style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginTop: 20,
                            width: '100%',
                        }}
                        onPress={() => this.changeColorMore()}>
                        <Text
                            style={{
                                color: '#a00ca0',
                                fontSize: 15,
                            }}>
                            {this.state.moreAndCollapse ? 'Xem thêm' : 'Thu gọn'}
                        </Text>
                        <Icon name="expand-more" color="#a00ca0"></Icon>
                    </TouchableOpacity>
                    <View style={styles.viewTextLibary}>
                        <Text style={styles.textLibrary}>ĐÃ TẢI</Text>
                    </View>
                    <View
                        style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginLeft: 10,
                            marginTop: 20,
                            alignItems: 'center',
                        }}>
                        <View style={styles.viewIconMusic}>
                            <FontAwesome name="download" size={20}></FontAwesome>
                        </View>
                        <View
                            style={{
                                flex: 3,
                                marginLeft: 20,
                            }}>
                            <Text
                                style={{
                                    fontSize: 15,
                                }}>
                                Bài hát đã tải
              </Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                alignItems: 'flex-end',
                                marginRight: 10,
                            }}>
                            <Ionicons name="ios-arrow-forward"></Ionicons>
                        </View>
                    </View>
                    <View style={styles.viewTextLibary}>
                        <Text style={styles.textLibrary}>GẦN ĐÂY</Text>
                    </View>
                    <PersonalRecently name="Bài hát gần đây"></PersonalRecently>
                    <PersonalRecently
                        name="100% gây nghiện"
                        sub="Various artists"></PersonalRecently>
                    <PersonalRecently
                        name="EDM nhẹ nhàng"
                        sub="Various artists"></PersonalRecently>
                </ScrollView>
            </View>
        );
    }
}

export default Personal;

const styles = StyleSheet.create({
    textCenter: {
        color: 'white',
        backgroundColor: '#a00ca0',
        padding: 10,
        borderRadius: 100,
    },
    textLibrary: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    viewTextLibary: {
        textAlign: 'left',
        width: '100%',
        marginLeft: 10,
        marginTop: 20
    },
    viewCenterEnd: {
        marginTop: 10,
        marginLeft: 10
    },
})