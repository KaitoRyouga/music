import React, {Component} from 'react';
import {View, Text, StyleSheet, WebView, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import uuid from 'react-native-uuid';

const cheerio = require('react-native-cheerio');

var dataRank = [];
var dataAuthor = [];
var dataAdd = [];

var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year

var data = [
  {
    author: 'BTS',
    id: '93992a01-8828-485e-ad4b-bc1590a5356a',
    image: 'https://data.chiasenhac.com/data/cover_thumb/117/116335.jpg',
    link: '/nhac-hot/korea.html?playlist=1',
    name: 'On',
    rank: 1,
  },
  {
    author: 'BTS',
    id: 'cde74039-8e08-4108-ab3d-b55e55d2e76c',
    image: 'https://data.chiasenhac.com/data/cover_thumb/115/114917.jpg',
    link: '/nhac-hot/korea.html?playlist=2',
    name: 'Black Swan',
    rank: 2,
  },
  {
    author: 'Gaho',
    id: '8aed9755-ba16-4fba-aea2-dfc14e5f28ee',
    image: 'https://data.chiasenhac.com/data/cover_thumb/116/115472.jpg',
    link: '/nhac-hot/korea.html?playlist=3',
    name: 'Beginning',
    rank: 3,
  },
  {
    author: 'BTS',
    id: '21c76130-3c10-40e8-a461-0f69a5cd1bb2',
    image: 'https://data.chiasenhac.com/data/cover_thumb/117/116335.jpg',
    link: '/nhac-hot/korea.html?playlist=4',
    name: 'Friends',
    rank: 4,
  },
  {
    author: 'NCT 127',
    id: '8bb8796c-7c53-4207-b4fc-c855a7a49205',
    image: 'https://data.chiasenhac.com/data/cover_thumb/118/117102.jpg',
    link: '/nhac-hot/korea.html?playlist=5',
    name: 'Kick It',
    rank: 5,
  },
  {
    author: 'Everglow',
    id: '1265b8f2-9e32-4462-9ddf-9af87c1c9a25',
    image: 'https://data.chiasenhac.com/data/cover_thumb/116/115481.jpg',
    link: '/nhac-hot/korea.html?playlist=6',
    name: 'Dun Dun',
    rank: 6,
  },
  {
    author: 'IZ*ONE',
    id: '13b44db4-f3a4-4208-b914-d41fe9c42a91',
    image: 'https://data.chiasenhac.com/data/cover_thumb/117/116164.jpg',
    link: '/nhac-hot/korea.html?playlist=7',
    name: 'Fiesta',
    rank: 7,
  },
  {
    author: 'BTS',
    id: '9c61c70c-217c-47d5-91d7-8ce58e0e3a40',
    image: 'https://data.chiasenhac.com/data/cover_thumb/117/116335.jpg',
    link: '/nhac-hot/korea.html?playlist=8',
    name: 'Filter',
    rank: 8,
  },
  {
    author: 'ITZY; Oliver Heldens',
    id: '7367e58f-0aea-4698-b54e-95f0dec0f0ba',
    image: 'https://data.chiasenhac.com/data/cover_thumb/118/117239.jpg',
    link: '/nhac-hot/korea.html?playlist=9',
    name: 'Ting Ting Ting',
    rank: 9,
  },
  {
    author: 'BTS',
    id: '70763b19-c054-47fc-95af-e503a1a695a6',
    image: 'https://data.chiasenhac.com/data/cover_thumb/117/116335.jpg',
    link: '/nhac-hot/korea.html?playlist=10',
    name: 'Moon',
    rank: 10,
  },
  {
    author: 'VICTON',
    id: 'ce45d53b-bb36-4cbe-8123-1ac020aa0e61',
    image: 'https://data.chiasenhac.com/data/cover_thumb/118/117241.jpg',
    link: '/nhac-hot/korea.html?playlist=11',
    name: 'Howling',
    rank: 11,
  },
  {
    author: 'BTS',
    id: '12333481-9794-4a35-b33a-c33f8d8c3b3d',
    image: 'https://data.chiasenhac.com/data/cover_thumb/117/116335.jpg',
    link: '/nhac-hot/korea.html?playlist=12',
    name: 'We Are Bulletproof : The Eternal',
    rank: 12,
  },
  {
    author: 'ITZY',
    id: '7ccff306-0760-42fc-aa88-c137883c665b',
    image: 'https://data.chiasenhac.com/data/cover_thumb/118/117239.jpg',
    link: '/nhac-hot/korea.html?playlist=13',
    name: "That's A No No",
    rank: 13,
  },
  {
    author: 'BTS',
    id: 'feb4af92-bbeb-4aba-97e2-60d946d7a4f1',
    image: 'https://data.chiasenhac.com/data/cover_thumb/117/116335.jpg',
    link: '/nhac-hot/korea.html?playlist=14',
    name: '00:00 (Zero O’Clock)',
    rank: 14,
  },
  {
    author: 'Zico',
    id: 'c7054ea6-4f9b-4a4f-b860-997f1aea8d22',
    image: 'https://data.chiasenhac.com/data/cover_thumb/115/114697.jpg',
    link: '/nhac-hot/korea.html?playlist=15',
    name: 'Any Song',
    rank: 15,
  },
  {
    author: 'ITZY',
    id: '48e6842c-7312-49cf-b0b7-35bfe71d09b7',
    image: 'https://data.chiasenhac.com/data/cover_thumb/118/117239.jpg',
    link: '/nhac-hot/korea.html?playlist=16',
    name: 'Nobody Like You',
    rank: 16,
  },
  {
    author: 'BTS',
    id: '7e2f853e-64ee-4dfa-8412-f2fa3a700c2b',
    image: 'https://data.chiasenhac.com/data/cover_thumb/117/116335.jpg',
    link: '/nhac-hot/korea.html?playlist=17',
    name: 'Ugh!',
    rank: 17,
  },
  {
    author: 'BTS',
    id: '23d02f4b-03b6-4344-ba95-18444ac1eaff',
    image: 'https://data.chiasenhac.com/data/cover_thumb/117/116335.jpg',
    link: '/nhac-hot/korea.html?playlist=18',
    name: 'Inner Child',
    rank: 18,
  },
  {
    author: 'BTS',
    id: '711d78de-5b37-46b8-8755-301245a396d3',
    image: 'https://data.chiasenhac.com/data/cover_thumb/117/116335.jpg',
    link: '/nhac-hot/korea.html?playlist=19',
    name: 'Louder Than Bombs',
    rank: 19,
  },
  {
    author: 'Kim Feel',
    id: '9a0df6b6-a0a5-4248-98c2-72ed2ee13947',
    image: 'https://data.chiasenhac.com/data/cover_thumb/117/116101.jpg',
    link: '/nhac-hot/korea.html?playlist=20',
    name: 'Someday, The Boy',
    rank: 20,
  },
];

class Item extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 5,
          marginTop: 20,
          alignItems: 'center',
        }}>
        <View
          style={{
            marginRight: 5,
          }}>
          <Text style={{color: 'red', fontSize: 18}}>{this.props.rank}</Text>
          <Icon type="octicon" name="dash"></Icon>
        </View>
        <Image
          style={{width: 66, height: 58}}
          source={{uri: this.props.image}}></Image>
        <View
          style={{
            marginLeft: 5,
            flex: 6,
          }}>
          <Text>{this.props.name}</Text>
          <Text>{this.props.author}</Text>
        </View>
        <View
          style={{
            flex: 1,
            marginRight: 10,
          }}>
          <TouchableOpacity>
            <Icon type="material" name="more-vert"></Icon>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default class RankKorea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCSN: [],
    };
  }

  getData = async () => {
    const searchUrl = `https://chiasenhac.vn/nhac-hot.html`;
    const response = await fetch(searchUrl); // fetch page

    const htmlString = await response.text(); // get response text
    const $ = cheerio.load(htmlString); // parse HTML string

    for (let i = 1; i < 21; i++) {
      let dataTemp = {
        id: uuid.v4(),
        rank: i,
        name: $(
          `#cat-6-music > ul > li:nth-child(${i}) > div.media-body.align-items-stretch.d-flex.flex-column.justify-content-between.p-0 > div > h5 > a`,
        ).attr('title'),
        image: $(
          `#cat-6-music > ul > li:nth-child(${i}) > div.media-left.align-items-stretch.mr-2 > a > img`,
        ).attr('src'),
        author: $(
          `#cat-6-music > ul > li:nth-child(${i}) > div.media-body.align-items-stretch.d-flex.flex-column.justify-content-between.p-0 > div > div`,
        ).text(),
        link: $(
          `#cat-6-music > ul > li:nth-child(${i}) > div.media-body.align-items-stretch.d-flex.flex-column.justify-content-between.p-0 > div > h5 > a`,
        ).attr('href'),
      };
      dataRank.push(dataTemp);
    }

    // this.setState({
    //   dataCSN: dataRank,
    // });
    // this.getLink();
  };

  getLink = async () => {
    for (let i = 1; i < 21; i++) {
      const searchUrl = `https://chiasenhac.vn/nhac-hot/vietnam.html?playlist=${i}`;
      const response = await fetch(searchUrl); // fetch page

      const htmlString = await response.text(); // get response text
      const $ = cheerio.load(htmlString); // parse HTML string
      let dataTemp = {
        author: $(
          'body > section > div.container > div > div.col-md-9 > div.d-flex.justify-content-between.mb-3.box1.music-listen-title > h1',
        ).text(),
        download: $(
          `#pills-download > div > div.card-body > div > div.col-12.tab_download_music > ul > li:nth-child(2) > a`,
        ).attr('href'),
      };

      dataAuthor.push(dataTemp);
    }
    // this.mergeFun()
  };

  componentDidMount() {
    // this.getData();
  }

  mergeFun = () => {
    dataRank.forEach((value, index) => {
      dataAdd.push(Object.assign(value, dataAuthor[index]));
    });

    // this.setState({
    //     dataCSN: dataAdd,
    // });
  };

  render() {

    return (
      <View
        style={{
          flex: 1,
          marginBottom: 10,
        }}>
        <View style={styles.viewTextLibary}>
          <Text style={styles.textLibrary}>
            Bảng Xếp Hạng Korea {date}/{month}/{year}
          </Text>
        </View>
        <FlatList
          data={data}
          // data={this.state.dataCSN}
          renderItem={({item}) => (
            <Item
              name={item.name}
              image={item.image}
              author={item.author}
              rank={item.rank}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textLibrary: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  viewTextLibary: {
    textAlign: 'left',
    width: '100%',
    marginLeft: 20,
    marginTop: 20,
  },
});
