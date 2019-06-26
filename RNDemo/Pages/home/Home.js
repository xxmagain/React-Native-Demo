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

export default class Home extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = {
            data: ''
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
            <View style={{height: 200}}>
                <Swiper autoplay loop={true} style={{height: 200}} paginationStyle={{
                    bottom: 10,
                }}>
                    <Image style={{width: '100%', height: 200}}
                           source={require('../images/swiperImg/3.jpeg')}/>
                    <Image style={{width: '100%', height: 200}}
                           source={require('../images/swiperImg/1.jpg')}/>
                    <Image style={{width: '100%', height: 200}}
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

    render() {
        return (
            <View style={styles.container}>
                {this.renderNav()}
                <ScrollView>
                    {this.renderSwiper()}
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
        width: 21,
        height: 21,
    }
});