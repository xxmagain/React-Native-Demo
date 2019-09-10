import React, {Component} from 'react';

var postData = require('../data/posts-data.js');
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    ScrollView
} from 'react-native';
import {SCREEN_WIDTH} from '../Constant'
import Swiper from "../../node_modules/react-native-swiper/index";
import ArticleItem from "./items/ArticleItem";
import Navigation from "../common/Navigation";
import {Size} from "../tools/ScreenTools";

export default class Home extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = {
            data: '',
            navData:['体育' ,'娱乐','金融','生活','科技']
        }
    }

    componentDidMount() {
        this.setState({
            data: postData.postList
        })
    }

    renderNav() {
        return (
            <Navigation title={"首页"} showBack={false}/>
        )
    }

    renderSwiper() {
        return (
            <View style={{height: Size(200)}}>
                <Swiper autoplay loop={true} style={{height: Size(200)}} paginationStyle={{
                    bottom: Size(10),
                }}>
                    <Image style={{width: '100%', height: Size(200)}}
                           source={require('../images/swiperImg/3.jpeg')}/>
                    <Image style={{width: '100%', height: Size(200)}}
                           source={require('../images/swiperImg/1.jpg')}/>
                    <Image style={{width: '100%', height: Size(200)}}
                           source={require('../images/swiperImg/2.jpg')}/>
                </Swiper>
            </View>

        )
    }

    renderArticleItem({item}) {
        return (
            <ArticleItem
                data={item}
            />
        )
    }

    renderContent() {
        return (
            <FlatList
                data={this.state.data}
                renderItem={this.renderArticleItem.bind(this)}
            />
        )
    }
    renderNavItem({item}){
        return(
            <View
                style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center',
                    width:Size(80),
                    height:Size(40)
                }}
            >
                <Text
                    style={{
                        fontSize:Size(14),
                        color:'#fff',
                        fontWeight:'bold'
                    }}
                >
                    {item}
                </Text>
            </View>
        )
    }
    renderNavBar(){
        return(
            <FlatList
                style={{
                    backgroundColor:'#d81e06'
                }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={this.state.navData}
                renderItem={this.renderNavItem.bind(this)}
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderNav()}
                <ScrollView
                    stickyHeaderIndices={[1]}
                >
                    {this.renderSwiper()}
                    {this.renderNavBar()}
                    {this.renderContent()}
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    tabBarIcon: {
        width: Size(21),
        height: Size(21),
    }
});