import React, {Component} from 'react';
import {View, ScrollView, Image, Text, findNodeHandle,FlatList} from "react-native";
import Navigation from "../common/Navigation";
import Starts from "./items/Starts";
import * as Tools from "../tools/Tools";
import * as Http from "../network/Http";
import LoadingView from "../common/LoadingView";
import {BlurView} from "react-native-blur";
import {SCREEN_WIDTH, Size} from "../tools/ScreenTools";

export default class MovieDetail extends Component<{}> {
    constructor(props) {
        super(props)
        this.id = this.props.id
        this.state = {
            data: ''
        }

    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        this.setState({
            isLoading: true,
        })
        var url = Http.BASEURL + "/v2/movie/subject/" + this.id;
        Http.get(url, (res) => {
            console.log(res)
            this.setState({
                isLoading: false,
                data: res
            })
        }, (err) => {
            this.setState({
                isLoading: false
            })
            console.log('获取电影数据失败')
        })
    }

    renderTop() {
        return (
            <View style={{
                width: SCREEN_WIDTH,
                height: Size(220)
            }}>
                <Image
                    ref={(img) => {
                        this.backgroundImage = img;
                    }}
                    style={{
                        width: '100%',
                        height: Size(220),
                        position: 'absolute',
                        backgroundColor: 'transparent'
                    }}
                    source={{uri: this.state.data.images && this.state.data.images.large}}
                    resizeMode={'cover'}
                    blurRadius={15}
                />
                <View style={{
                    position: 'absolute',
                    width: SCREEN_WIDTH,
                    height: Size(220),
                    left: Size(16),
                    top: 0,
                    flexDirection: 'column'
                }}>
                    <Text style={{
                        fontSize: Size(24),
                        fontWeight: 'bold',
                        color: '#fff',
                        marginTop: Size(40)
                    }}>
                        {this.state.data.original_title&&this.state.data.original_title.substr(0,6)}
                    </Text>
                    <Text style={{
                        fontSize: Size(18),
                        fontWeight: 'bold',
                        color: '#fff',
                        marginTop: Size(20)
                    }}>
                        {this.state.data.countries && this.state.data.countries[0] + " · " + this.state.data.year}
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: Size(40),
                    }}>
                        <Text style={{
                            fontSize: Size(14),
                            color: '#f21146'
                        }}>
                            {this.state.data.wish_count}
                        </Text>
                        <Text style={{
                            fontSize: Size(14),
                            color: '#666',
                            marginLeft: Size(5)
                        }}>
                            人喜欢
                        </Text>
                        <Text style={{
                            fontSize: Size(14),
                            color: '#f21146',
                            marginLeft: Size(15)
                        }}>
                            {this.state.data.reviews_count}
                        </Text>
                        <Text style={{
                            fontSize: Size(14),
                            color: '#666'
                        }}>
                            条评论
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    renderInfo() {
        return (
            <View style={{
                flexDirection: 'column',
                marginTop: Size(20),
                marginLeft: Size(16)
            }}>
                <Text style={{
                    fontSize: Size(16),
                    fontWeight: 'bold',
                    color: '#666'
                }}>{this.state.data.title&&this.state.data.title.substr(0,6)}</Text>
                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    marginTop: Size(20)
                }}>
                    <Text style={{
                        flex: 1,
                        fontSize: Size(14),
                        color: '#999999',
                    }}>评分</Text>
                    <View style={{
                        flex: 4
                    }}>
                        <Starts data={Tools.convertToStarsArray(this.state.data && this.state.data.rating.stars)}/>
                    </View>
                </View>
                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    marginTop: Size(10)
                }}>
                    <Text style={{
                        flex: 1,
                        fontSize: Size(14),
                        color: '#999999',
                    }}>导演</Text>
                    <Text style={{
                        flex: 4,
                        fontSize: Size(14),
                        color: '#999999',
                    }}>{this.state.data.directors && this.state.data.directors[0].name}</Text>
                </View>
                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    marginTop: Size(10)
                }}>
                    <Text style={{
                        flex: 1,
                        fontSize: Size(14),
                        color: '#999999',
                    }}>影人</Text>
                    <Text style={{
                        flex: 4,
                        fontSize: Size(14),
                        color: '#999999',
                    }}>{Tools.convertToCastString(this.state.data.casts)}</Text>
                </View>
                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    marginTop: Size(10)
                }}>
                    <Text style={{
                        flex: 1,
                        fontSize: Size(14),
                        color: '#999999',
                    }}>类型</Text>
                    <Text style={{
                        flex: 4,
                        fontSize: Size(14),
                        color: '#999999',
                    }}>{this.state.data && this.state.data.genres.join("、")}</Text>
                </View>
            </View>
        )
    }
    renderDescription(){
        return(
            <View
                style={{
                    flexDirection:'column',
                    marginLeft:Size(16),
                    marginRight:Size(16)
                }}
            >
                <Text style={{fontSize:Size(14),color:'#999',marginTop:Size(20)}}>剧情简介</Text>
                <Text style={{
                    fontSize:Size(14),
                    marginTop:Size(10),
                    lineHeight:Size(20),
                    color:'#666'
                }}>{this.state.data.summary}</Text>
            </View>
        )
    }
    renderItem({item,index}){
        return(
            <View style={{
                flexDirection:'column',
                marginTop:Size(20),
                marginLeft:Size(16)
            }}>
                <Image
                    style={{
                        width: Size(100),
                        height:Size(150),
                    }}
                    source={{uri:item.avatars.large}}
                    resizeMode={'cover'}
                />
                <Text style={{
                    fontSize:Size(14),
                    marginTop:Size(10),
                    textAlign:'center'
                }}>{item.name}</Text>
            </View>
        )
    }
    renderCast(){
        return(
            <View style={{
                flexDirection:'column'
            }}>
                <Text style={{fontSize:14,color:'#999',marginTop:Size(20),marginLeft:Size(16)}}>影人</Text>
                <FlatList
                    horizontal={true}
                    data={this.state.data.casts}
                    renderItem={this.renderItem.bind(this)}
                />
            </View>
        )
    }
    render() {
        if (this.state.isLoading) {
            return (
                <LoadingView loading={true}/>
            )
        }
        return (
            <View style={{
                flex: 1,
            }}>
                <Navigation title={'电影详情'} showBack={true}/>
                <ScrollView style={{
                    backgroundColor: '#fff',
                }}>
                    {this.renderTop()}
                    <Image
                        style={{
                            width: Size(100),
                            height:Size(150),
                            position: 'absolute',
                            backgroundColor: 'transparent',
                            top:Size(120),
                            right:Size(16)
                        }}
                        source={{uri: this.state.data.images && this.state.data.images.large}}
                        resizeMode={'cover'}
                    />
                    {this.renderInfo()}
                    <View style={{backgroundColor:'#eee',width:'100%',height:1,marginTop:Size(20)}}/>
                    {this.renderDescription()}
                    <View style={{backgroundColor:'#eee',width:'100%',height:1,marginTop:Size(20)}}/>
                    {this.renderCast()}
                    <View style={{width:'100%',height:Size(40),marginTop:Size(20)}}/>
                </ScrollView>
            </View>
        )
    }
}