import React, {Component} from 'react'
import {View, Text, Image} from "react-native";
import Icon from '../../icon/IconFont'

export default class ArticleItem extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data
        }
    }

    render() {
        return (
            <View style={{
                width: '100%',
                marginTop: 20,
                paddingBottom: 20,
            }}>
                <View style={{width: '100%', height: 1, backgroundColor: "#ededed"}}/>
                <View style={{
                    padding: 16,
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <Image source={{uri: this.state.data.headImgSrc}} style={{
                        borderRadius: 20,
                        width: 40,
                        height: 40,
                    }}/>
                    <Text style={{
                        fontSize: 18,
                        marginLeft: 8
                    }}>{this.state.data.date}</Text>
                </View>
                <Text style={{
                    fontSize: 16,
                    marginLeft: 16,
                    marginRight:16,
                    fontWeight: 'bold',
                    lineHeight:20,
                    marginBottom: 16
                }}>{this.state.data.title}</Text>
                <Image source={{uri: this.state.data.imgSrc}} style={{
                    width: '90%',
                    height: 200,
                    marginLeft: 16,
                    marginRight: 16
                }}/>
                <Text
                    numberOfLines={3}
                    style={{
                        fontSize: 14,
                        color: '#282828',
                        padding: 16,
                        lineHeight: 20,
                    }}>{this.state.data.content}</Text>
                <View style={{
                    flexDirection: 'row',
                    marginLeft: 16,
                    alignItems: 'center',
                }}>
                    <Icon name={'collect'} size={20} color={'#a6a6a6'}/>
                    <Text style={{
                        fontSize: 13,
                        lineHeight: 16,
                        marginRight: 15
                    }}>{this.state.data.collection}</Text>
                    <Icon name={'watch'} size={20} color={'#a6a6a6'}/>
                    <Text style={{
                        fontSize: 13,
                        lineHeight: 16,
                        includeFontPadding: false
                    }}>{this.state.data.reading}</Text>
                </View>

            </View>
        )
    }
}