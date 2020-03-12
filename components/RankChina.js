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
    author: 'Trình Hưởng',
    id: '986ca981-405a-43c5-ba28-c4883afceee1',
    image: 'https://data.chiasenhac.com/data/cover_thumb/117/116549.jpg',
    link: '/nhac-hot/chinese.html?playlist=1',
    name: 'Thế Giới Lớn Như Vậy Vẫn Gặp Được Anh (世界这么大还是遇见你)',
    rank: 1,
  },
  {
    author: 'Miên Tử',
    id: 'd682a4bd-6486-4cc7-945f-c67ef6361728',
    image: 'https://data.chiasenhac.com/data/cover_thumb/117/116063.jpg',
    link: '/nhac-hot/chinese.html?playlist=2',
    name: 'Dũng Khí (勇气)',
    rank: 2,
  },
  {
    author: '阿冗 - Dj小禄 - Dj小M ProgHouse Mix国语男',
    id: 'c05cfb40-e676-419c-8923-abb81461ce07',
    image: 'https://chiasenhac.vn/imgs/no_cover.jpg',
    link: '/nhac-hot/chinese.html?playlist=3',
    name: 'Đáp Án Của Bạn (Remix)',
    rank: 3,
  },
  {
    author: 'Âm Khuyết Thi Thính',
    id: 'cba7f2f1-1676-456e-beeb-a6ccb0c9e971',
    image: 'https://data.chiasenhac.com//data/artist_avatar/145/144716.jpg',
    link: '/nhac-hot/chinese.html?playlist=4',
    name: 'Mang Chủng',
    rank: 4,
  },
  {
    author: 'Vương Nhất Bác',
    id: '65050be5-5109-4b5a-ba1c-5ad00ac2d5ce',
    image: 'https://data.chiasenhac.com/data/cover_thumb/118/117346.jpg',
    link: '/nhac-hot/chinese.html?playlist=5',
    name: 'Bởi Vì Chúng Ta Luôn Ở Bên Nhau (因为我们在一起)',
    rank: 5,
  },
  {
    author: 'Đặng Tử Kỳ',
    id: '9180a8e2-1651-4b18-ba1d-9e70ce164dd1',
    image: 'https://data.chiasenhac.com/data/cover_thumb/118/117273.jpg',
    link: '/nhac-hot/chinese.html?playlist=6',
    name: 'Thiên Sứ Bình Phàm (平凡天使)',
    rank: 6,
  },
  {
    author: '阿冗 - DJOs弹咚鼔',
    id: '0506b46a-dbd1-4d1a-a6ee-28b3ac5d88c7',
    image: 'https://chiasenhac.vn/imgs/no_cover.jpg',
    link: '/nhac-hot/chinese.html?playlist=7',
    name: 'Đáp Án Của Bạn Remix (你的答案)',
    rank: 7,
  },
  {
    author: 'Lạc Vũ (罗宇)',
    id: '2dfce1e9-7712-474c-a2eb-f0950d995e96',
    image: 'https://chiasenhac.vn/imgs/no_cover.jpg',
    link: '/nhac-hot/chinese.html?playlist=8',
    name: 'Chỉ Là Quá Yêu Em',
    rank: 8,
  },
  {
    author: 'Vu Tử Bối',
    id: '189024d2-b14e-47d1-9c57-e5104f39e986',
    image: 'https://data.chiasenhac.com/data/cover_thumb/116/115450.jpg',
    link: '/nhac-hot/chinese.html?playlist=9',
    name: 'Hôn Khắp Nơi (处处吻)',
    rank: 9,
  },
  {
    author: '姜鹏',
    id: '06667727-bf51-4948-bf79-b72cd97ea005',
    image: 'https://chiasenhac.vn/imgs/no_cover.jpg',
    link: '/nhac-hot/chinese.html?playlist=10',
    name: 'Huynh Đệ À, Nhớ Anh Rồi (Remix)',
    rank: 10,
  },
  {
    author: 'Hồ Ngạn Bân',
    id: 'acc80518-a3f3-43ae-b512-78da346e1571',
    image: 'https://data.chiasenhac.com/data/cover_thumb/116/115226.jpg',
    link: '/nhac-hot/chinese.html?playlist=11',
    name: 'Người Bên Gối (枕边人)',
    rank: 11,
  },
  {
    author: 'Âm Khuyết Thi Thính - Lý Giai Tư',
    id: '5b7d1bcc-19c2-4a34-8070-f5887f38c3d5',
    image: 'https://data.chiasenhac.com/data/cover_thumb/117/116260.jpg',
    link: '/nhac-hot/chinese.html?playlist=12',
    name: 'Vũ Thủy (雨水)',
    rank: 12,
  },
  {
    author: '送给未来的你',
    id: '22c8064d-06ca-45a3-910c-6564dbd0b99c',
    image: 'https://chiasenhac.vn/imgs/no_cover.jpg',
    link: '/nhac-hot/chinese.html?playlist=13',
    name: 'Vì Tương Lai Của Em (Remix)',
    rank: 13,
  },
  {
    author: 'Tô Thi Đinh',
    id: 'e67c73dd-f410-49d1-a377-873c50cd4bf6',
    image: 'https://data.chiasenhac.com/data/cover_thumb/116/115100.jpg',
    link: '/nhac-hot/chinese.html?playlist=14',
    name: 'Duyên Tự Thư (缘字书)',
    rank: 14,
  },
  {
    author: '姜鹏 - DJ阿帆 ProgHouse Mix',
    id: '3cd3efaa-989c-4f5d-9f7e-d8cbc90c6938',
    image: 'https://chiasenhac.vn/imgs/no_cover.jpg',
    link: '/nhac-hot/chinese.html?playlist=15',
    name: 'Huynh Đệ À, Nhớ Anh Rồi (Remix)',
    rank: 15,
  },
  {
    author: 'Nhất Mân',
    id: '9ea7321c-f570-42c7-8bc3-944f1ad5a7d0',
    image: 'https://data.chiasenhac.com/data/cover_thumb/117/116820.jpg',
    link: '/nhac-hot/chinese.html?playlist=16',
    name: 'Tình Ca Ngọt Ngào Nhất (最甜情歌)',
    rank: 16,
  },
  {
    author: 'Trương Bích Thần',
    id: '59632494-2a57-4f47-9522-7b4f3ec089ec',
    image: 'https://data.chiasenhac.com/data/cover_thumb/116/115227.jpg',
    link: '/nhac-hot/chinese.html?playlist=17',
    name: 'Tâm Muốn Nước Lặng (心欲止水)',
    rank: 17,
  },
  {
    author: 'Ngải Thần',
    id: 'd143f5c7-3d93-4c3a-9955-7e8c25427458',
    image: 'https://data.chiasenhac.com/data/cover_thumb/118/117196.jpg',
    link: '/nhac-hot/chinese.html?playlist=18',
    name: 'Nhớ Em (想你)',
    rank: 18,
  },
  {
    author: 'Nha Đản Đản',
    id: 'af1a15d4-126d-42fb-b9d2-e16caded68a3',
    image: 'https://chiasenhac.vn/imgs/no_cover.jpg',
    link: '/nhac-hot/chinese.html?playlist=19',
    name: 'Đại Điền Hậu Sinh Tử (Remix)',
    rank: 19,
  },
  {
    author: 'Bách Tùng',
    id: '6f8310ad-6488-45f7-91ea-b8b9b0c32290',
    image: 'https://chiasenhac.vn/imgs/no_cover.jpg',
    link: '/nhac-hot/chinese.html?playlist=20',
    name: 'Thế giới tươi đẹp ôm trọn lấy em',
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

export default class RankChina extends Component {
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
          `#cat-5-music > ul > li:nth-child(${i}) > div.media-body.align-items-stretch.d-flex.flex-column.justify-content-between.p-0 > div > div`,
        ).text();
        let authorMain = authorName.replace(/;/g, ' -');
        
      let dataTemp = {
        id: uuid.v4(),
        rank: i,
        name: $(
          `#cat-5-music > ul > li:nth-child(${i}) > div.media-body.align-items-stretch.d-flex.flex-column.justify-content-between.p-0 > div > h5 > a`,
        ).attr('title'),
        image: $(
          `#cat-5-music > ul > li:nth-child(${i}) > div.media-left.align-items-stretch.mr-2 > a > img`,
        ).attr('src'),
        author: authorMain,
        link: $(
          `#cat-5-music > ul > li:nth-child(${i}) > div.media-body.align-items-stretch.d-flex.flex-column.justify-content-between.p-0 > div > h5 > a`,
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
            Bảng Xếp Hạng China {date}/{month}/{year}
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
