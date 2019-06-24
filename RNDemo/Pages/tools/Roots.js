import React, {Component} from 'react'
import {Image, Text, View} from "react-native";
import {Lightbox, Scene, Tabs,Actions} from "react-native-router-flux";
import Home from "../home/Home";
import Movie from "../movie/Movie";
import Mine from "../mine/Mine";

const HomeTabIcon = ({focused, title}) => {
    if (focused) {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../images/tabs/home.png')} style={{width:30, height: 30}}/>
                <Text style={{color: '#d81e06', fontSize: 11, includeFontPadding: false, marginTop:2,}}>首页</Text>
            </View>
        )
    }
    return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../images/tabs/home_unsel.png')} style={{width: 30, height:30}}/>
            <Text style={{color: 'rgba(144, 147, 153, 1)', fontSize:11, includeFontPadding: false, marginTop:2,}}>首页</Text>
        </View>
    )
}
const MovieTabIcon = ({focused, title}) => {
    if (focused) {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../images/tabs/movie.png')} style={{width:30, height:30}}/>
                <Text style={{color: '#d81e06', fontSize: 11, includeFontPadding: false, marginTop:2,}}>电影</Text>
            </View>
        )
    }
    return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../images/tabs/movie_unsel.png')} style={{width:30, height:30}}/>
            <Text style={{color: 'rgba(144, 147, 153, 1)', fontSize:11, includeFontPadding: false, marginTop:2,}}>电影</Text>
        </View>
    )
}
const MineTabIcon = ({focused, title}) => {
    if (focused) {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../images/tabs/mine.png')} style={{width:25, height:25}}/>
                <Text style={{color: '#d81e06', fontSize: 11, includeFontPadding: false, marginTop:2,}}>我的</Text>
            </View>
        )
    }
    return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../images/tabs/mine_unsel.png')} style={{width:25, height:25}}/>
            <Text style={{color: 'rgba(144, 147, 153, 1)', fontSize:11, includeFontPadding: false, marginTop:2,}}>我的</Text>
        </View>
    )
}
const scenes = Actions.create(
    <Lightbox>
        <Scene key="root" SceneStyle={{backgroundColor: '#FFF'}}>
            {/*<Scene key="HomePage" component={Home} title="" hideNavBar={true} initial={true}/>*/}
            <Tabs
                key="tabbar"
                name="tabbar"
                tabBarPosition={'bottom'}
                animationEnabled={false}
                tabBarStyle={{
                    borderTopColor: '#e7e9ed',
                    backgroundColor: '#FFF',
                    paddingLeft:13,
                    paddingRight:13,
                    paddingBottom:0,
                    height:60
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
        </Scene>
    </Lightbox>
)
module.exports = {scenes}