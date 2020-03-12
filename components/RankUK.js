import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, WebView, Image} from 'react-native';
import {Button, Icon, ButtonGroup} from 'react-native-elements';
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
    author: 'Lauv - BTS',
    id: '154ace68-2c20-4665-bca3-21d0a9fc3361',
    image: 'https://data.chiasenhac.com/data/cover_thumb/118/117074.jpg',
    link: '/nhac-hot/us-uk.html?playlist=1',
    name: 'Who',
    rank: 1,
  },
  {
    author: 'Justin Bieber - Quavo',
    id: 'b23c122a-f93e-4aba-9c79-589d51f94b6f',
    image: 'https://data.chiasenhac.com/data/cover_thumb/116/115655.jpg',
    link: '/nhac-hot/us-uk.html?playlist=2',
    name: 'Intentions',
    rank: 2,
  },
  {
    author: 'K-391 - Alan Walker - Ahrix',
    id: 'cc3333a4-25c3-4ac2-bab3-6600b70cbc38',
    image: 'https://data.chiasenhac.com/data/cover_thumb/118/117076.jpg',
    link: '/nhac-hot/us-uk.html?playlist=3',
    name: 'End Of Time',
    rank: 3,
  },
  {
    author: 'Demi Lovato',
    id: '414f093b-e2cd-4e27-82d2-538e12f0a264',
    image: 'https://data.chiasenhac.com/data/cover_thumb/118/117100.jpg',
    link: '/nhac-hot/us-uk.html?playlist=4',
    name: 'I Love Me',
    rank: 4,
  },
  {
    author: 'Katy Perry',
    id: '07f730b7-d492-4869-b62c-7ff13636a0f3',
    image: 'https://data.chiasenhac.com/data/cover_thumb/118/117037.jpg',
    link: '/nhac-hot/us-uk.html?playlist=5',
    name: 'Never Worn White',
    rank: 5,
  },
  {
    author: 'Dua Lipa',
    id: 'fe6358b7-0800-4eb9-bbf5-4c02a413325e',
    image: 'https://data.chiasenhac.com/data/cover_thumb/116/115373.jpg',
    link: '/nhac-hot/us-uk.html?playlist=6',
    name: 'Physical',
    rank: 6,
  },
  {
    author: 'Martin Garrix - Clinton Kane',
    id: '08ce5abb-cedb-4759-897a-5c711d163820',
    image: 'https://data.chiasenhac.com/data/cover_thumb/117/116684.jpg',
    link: '/nhac-hot/us-uk.html?playlist=7',
    name: 'Drown',
    rank: 7,
  },
  {
    author: 'Eminem - Juice Wrld',
    id: '89eea516-dad5-44e7-b702-36b43b36f481',
    image: 'https://data.chiasenhac.com/data/cover_thumb/115/114919.jpg',
    link: '/nhac-hot/us-uk.html?playlist=8',
    name: 'Godzilla',
    rank: 8,
  },
  {
    author: 'Selena Gomez',
    id: '08593a72-28af-4115-8a97-ab17b0b64a43',
    image: 'https://data.chiasenhac.com/data/cover_thumb/117/116283.jpg',
    link: '/nhac-hot/us-uk.html?playlist=9',
    name: 'Feel Me',
    rank: 9,
  },
  {
    author: 'Christina Aguilera',
    id: '2defc5ba-fd09-4051-acdb-02ffd688f09f',
    image: 'https://data.chiasenhac.com/data/cover_thumb/118/117155.jpg',
    link: '/nhac-hot/us-uk.html?playlist=10',
    name: 'Loyal Brave True',
    rank: 10,
  },
  {
    author: 'Doja Cat',
    id: 'a4d1e12a-5383-4645-9bed-c4e85d8c0c4a',
    image: 'https://data.chiasenhac.com/data/cover_thumb/116/115643.jpg',
    link: '/nhac-hot/us-uk.html?playlist=11',
    name: 'Boss Bitch',
    rank: 11,
  },
  {
    author: 'Justin Bieber',
    id: '0612edf9-0142-45e1-9588-35e773a35e0e',
    image: 'https://data.chiasenhac.com/data/cover_thumb/117/116028.jpg',
    link: '/nhac-hot/us-uk.html?playlist=12',
    name: 'Yummy',
    rank: 12,
  },
  {
    author: 'Sam Smith',
    id: '4e4bc38f-3716-48bd-8d7d-a70e7e27e634',
    image: 'https://data.chiasenhac.com/data/cover_thumb/117/116029.jpg',
    link: '/nhac-hot/us-uk.html?playlist=13',
    name: 'To Die For',
    rank: 13,
  },
  {
    author: 'Billie Eilish',
    id: 'c09429ec-57da-48f5-ad16-69a971f379a7',
    image: 'https://data.chiasenhac.com/data/cover_thumb/117/116015.jpg',
    link: '/nhac-hot/us-uk.html?playlist=14',
    name: 'No Time To Die',
    rank: 14,
  },
  {
    author: 'Lauv',
    id: '7c613945-f0a8-42e6-8e8c-2ee847131255',
    image: 'https://data.chiasenhac.com/data/cover_thumb/118/117074.jpg',
    link: '/nhac-hot/us-uk.html?playlist=15',
    name: 'Lonely Eyes',
    rank: 15,
  },
  {
    author: 'Lauv - Alessia Cara',
    id: 'a25880c6-ab42-4075-b642-545978b4504c',
    image: 'https://data.chiasenhac.com/data/cover_thumb/118/117074.jpg',
    link: '/nhac-hot/us-uk.html?playlist=16',
    name: 'Canada',
    rank: 16,
  },
  {
    author: 'Justin Bieber',
    id: 'f3cea3a6-10af-4889-92df-2e7715725958',
    image: 'https://data.chiasenhac.com/data/cover_thumb/117/116028.jpg',
    link: '/nhac-hot/us-uk.html?playlist=17',
    name: 'All Around Me',
    rank: 17,
  },
  {
    author: 'Armin van Buuren - Tempo Giusto',
    id: '7be6031d-1d72-4c8a-8466-f02221ca343e',
    image: 'https://data.chiasenhac.com/data/cover_thumb/118/117329.jpg',
    link: '/nhac-hot/us-uk.html?playlist=18',
    name: "Mr. Navigator (Steve Aoki's 'I Am The Captain Now' Remix)",
    rank: 18,
  },
  {
    author: 'Lauv',
    id: 'b93e50aa-5b4c-433b-8f1e-dde38ae4e134',
    image: 'https://data.chiasenhac.com/data/cover_thumb/118/117074.jpg',
    link: '/nhac-hot/us-uk.html?playlist=19',
    name: 'Julia',
    rank: 19,
  },
  {
    author: 'SaberZ - GIFTBACK',
    id: '73a7b7c2-e813-43d1-8ccc-315acb70149d',
    image: 'https://data.chiasenhac.com/data/cover_thumb/118/117349.jpg',
    link: '/nhac-hot/us-uk.html?playlist=20',
    name: 'Starfire',
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

export default class RankUK extends Component {
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
      let authorName = $(
        `#cat-4-music > ul > li:nth-child(${i}) > div.media-body.align-items-stretch.d-flex.flex-column.justify-content-between.p-0 > div > div`,
      ).text();
      let authorMain = authorName.replace(/;/g, ' -');
      let dataTemp = {
        id: uuid.v4(),
        rank: i,
        name: $(
          `#cat-4-music > ul > li:nth-child(${i}) > div.media-body.align-items-stretch.d-flex.flex-column.justify-content-between.p-0 > div > h5 > a`,
        ).attr('title'),
        image: $(
          `#cat-4-music > ul > li:nth-child(${i}) > div.media-left.align-items-stretch.mr-2 > a > img`,
        ).attr('src'),
        author: authorMain,
        link: $(
          `#cat-4-music > ul > li:nth-child(${i}) > div.media-body.align-items-stretch.d-flex.flex-column.justify-content-between.p-0 > div > h5 > a`,
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
            Bảng Xếp Hạng US-UK {date}/{month}/{year}
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
