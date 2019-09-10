import React, {Component} from 'react'
import {Text, View, Image, TouchableOpacity} from "react-native";
import Icon from '../../icon/IconFont';
import {SCREEN_WIDTH} from '../../Constant'
import Starts from "./Starts";
import Tools from '../../tools/Tools'
import MovieItem from "./MovieItem";
import {Size} from "../../tools/ScreenTools";
export default class MovieListItem extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data
        }
    }

    render() {
        var movie = this.state.data
        return (
            <View style={{
                flexDirection: 'column',
                padding: Size(16),
                backgroundColor: '#fff',
                width: '100%',
                marginBottom:Size(16)
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: Size(12),
                        color: '#666'
                    }}>{this.props.titleType}</Text>
                    <TouchableOpacity
                        onPress={()=>{
                            this.props.moreBack&&this.props.moreBack()
                        }}
                        style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: '#1f4ba5',
                            fontSize: Size(12),
                            marginRight: Size(2)
                        }}>{'更多'}</Text>
                        <Icon name={'right'} size={18} color={'#1f4ba5'}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    {
                        movie && movie.map((item, index) => {
                            return (
                               <MovieItem data={item}/>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
}