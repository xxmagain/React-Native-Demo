import React, {Component} from 'react';
import {View, FlatList, Text} from "react-native";
import MovieItem from "./items/MovieItem";
import * as Http from "../network/Http";
import Navigation from "../common/Navigation";
import LoadingView from "../common/LoadingView";
import {SCREEN_WIDTH} from "../Constant";

export default class MoreMovie extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = {
            type: this.props.type,
            data: [],
            isHaveNext:false,
            refreshing:false,
            url:'',
            totalCount:0,
            total:0,
        }
    }

    componentDidMount() {
        var url
        switch (this.state.type) {
            case 'inTheaters':
                url = Http.BASEURL + "/v2/movie/in_theaters"
                this.setState({
                    title: '正在热映'
                })
                break
            case 'comingSoon':
                url = Http.BASEURL + "/v2/movie/coming_soon"
                this.setState({
                    title: '即将上映'
                })
                break
            case 'top':
                url = Http.BASEURL + "/v2/movie/top250"
                this.setState({
                    title: 'Top250'
                })
                break
        }
        this.setState({
            url:url,
            isLoading: true
        })
        this.getData(url,true)
    }

    getData(url,isEmpty) {
        Http.get(url, (res) => {
            console.log(res)
            this.setState({
                refreshing:false,
                isLoading: false,
                data:isEmpty?res.subjects:this.state.data.concat(res.subjects),
                total:res.total,
                totalCount:this.state.totalCount+=20
            })
        }, (err) => {
            this.setState({
                isLoading: false,
                refreshing:false,
            })
            console.log('获取电影数据失败')
        })
    }

    onRefresh(){
        this.setState({
            totalCount:0,
            refreshing:true,
        })
        var url = this.state.url + "?star=0&count=20";
        this.getData(url,true)
    }

    loadMoreData(){
        var nextUrl = this.state.url +
            "?start=" + this.state.totalCount + "&count=20";
        this.getData(nextUrl,false)
    }

    renderItem({item, index}) {
        return (
            <MovieItem data={item}/>
        )
    }
    ListFooterComponent() {
        if (this.state.totalCount<this.state.total) {
            return (
                <View
                    style={{
                        width: SCREEN_WIDTH-32,
                        height: 51,
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 15
                    }}
                >
                    <Text style={{fontSize: 12, color: "#747474"}}>-上滑加载更多-</Text>
                </View>
            );
        } else {
            return (
                <View
                    style={{
                        width: SCREEN_WIDTH-32,
                        height: 51,
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 15
                    }}
                >
                    <Text style={{fontSize: 12, color: "#747474"}}>-加载完成-</Text>
                </View>
            );
        }
    }
    render() {
        if(this.state.isLoading){
            return(
                <LoadingView loading={true}/>
            )
        }
        return (
            <View style={{
                width: '100%',
                flex:1,
            }}>
                <Navigation title={this.state.title} showBack={true}/>
                <FlatList
                    contentContainerStyle={{
                        backgroundColor:'#fff',
                        paddingLeft:16,
                        paddingRight:16,
                        paddingBottom:16
                    }}
                    horizontal={false}
                    numColumns={3}
                    data={this.state.data}
                    renderItem={this.renderItem.bind(this)}
                    key={'Grid'}
                    onRefresh={() => this.onRefresh()}
                    onEndReached={() => this.loadMoreData()}
                    onEndReachedThreshold={this.state.totalCount<this.state.total ? 0.01 : -1}
                    refreshing={this.state.refreshing}
                    ListFooterComponent={this.ListFooterComponent.bind(this)}
                />
            </View>
        )
    }
}