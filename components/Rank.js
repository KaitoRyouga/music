import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import {Icon} from 'react-native-elements';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import uuid from 'react-native-uuid'; // create id random

const cheerio = require('react-native-cheerio');

var dataRank = []
var dataAuthor = [];
var dataAdd = [];

var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year

// harden data, not get from server for decrement lag
var data = [{ "author": "Jack - J97", "id": "87a18ecd-29d6-4fbc-b4f0-1ae942cb4e1e", "image": "https://data.chiasenhac.com//data/artist_avatar/2/1135.jpg", "link": "/nhac-hot/vietnam.html?playlist=1", "name": "Là 1 thằng con trai", "rank": 1 }, { "author": "Orange - Khói", "id": "a0a104c9-397e-4703-b1d5-579042de7c7d", "image": "https://data.chiasenhac.com/data/cover_thumb/117/116181.jpg", "link": "/nhac-hot/vietnam.html?playlist=2", "name": "Chân Ái", "rank": 2 }, { "author": "Đức Phúc", "id": "0c38f655-650a-45dd-8a87-ef8dd94a56c5", "image": "https://data.chiasenhac.com/data/cover_thumb/116/115822.jpg", "link": "/nhac-hot/vietnam.html?playlist=3", "name": "Hơn Cả Yêu", "rank": 3 }, { "author": "Tiên Tiên - JustaTee", "id": "e3b058c7-8897-4e92-876f-7f38f91b3b1f", "image": "https://data.chiasenhac.com/data/cover_thumb/118/117307.jpg", "link": "/nhac-hot/vietnam.html?playlist=4", "name": "Cần Gì Hơn?", "rank": 4 }, { "author": "AMEE - Ricky Star", "id": "389692ac-3073-4a78-8d32-478d57001c7e", "image": "https://data.chiasenhac.com/data/cover_thumb/118/117057.jpg", "link": "/nhac-hot/vietnam.html?playlist=5", "name": "Sao Anh Chưa Về Nhà", "rank": 5 }, { "author": "Pháo", "id": "86a47749-f773-437c-b126-2df8b52780ec", "image": "https://data.chiasenhac.com/data/cover_thumb/117/116813.jpg", "link": "/nhac-hot/vietnam.html?playlist=6", "name": "Hai Phút Hơn", "rank": 6 }, { "author": "Mr.Siro - Gray - Wind", "id": "eb7131df-a5a0-496a-8f52-e3efd32cd00e", "image": "https://data.chiasenhac.com/data/cover_thumb/117/116275.jpg", "link": "/nhac-hot/vietnam.html?playlist=7", "name": "Khóc Cùng Em", "rank": 7 }, { "author": "HuyR", "id": "032c8839-3be2-4e0e-b861-f7d2f6dc0e8b", "image": "https://data.chiasenhac.com/data/cover_thumb/116/115083.jpg", "link": "/nhac-hot/vietnam.html?playlist=8", "name": "Anh Thanh Niên", "rank": 8 }, { "author": "Kha", "id": "f1f4077c-ddd1-4f96-a3d8-4893c4422538", "image": "https://data.chiasenhac.com/data/cover_thumb/117/116629.jpg", "link": "/nhac-hot/vietnam.html?playlist=9", "name": "Em Có Nghe", "rank": 9 }, { "author": "B Ray - AMee - Masew", "id": "ebc9e666-d2a1-469e-8bc4-1d9bdfecfa4d", "image": "https://data.chiasenhac.com/data/cover_thumb/117/116005.jpg", "link": "/nhac-hot/vietnam.html?playlist=10", "name": "Do For Love", "rank": 10 }, { "author": "Thanh Hưng Idol", "id": "64667f58-6c99-4279-bea5-938b8b63cb2b", "image": "https://data.chiasenhac.com/data/cover_thumb/118/117145.jpg", "link": "/nhac-hot/vietnam.html?playlist=11", "name": "Ai Đợi Mình Được Mãi", "rank": 11 }, { "author": "Tóc Tiên - Da LAB - Touliver", "id": "22863922-cb64-4730-9810-1921c5bf4356", "image": "https://data.chiasenhac.com/data/cover_thumb/117/116345.jpg", "link": "/nhac-hot/vietnam.html?playlist=12", "name": "Ngày Tận Thế", "rank": 12 }, { "author": "Juun Đăng Dũng", "id": "519bb6f1-5a5c-4921-81b4-71e04f889cec", "image": "https://data.chiasenhac.com/data/cover_thumb/116/115678.jpg", "link": "/nhac-hot/vietnam.html?playlist=13", "name": "Sợ Rằng Em Biết Anh Còn Yêu Em", "rank": 13 }, { "author": "Đen - Thành Đồng", "id": "95f8d48c-d46d-4e58-ba20-7510c729221c", "image": "https://data.chiasenhac.com//data/artist_avatar/5/4212.jpg", "link": "/nhac-hot/vietnam.html?playlist=14", "name": "Một Triệu Like", "rank": 14 }, { "author": "NIOEH - Khắc Hưng - Min - Erik", "id": "c20ed8fb-43ea-4285-8c73-f428058d6b90", "image": "https://chiasenhac.vn/imgs/no_cover.jpg", "link": "/nhac-hot/vietnam.html?playlist=15", "name": "Ghen Cô Vy (Covid-19)", "rank": 15 }, { "author": "Khắc Việt", "id": "c0d1b4b0-fc60-4da4-ba10-fb21c4bf25fa", "image": "https://data.chiasenhac.com/data/cover_thumb/117/116016.jpg", "link": "/nhac-hot/vietnam.html?playlist=16", "name": "Bước Qua Đời Nhau", "rank": 16 }, { "author": "Chillies", "id": "50e3df7b-9833-42a7-96f1-137d99fe8d2f", "image": "https://data.chiasenhac.com/data/cover_thumb/116/115709.jpg", "link": "/nhac-hot/vietnam.html?playlist=17", "name": "Có Em Đời Bỗng Vui", "rank": 17 }, { "author": "Tân Trần", "id": "d5b962a6-d14c-4bdf-8e14-a8320ab8df83", "image": "https://data.chiasenhac.com/data/cover_thumb/118/117305.jpg", "link": "/nhac-hot/vietnam.html?playlist=18", "name": "Trứng Rán Cần Mỡ", "rank": 18 }, { "author": "Hương Giang", "id": "f2089529-108c-45ef-b9bf-04e88ff2448b", "image": "https://data.chiasenhac.com/data/cover_thumb/116/115671.jpg", "link": "/nhac-hot/vietnam.html?playlist=19", "name": "Tặng Anh Cho Cô Ấy", "rank": 19 }, { "author": "Pháo", "id": "013230e1-4c6c-472b-a561-8ad955538854", "image": "https://chiasenhac.vn/imgs/no_cover.jpg", "link": "/nhac-hot/vietnam.html?playlist=20", "name": "2 Phút Hơn", "rank": 20 }]

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
          <TouchableOpacity onPress={() => this.props.nav.push('Play', {dataTransfer: this.props.data})}>
            <Text>{this.props.name}</Text>
            <Text>{this.props.author}</Text>
          </TouchableOpacity>
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

export default class Rank extends Component {

  constructor(props) {
      super(props);
      this.state = {
        dataCSN: [],
      };
  }
    

  getData = async() => {
    const searchUrl = `https://chiasenhac.vn/nhac-hot.html`;
    const response = await fetch(searchUrl); // fetch page

    const htmlString = await response.text(); // get response text
    const $ = cheerio.load(htmlString); // parse HTML string

    for (let i = 1; i < 21; i++) {
      let authorName = $(
        `#cat-3-music > ul > li:nth-child(${i}) > div.media-body.align-items-stretch.d-flex.flex-column.justify-content-between.p-0 > div > div`
      ).text();
      let authorMain = authorName.replace(/;/g, ' -')
      let dataTemp = {
        id: uuid.v4(),
        rank: i,
        name: $(
          `#cat-3-music > ul > li:nth-child(${i}) > div.media-left.align-items-stretch.mr-2 > a`,
        ).attr('title'),
        image: $(
          `#cat-3-music > ul > li:nth-child(${i}) > div.media-left.align-items-stretch.mr-2 > a > img`,
        ).attr('src'),
        author: authorMain,
        link: $(
          `#cat-3-music > ul > li:nth-child(${i}) > div.media-left.align-items-stretch.mr-2 > a`,
        ).attr('href'),
      };
      dataRank.push(dataTemp);
    }

    this.setState({
        dataCSN: dataRank,
    });

    // this.getLink();

  }

  getLink = async () => {
    for(let i = 1; i < 21; i++) {
        const searchUrl =
        `https://chiasenhac.vn/nhac-hot/vietnam.html?playlist=${i}`;
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

        dataAuthor.push(dataTemp)
    }
  }

  // componentDidMount() {
      // this.getData();
  // }

  mergeFun = () => {  
    dataRank.forEach((value, index) => {
      dataAdd.push(Object.assign(value, dataAuthor[index]))
    })

    // this.setState({
    //     dataCSN: dataAdd,
    // });
  }

  render() {

      return (
        <View
          style={{
            flex: 1,
            marginBottom: 10,
          }}>
          <View style={styles.viewTextLibary}>
            <Text style={styles.textLibrary}>
              Bảng Xếp Hạng Việt Nam {date}/{month}/{year}
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
                link={item.link}
                data={item}
                nav={this.props.nav}
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
    marginTop: 20
  }
})
