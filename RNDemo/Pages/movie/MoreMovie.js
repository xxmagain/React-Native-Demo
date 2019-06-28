import React, {Component} from 'react';
import {View, FlatList} from "react-native";
import MovieItem from "./items/MovieItem";
import * as Http from "../network/Http";
import Navigation from "../common/Navigation";
import LoadingView from "../common/LoadingView";

export default class MoreMovie extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = {
            type: this.props.type,
            data: []
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
            isLoading: true
        })
        this.getData(url)
    }

    getData(url) {
        Http.get(url, (res) => {
            console.log(res)
            this.setState({
                isLoading: false,
                data: res.subjects
            })
        }, (err) => {
            this.setState({
                isLoading: false
            })
            console.log('获取电影数据失败')
        })
    }

    renderItem({item, index}) {
        return (
            <MovieItem data={item}/>
        )
    }

    render() {
        if (this.state.data.length === 0) {
            return null
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
                />
                <LoadingView loading={this.state.isLoading}/>
            </View>
        )
    }
}