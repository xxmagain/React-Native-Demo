import React, {Component,PureComponent} from 'react'
import Navigation from "../../common/Navigation";
import {ScrollView, View, Image, Text, TouchableOpacity,ToastAndroid} from "react-native";
import * as AppStorage from "../../tools/APPStorage";
import Toast from 'react-native-root-toast';
import {Size} from "../../tools/ScreenTools";
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
                marginBottom: Size(30)
            }}>
                <Image source={{uri: this.state.data.headImgSrc}} style={{
                    width: '100%',
                    height: Size(240)
                }}/>
                <View style={{
                    flexDirection: 'row',
                    padding: Size(16),
                    alignItems: 'center',
                }}>
                    <Image source={{uri: this.state.data.avatar}} style={{width: 40, height: 40, borderRadius: 20}}
                           resizeMode={'contain'}/>
                    <Text style={{
                        fontSize: Size(16),
                        color: '#666',
                        marginLeft: Size(8),
                        marginRight: Size(8)
                    }}>{this.state.data.author}</Text>
                    <Text style={{
                        fontSize: Size(14),
                        color: '#999'
                    }}>{'发表于    ' + this.state.data.dateTime}</Text>
                </View>
                <Text style={{
                    fontSize: Size(16),
                    color: '#4b556c',
                    marginBottom: Size(10),
                    fontWeight: 'bold',
                    lineHeight: Size(20),
                    marginLeft: Size(16),
                    marginRight: Size(16)
                }}>{this.state.data.title}</Text>
                <View style={{
                    marginLeft: Size(16),
                    marginRight: Size(16),
                    height: Size(65),
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
                                width: Size(45),
                                height: Size(45),
                            }}/>
                        </TouchableOpacity>
                        <Image source={require('../../images/details/share.png')} style={{
                            marginLeft: Size(10),
                            width:Size(45),
                            height: Size(45),
                        }}/>
                    </View>
                </View>
                <Text style={{
                    fontSize: Size(14),
                    lineHeight: Size(18),
                    color: '#666',
                    marginLeft: Size(16),
                    marginRight: Size(16),
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