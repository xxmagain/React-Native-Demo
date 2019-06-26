import React, {Component} from 'react'
import {Text, View, TouchableOpacity} from "react-native";
import Icon from '../icon/IconFont';
import {Actions} from "react-native-router-flux";

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
                height: 64,
                backgroundColor: '#fff'
            }}>
                <View style={{
                    width: '100%',
                    height: 64,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: 20,
                    backgroundColor: '#fff'
                }}>
                    <Text style={{fontSize: 18, color: '#282828', fontWeight: 'bold'}}>{this.title}</Text>
                    {
                        this.showBack ?
                            <TouchableOpacity
                                onPress={() => {
                                    Actions.pop()
                                }}
                                style={{
                                    width: 100,
                                    position: 'absolute', left: 0, top: 27
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