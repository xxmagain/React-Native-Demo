import React, {Component} from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'
import Starts from "./Starts";
import * as Tools from "../../tools/Tools";
import {Actions} from "react-native-router-flux";
import {SCREEN_WIDTH, Size} from "../../tools/ScreenTools";
export default class MovieItem extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data
        }
    }

    render() {
        var item = this.state.data
        return (
            <TouchableOpacity
                onPress={() => {
                    Actions.push("MovieDetail",{id:this.state.data.id})
                }}
                style={{
                    width: (SCREEN_WIDTH - 20) / 3,
                    flexDirection: 'column',
                    marginTop: Size(18),
                }}>
                <Image
                    source={{uri: item.images.large}}
                    style={{
                        width: Size(100),
                        height: Size(135)
                    }}
                />
                <Text
                    numberOfLines={1}
                    style={{
                        width: Size(100),
                        fontSize: Size(12),
                        color: '#666',
                        marginTop: Size(8),
                        marginBottom: Size(8)
                    }}>{item.original_title}</Text>
                <Starts data={Tools.convertToStarsArray(item.rating.stars)}/>
            </TouchableOpacity>
        )
    }
}