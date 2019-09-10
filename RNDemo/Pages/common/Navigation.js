import React, {Component} from 'react'
import {Text, View, TouchableOpacity,StatusBar} from "react-native";
import Icon from '../icon/IconFont';
import {Actions} from "react-native-router-flux";
import {Size} from "../tools/ScreenTools";

export default class Navigation extends Component<{}> {
    constructor(props) {
        super(props)
        this.title = this.props.title
        this.showBack = this.props.showBack
        this.state = {}
    }

    render() {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                height: Size(64),
                backgroundColor: '#fff',
            }}>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                    hidden={this.hideStatusBar || this.state.hideStatusBar}  //是否隐藏状态栏。
                    backgroundColor={'#ff000000'} //状态栏的背景色
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                    barStyle={'dark-content'} // enum('default', 'light-content', 'dark-content')
                />
                <View style={{
                    width: '100%',
                    height: Size(64),
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: Size(20),
                    backgroundColor: '#fff'
                }}>
                    <Text style={{fontSize: Size(18), color: '#282828', fontWeight: 'bold'}}>{this.title}</Text>
                    {
                        this.showBack ?
                            <TouchableOpacity
                                onPress={() => {
                                    Actions.pop()
                                }}
                                style={{
                                    width: Size(100),
                                    position: 'absolute', left: 0, top: Size(27)
                                }}>
                                <Icon name={'left'} size={30}/>
                            </TouchableOpacity>
                            :
                            null
                    }

                </View>

            </View>
        )
    }
}