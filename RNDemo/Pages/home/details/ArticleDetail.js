import React, {Component,PureComponent} from 'react'
import Navigation from "../../common/Navigation";
import {ScrollView, View, Image, Text, TouchableOpacity,ToastAndroid} from "react-native";
import * as AppStorage from "../../tools/APPStorage";
import Toast from 'react-native-root-toast';
var postsData = require('../../data/posts-data.js')
export default class ArticleDetail extends PureComponent<{}>{
    constructor(props) {
        super(props)
        this.id = this.props.id
        this.state = {
            isCollect: '',
            data: ''
        }
    }

    componentDidMount(){
        AppStorage.getCollect(this.id, (res) => {
            if (res) {
                this.setState({
                    isCollect: true,
                    data: postsData.postList[this.id]
                })
            } else {
                this.setState({
                    isCollect: false,
                    data: postsData.postList[this.id]
                })
            }
        })
    }

    onCollect(){
        var isClt = this.state.isCollect
        this.setState({
            isCollect:!isClt
        })
        AppStorage.doCollect(this.id,!isClt+'')
        Toast.show(this.state.isCollect?'取消成功':'收藏成功')
    }
    renderContent() {
        var url = this.state.isCollect?require('../../images/details/collection.png'):require("../../images/details/collection-anti.png")
        return (
            <ScrollView style={{
                flex: 1,
                marginBottom: 30
            }}>
                <Image source={{uri: this.state.data.headImgSrc}} style={{
                    width: '100%',
                    height: 240
                }}/>
                <View style={{
                    flexDirection: 'row',
                    padding: 16,
                    alignItems: 'center',
                }}>
                    <Image source={{uri: this.state.data.avatar}} style={{width: 40, height: 40, borderRadius: 20}}
                           resizeMode={'contain'}/>
                    <Text style={{
                        fontSize: 16,
                        color: '#666',
                        marginLeft: 8,
                        marginRight: 8
                    }}>{this.state.data.author}</Text>
                    <Text style={{
                        fontSize: 14,
                        color: '#999'
                    }}>{'发表于    ' + this.state.data.dateTime}</Text>
                </View>
                <Text style={{
                    fontSize: 16,
                    color: '#4b556c',
                    marginBottom: 10,
                    fontWeight: 'bold',
                    lineHeight: 20,
                    marginLeft: 16,
                    marginRight: 16
                }}>{this.state.data.title}</Text>
                <View style={{
                    marginLeft: 16,
                    marginRight: 16,
                    height: 65,
                    justifyContent: 'center'
                }}>
                    <View style={{
                        width: '100%',
                        backgroundColor: '#e5e5e5',
                        height: 1
                    }}/>
                    <View style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        right: 0
                    }}>
                        <TouchableOpacity
                            onPress={()=>{
                                this.onCollect()
                            }}
                        >
                            <Image
                                resizeMode={'cover'}
                                source={url} style={{
                                width: 45,
                                height: 45,
                            }}/>
                        </TouchableOpacity>
                        <Image source={require('../../images/details/share.png')} style={{
                            marginLeft: 10,
                            width: 45,
                            height: 45,
                        }}/>
                    </View>
                </View>
                <Text style={{
                    fontSize: 14,
                    lineHeight: 18,
                    color: '#666',
                    marginLeft: 16,
                    marginRight: 16,
                }}>{this.state.data.detail}</Text>
            </ScrollView>
        )
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Navigation title={"文章详情"} showBack={true}/>
                {this.renderContent()}
            </View>
        )

    }
}