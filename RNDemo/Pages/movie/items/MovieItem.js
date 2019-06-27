import React,{Component} from 'react'
import {View,Image,Text} from 'react-native'
import Starts from "./Starts";
import * as Tools from "../../tools/Tools";
import {SCREEN_WIDTH} from "../../Constant";
export default class MovieItem extends Component<{}>{
    constructor(props){
        super(props)
        this.state={
            data:this.props.data
        }
    }
    render(){
        var item = this.state.data
        return(
            <View style={{
                width: (SCREEN_WIDTH - 20) / 3,
                flexDirection: 'column',
                marginTop: 18,
            }}>
                <Image
                    source={{uri: item.images.large}}
                    style={{
                        width: 100,
                        height: 135
                    }}
                />
                <Text
                    numberOfLines={1}
                    style={{
                        width: 100,
                        fontSize: 12,
                        color: '#666',
                        marginTop: 8,
                        marginBottom:8
                    }}>{item.original_title}</Text>
                <Starts data={Tools.convertToStarsArray(item.rating.stars)}/>
            </View>
        )
    }
}