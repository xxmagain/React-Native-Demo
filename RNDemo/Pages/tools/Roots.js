import React, {Component} from 'react'
import {Image, Text, View} from "react-native";
import {Lightbox, Scene, Tabs,Actions} from "react-native-router-flux";
import Home from "../home/Home";
import Movie from "../movie/Movie";
import Mine from "../mine/Mine";
import ArticleDetail from "../home/details/ArticleDetail";
import MoreMovie from "../movie/MoreMovie";
import MovieDetail from "../movie/MovieDetail";
import {Size} from "./ScreenTools";

const HomeTabIcon = ({focused, title}) => {
    if (focused) {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../images/tabs/home.png')} style={{width:Size(30), height: Size(30)}}/>
                <Text style={{color: '#d81e06', fontSize: Size(11), includeFontPadding: false, marginTop:Size(2),}}>首页</Text>
            </View>
        )
    }
    return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../images/tabs/home_unsel.png')} style={{width:Size(30), height: Size(30)}}/>
            <Text style={{color: 'rgba(144, 147, 153, 1)', fontSize: Size(11), includeFontPadding: false, marginTop:Size(2),}}>首页</Text>
        </View>
    )
}
const MovieTabIcon = ({focused, title}) => {
    if (focused) {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../images/tabs/movie.png')} style={{width:Size(30), height: Size(30)}}/>
                <Text style={{color: '#d81e06',fontSize: Size(11), includeFontPadding: false, marginTop:Size(2),}}>电影</Text>
            </View>
        )
    }
    return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../images/tabs/movie_unsel.png')} style={{width:Size(30), height: Size(30)}}/>
            <Text style={{color: 'rgba(144, 147, 153, 1)', fontSize: Size(11), includeFontPadding: false, marginTop:Size(2),}}>电影</Text>
        </View>
    )
}
const MineTabIcon = ({focused, title}) => {
    if (focused) {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../images/tabs/mine.png')} style={{width:Size(25), height:Size(25)}}/>
                <Text style={{color: '#d81e06',fontSize: Size(11), includeFontPadding: false, marginTop:Size(2),}}>我的</Text>
            </View>
        )
    }
    return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../images/tabs/mine_unsel.png')} style={{width:Size(25), height:Size(25)}}/>
            <Text style={{color: 'rgba(144, 147, 153, 1)', fontSize: Size(11), includeFontPadding: false, marginTop:Size(2),}}>我的</Text>
        </View>
    )
}
const scenes = Actions.create(
    <Lightbox>
        <Scene key="root" SceneStyle={{backgroundColor: '#FFF'}}>
            <Tabs
                key="tabbar"
                name="tabbar"
                tabBarPosition={'bottom'}
                animationEnabled={false}
                tabBarStyle={{
                    borderTopColor: '#e7e9ed',
                    backgroundColor: '#FFF',
                    paddingLeft:Size(13),
                    paddingRight:Size(13),
                    paddingBottom:0,
                    height:Size(60)
                }}
                lazy={true}
                showLabel={false}
                activeTintColor={"#d81e06"}
                inactiveTintColor={"#686868"}
                swipeEnabled={false}
                hideNavBar={true}>
                <Scene key="Home" component={Home} title="123" hideNavBar={true} icon={HomeTabIcon}/>
                <Scene key="Movie" component={Movie} title="123" hideNavBar={true}
                       titleStyle={{width: 0, height: 0}}
                       icon={MovieTabIcon}/>
                <Scene key="Mine" component={Mine} title="123" hideNavBar={true} icon={MineTabIcon}/>
            </Tabs>
            <Scene key="ArticleDetail" component={ArticleDetail} title="" hideNavBar={true}/>
            <Scene key="MoreMovie" component={MoreMovie} title="" hideNavBar={true}/>
            <Scene key="MovieDetail" component={MovieDetail} title="" hideNavBar={true}/>
        </Scene>
    </Lightbox>
)
module.exports = {scenes}