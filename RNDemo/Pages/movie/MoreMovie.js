import React,{Component} from 'react';
import {View,FlatList} from "react-native";
import MovieItem from "./items/MovieItem";
import * as Http from "../network/Http";
export default class MoreMovie extends Component<{}>{
    constructor(props){
        super(props)
        this.state={
            type:this.props.type,
            data:[]
        }
    }
    componentDidMount() {
        var url
        switch (this.state.type){
            case 'inTheaters':
                url = Http.BASEURL + "/v2/movie/in_theaters"
                break
            case 'comingSoon':
                url = Http.BASEURL + "/v2/movie/coming_soon"
                break
            case 'top':
                url = Http.BASEURL +  "/v2/movie/top250"
                break
        }
        this.getData(url)
    }
    getData(url){
        Http.get(url, (res) => {
            console.log(res)
            this.setState({
                isLoading: false,
                data:res.subjects
            })
        }, (err) => {
            this.setState({
                isLoading: false
            })
            console.log('获取电影数据失败')
        })
    }
    renderItem({item,index}){
        return(
            <MovieItem data={item}/>
        )
    }
    render(){
        if(this.state.data.length===0){
            return null
        }
        return(
            <View style={{
                width:'100%',
            }}>
                <FlatList
                    horizontal={false}
                    numColumns={3}
                    data={this.state.data}
                    renderItem={this.renderItem.bind(this)}
                    key={'Grid'}
                />

            </View>
        )
    }
}