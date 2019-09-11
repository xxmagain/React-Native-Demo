import React, {Component} from 'react';

var postData = require('../data/posts-data.js');
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    ScrollView, StatusBar, TouchableOpacity
} from 'react-native';
import {SCREEN_WIDTH} from '../Constant'
import Swiper from "../../node_modules/react-native-swiper/index";
import ArticleItem from "./items/ArticleItem";
import {Size} from "../tools/ScreenTools";

export default class Home extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = {
            data: '',
            navData:[{name:'精选',selected:true},{name:'体育',selected:false} ,{name:'娱乐',selected:false},{name:'金融',selected:false},{name:'体育',selected:false},{name:'生活',selected:false}],
            index:0,
        }
    }

    componentDidMount() {
        this.setState({
            data: postData.postList
        })
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
    renderNavItem({item,index}){
        return(
            <TouchableOpacity
                style={{
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'center',
                    width:Size(80),
                    height:Size(40),
                }}
                onPress={()=>{
                    var data = this.state.navData;
                    for(let i=0;i<data.length;i++){
                        if(i===index){
                            data[index].selected = !this.state.navData[index].selected;
                        }else {
                            data[i].selected  = false;
                        }
                    }
                    this.setState({
                        navData:data
                    })
                }}
            >
                <Text
                    style={{
                        fontSize:Size(14),
                        color:'#fff',
                        fontWeight:'bold'
                    }}
                >
                    {item.name}
                </Text>
                {
                    item.selected?
                        <View style={{
                            marginTop:Size(4),
                            width:Size(32),
                            height:Size(1),
                            backgroundColor:'#fff'
                        }}/>
                        :null
                }

            </TouchableOpacity>
        )
    }
    renderNavBar(){
        return(
            <View>
               <View style={{
                   backgroundColor:'#d81e06',
                   height:Size(24),
                   width:SCREEN_WIDTH,
               }}/>
                <FlatList
                    style={{
                        backgroundColor:'#d81e06',
                    }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={this.state.navData}
                    renderItem={this.renderNavItem.bind(this)}
                />
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                    hidden={false}  //是否隐藏状态栏。
                    backgroundColor={'#ff000000'} //状态栏的背景色
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                    barStyle={'dark-content'} // enum('default', 'light-content', 'dark-content')
                />
                <ScrollView
                    stickyHeaderIndices={[0]}
                >
                    {this.renderNavBar()}
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
        width: Size(21),
        height: Size(21),
    }
});