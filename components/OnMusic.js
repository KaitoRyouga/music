import React, { Component } from 'react';
import {
  View, StyleSheet, Text, Animated, Image, Easing
} from 'react-native'

import {
  Icon, Slider, Button
} from 'react-native-elements'
import TrackPlayer from 'react-native-track-player';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RNFS from 'react-native-fs'
import uuid from 'react-native-uuid';
import {useRoute} from '@react-navigation/native';

var data = [
  {
    id: 'trackId test',
    url: require('../music/pew.m4a'),
    title: 'Track Title',
    artist: 'Track Artist',
    artwork: require('../images/avatar.jpg'),
  },
  {
    id: 'trackId test2',
    url: require('../music/track2.m4a'),
    title: 'Track Title2',
    artist: 'Track Artist2',
    artwork: require('../images/avatar.jpg'),
  },
  {
    id: 'trackId test3',
    url: require('../music/atn.m4a'),
    title: 'Track Title3',
    artist: 'Track Artist4',
    artwork: require('../images/avatar.jpg'),
  },
];

var typeEx = ['mp3', 'm4a']

var dataAdd = [];

const cheerio = require('react-native-cheerio');
const downloadManager = require('react-native-simple-download-manager');


class OnMusic extends Component {

    constructor(props) {
        super();
        this.state = {
          seconds: 0,
          value: 0,
          valuePosition: [],
          time: 0,
          timeCurrent: 0,
          timer: null,
          pause: true,
          currentId: null,
          dataAddDownload: {}
        };
      this.RotateValueHolder = new Animated.Value(0);
    }
    

    componentDidMount = () => {
      this.handlePress()
    }

    StartImageRotateFunction() {
      this.RotateValueHolder.setValue(0);
      Animated.timing(this.RotateValueHolder, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
      }).start(() => {
        if (this.state.pause == false) {
          this.StartImageRotateFunction()
        }
      });
    }

    check = async() => {
        let tracks = await TrackPlayer.getQueue();
        console.log(tracks)
    }

  handlePress = async () => {
    var { dataTransfer } = this.props.route.params;
      // let dataAdd = this.getMusic();
      // console.log(dataAdd)

    // console.log(dataAddRaw)
    const searchUrl = `https://chiasenhac.vn${dataTransfer.link}` ;
    const response = await fetch(searchUrl); // fetch page

    const htmlString = await response.text(); // get response text
    const $ = cheerio.load(htmlString); // parse HTML string

    for(let i = 3; i > 0; i--){
      var linkDownload = $(`#pills-download > div > div.card-body > div > div.col-12.tab_download_music > ul > li:nth-child(${i}) > a`).attr('href')
      // console.log('current: ', i)
      // console.log(linkDownload + ':' + typeof linkDownload)
      if (linkDownload != '' && linkDownload != undefined) {
        break;
      }
    }

        var dataAdd = {
          id: dataTransfer.id,
          url: linkDownload,
          title: dataTransfer.name,
          artist: dataTransfer.author,
          artwork: dataTransfer.image,
    }

    this.setState({dataAddDownload: dataAdd});

    // console.log(dataAdd)
    // console.log(searchUrl)
        TrackPlayer.setupPlayer().then(async () => {
            await TrackPlayer.add(dataAdd);
        })

        TrackPlayer.updateOptions({
          stopWithApp: true,
          capabilities: [
            TrackPlayer.CAPABILITY_PLAY,
            TrackPlayer.CAPABILITY_PAUSE,
            // TrackPlayer.CAPABILITY_STOP,
            TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
            TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
          ],
          compactCapabilities: [
            TrackPlayer.CAPABILITY_PLAY,
            TrackPlayer.CAPABILITY_PAUSE,
            // TrackPlayer.CAPABILITY_STOP,
          ]
        });
    }

    start = async() => {
        TrackPlayer.play()
        this.startInfi()
        let duration = await TrackPlayer.getDuration();
        let trackId = await TrackPlayer.getCurrentTrack();

        this.setState({
          currentId: trackId,
          timeCurrent: duration,
        })

      console.log(this.state.QueueLast)
    }

    startInfi = () => {
        this.state.timer = setInterval(() => {
          this.show();
        }, 1000);
    }

    pauseInfi = () => {
        clearInterval(this.state.timer);
    }

    show = async() => {

      let trackId = await TrackPlayer.getCurrentTrack();
      let duration = await TrackPlayer.getDuration();
      
      if (trackId != this.state.currentId) {
        this.setState({
          currentId: trackId,
          timeCurrent: duration,
          time: 0
        });
      }

      this.setState({
        time: this.state.time + 1,
      });
    }

    previous = async () => {

      let tracks = await TrackPlayer.getQueue();
      let { [Object.keys(tracks).shift()]: firstItem } = tracks;

      let trackId = await TrackPlayer.getCurrentTrack();

      if (firstItem.id == trackId) {
        TrackPlayer.stop()
        await TrackPlayer.destroy()

        let queueAddFirst = tracks[data.length-1];
        let queueAddSecond = tracks.filter(value => value.id != queueAddFirst.id);

        const addNew = [].concat(queueAddFirst, queueAddSecond)
        await TrackPlayer.add(addNew)

        return TrackPlayer.play()
      }else{
        TrackPlayer.skipToPrevious()
      }

    }

  next = async () => {

    let tracks = await TrackPlayer.getQueue();
    let { [Object.keys(tracks).pop()]: lastItem } = tracks;

    let trackId = await TrackPlayer.getCurrentTrack();

    if (lastItem.id == trackId) {
      // TrackPlayer.stop()
      await TrackPlayer.destroy()
      TrackPlayer.stop();

      let queueAddFirst = tracks[0];
      let queueAddSecond = tracks.filter(value => value.id != queueAddFirst.id);

      const addNew = [].concat(queueAddFirst, queueAddSecond)

      await TrackPlayer.add(addNew)

      return TrackPlayer.play()
    }else {
      TrackPlayer.skipToNext()
    }

    let duration = await TrackPlayer.getDuration();

    this.setState({
      timeCurrent: duration,
    })
  }

  getMusic = async() => {
    RNFS.readDir(RNFS.DownloadDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
      .then(result => {
        var dataScan = [];
        result.map(file => {
          let fileName = file.name;
          let path = file.path
          let ext = fileName.split('.');
          let find = typeEx.filter(type => type == ext[1]);
          
          if (find.length != 0) {
            let dataTemp = {
              id: uuid.v4(),
              url: 'file://' + path,
              title: fileName,
              artist: 'kaito',
              artwork: require('../images/avatar.jpg'),
            };

            dataScan.push(dataTemp);
          }
        });
        // console.log(dataScan);
        dataAdd = dataScan
        return dataScan;

        // stat the first file
        // return Promise.all([RNFS.stat(result[0].path), result[0].path]);
      })
      // .then(statResult => {
      //   if (statResult[0].isFile()) {
      //     // if we have a file, read it
      //     return RNFS.readFile(statResult[1], 'utf8');
      //   }

      //   return 'no file';
      // })
      // .then(contents => {
      //   // log the file contents
      //   console.log(contents);
      // })
      // .catch(err => {
      //   console.log(err.message, err.code);
      // });
  }

  downloadFile = (url, name) => {
    const config = {
      downloadTitle: name,
      // downloadDescription:
      //   'Description that should appear in Native Download manager',
      saveAsName: name,
      allowedInRoaming: true,
      allowedInMetered: true,
      showInDownloads: true,
      external: false, //when false basically means use the default Download path (version ^1.3)
      path: 'Download/', //if "external" is true then use this path (version ^1.3)
    };
    console.log(url)
    downloadManager
      .download((url), (headers = {}), (config))
      .then(response => {
        console.log('Download success!');
      })
      .catch(err => {
        console.log('Download failed!');
      });
  }

  render() {
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.container1}>
          <Animated.Image
            style={{
              width: 350,
              height: 350,
              transform: [{rotate: RotateData}],
            }}
            source={require('../images/circle-cropped.png')}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'center',
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          <Slider
            maximumValue={this.state.timeCurrent}
            value={this.state.time}
            step={1}
            onValueChange={value => {
              this.setState({time: value});
              TrackPlayer.seekTo(value);
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text>
              {Math.floor(this.state.time / 60)}:
              {this.state.time - Math.floor(this.state.time / 60) * 60}
            </Text>
            <Text>
              {Math.floor(this.state.timeCurrent / 60)}:
              {Math.ceil(this.state.timeCurrent) -
                Math.floor(this.state.timeCurrent / 60) * 60}
            </Text>
            {/* <Text>{route.params.data}</Text> */}
          </View>
        </View>
        <View style={styles.container2}>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Icon type="font-awesome" name="random" />
          </View>
          <View style={{flex: 6, flexDirection: 'row'}}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => this.previous()}>
                <Icon type="antdesign" name="stepbackward" />
              </TouchableOpacity>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    pause: !this.state.pause,
                  });

                  if (this.state.pause == false) {
                    this.pauseInfi();
                    TrackPlayer.pause();
                  } else {
                    this.startInfi();
                    TrackPlayer.play();
                  }
                  this.StartImageRotateFunction();
                }}>
                <Icon
                  type="antdesign"
                  name={this.state.pause ? 'play' : 'pausecircle'}
                  size={50}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => this.next()}>
                <Icon type="antdesign" name="stepforward" />
              </TouchableOpacity>
              {/* <Button onPress={() => this.getMusic()} title='get'></Button> */}
            </View>
          </View>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Icon type="feather" name="repeat" />
          </View>
        </View>
        <View style={styles.container3}>
          <View
            style={{
              flex: 2,
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Icon type="antdesign" name="hearto" />
            <TouchableOpacity
              onPress={() =>
                this.downloadFile(
                  this.state.dataAddDownload.url,
                  this.state.dataAddDownload.title,
                )
              }>
              <Icon name="download" type="antdesign"></Icon>
            </TouchableOpacity>
          </View>
          <View
            style={{flex: 9, justifyContent: 'center', alignItems: 'flex-end'}}>
            <Text style={{fontSize: 15}}>Danh sách yêu thích</Text>
          </View>
          <View
            style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Icon type="font-awesome" name="list-ul" />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container1: {
    flex: 10, justifyContent: 'center', alignItems: 'center'
  },

  container2: {
    flex: 2, flexDirection: 'row'
  },
  container3: {
    flex: 2, flexDirection: 'row'
  },
})

export default OnMusic;