import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity} from "react-native";
import Icon from '../../icon/IconFont'
import {Actions} from "react-native-router-flux";
import {Size} from "../../tools/ScreenTools";
export default class ArticleItem extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data
        }
    }

    render() {
        return (
            <TouchableOpacity
                onPress={()=>{
                    Actions.push("ArticleDetail",{id:this.state.data.postId})
                }}
                style={{
                width: '100%',
                paddingBottom: Size(20),
            }}>
                <View style={{width: '100%', height: 1, backgroundColor: "#ededed"}}/>
                <View style={{
                    padding: Size(16),
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <Image source={{uri: this.state.data.headImgSrc}} style={{
                        borderRadius: Size(20),
                        width: Size(40),
                        height: Size(40),
                    }}/>
                    <Text style={{
                        fontSize: Size(18),
                        marginLeft: Size(8)
                    }}>{this.state.data.date}</Text>
                </View>
                <Text style={{
                    fontSize: Size(16),
                    marginLeft: Size(16),
                    marginRight:Size(16),
                    fontWeight: 'bold',
                    lineHeight:Size(20),
                    marginBottom: Size(16)
                }}>{this.state.data.title}</Text>
                <Image source={{uri: this.state.data.imgSrc}} style={{
                    width: '90%',
                    height: Size(200),
                    marginLeft: Size(16),
                    marginRight: Size(16)
                }}/>
                <Text
                    numberOfLines={3}
                    style={{
                        fontSize: Size(14),
                        color: '#282828',
                        padding: Size(16),
                        lineHeight: Size(20),
                    }}>{this.state.data.content}</Text>
                <View style={{
                    flexDirection: 'row',
                    marginLeft: Size(16),
                    alignItems: 'center',
                }}>
                    <Icon name={'collect'} size={20} color={'#a6a6a6'}/>
                    <Text style={{
                        fontSize: Size(13),
                        lineHeight: Size(16),
                        marginRight: Size(15)
                    }}>{this.state.data.collection}</Text>
                    <Icon name={'watch'} size={20} color={'#a6a6a6'}/>
                    <Text style={{
                        fontSize: Size(13),
                        lineHeight: Size(16),
                        includeFontPadding: false
                    }}>{this.state.data.reading}</Text>
                </View>

            </TouchableOpacity>
        )
    }
}