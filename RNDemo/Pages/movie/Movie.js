import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';
import * as Http from "../network/Http";
import LoadingView from "../common/LoadingView";
import MovieItem from "./items/MovieListItem";
import Navigation from "../common/Navigation";
import {Actions} from "react-native-router-flux";
import {Size} from "../tools/ScreenTools";
export default class movie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inTheaters: '',
            comingSoon:'',
            top:''
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })
        var url = Http.BASEURL + "/v2/movie/in_theaters" + "?start=0&count=3"
        this.getData(url,'inTheaters')
        var comeurl = Http.BASEURL + "/v2/movie/coming_soon" + "?start=0&count=3";
        this.getData(comeurl,'comingSoon')
        var topurl = Http.BASEURL +  "/v2/movie/top250" + "?start=0&count=3";
        this.getData(topurl,'top')
    }
    getData(url,type){
        Http.get(url, (res) => {
            console.log(res)
            this.setState({
                isLoading: false,
            })
            switch (type){
                case 'inTheaters':
                    this.setState({
                        inTheaters: res.subjects
                    })
                    break
                case 'comingSoon':
                    this.setState({
                        comingSoon: res.subjects
                    })
                    break
                case 'top':
                    this.setState({
                        top: res.subjects
                    })
                    break
            }
        }, (err) => {
            this.setState({
                isLoading: false
            })
            console.log('获取电影数据失败')
        })
    }
    goToMore(type){
        Actions.push("MoreMovie",{type:type})
    }
    render() {
        if(this.state.isLoading){
            return(
                <LoadingView loading={true}/>
            )
        }
        return (
            <View style={styles.container}>
                <Navigation title={"电影"} showBack={false}/>
                <ScrollView style={{
                    marginTop:10
                }}>
                    {this.state.inTheaters ? <MovieItem titleType={"正在热映"} data={this.state.inTheaters} moreBack={()=>{this.goToMore("inTheaters")}}/> : null}
                    {this.state.comingSoon ? <MovieItem titleType={"即将上映"} data={this.state.comingSoon} moreBack={()=>{this.goToMore("comingSoon")}}/> : null}
                    {this.state.top? <MovieItem titleType={"豆瓣Top250"} data={this.state.top} moreBack={()=>{this.goToMore("top")}}/> : null}
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBarIcon: {
        width: Size(21),
        height: Size(21),
    }
});