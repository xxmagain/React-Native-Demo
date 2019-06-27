import React,{Component} from 'react'
import {View,Image} from "react-native";

export default class Starts extends Component<{}>{
    constructor(props){
        super(props)
        this.state={
            data:this.props.data
        }
    }
    render(){
        return(
            <View style={{
                flexDirection:'row',
                alignItems:'center'
            }}>
                {
                    this.state.data&&this.state.data.map((item,index)=>{
                        return(
                            <Image
                                source={item?require('../../images/movie/star.png'):require('../../images/movie/none-star.png')}
                                style={{
                                    width:10,
                                    height:10,
                                }}
                            />
                        )
                    })
                }
            </View>
        )
    }
}