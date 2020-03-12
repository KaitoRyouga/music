/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import TrackPlayer from 'react-native-track-player'; // import trackplayer

AppRegistry.registerComponent(appName, () => App);

TrackPlayer.registerPlaybackService(() => require('./service')); // import service trackplayer
