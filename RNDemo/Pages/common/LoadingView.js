import React, {Component} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from "react-native";
import {Size} from "../tools/ScreenTools";
export default class LoadingView extends Component<{}> {
    constructor(props){
        super(props)
        this.state={
            loading:this.props.loading?this.props.loading:false
        }
    }
    render() {

        if (!this.state.loading) {
            return null
        }

        return (
              <TouchableOpacity
                    onPress={()=>{
                    }}
                    activeOpacity={1}
                    pointerEvents={"auto"}
                    style={{
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        position: 'absolute',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor:'rgba(0,0,0,0.0)'
                    }}>

                    <View style={{
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: Size(3),
                    }}>

                        <ActivityIndicator
                            style={{
                                marginLeft:Size(12),
                                marginRight:Size(7),
                                width:Size(16),
                                height:Size(16),
                                marginTop:Size(8),
                                marginBottom:Size(8),
                            }}
                            animating={true}
                            color={'#FCEA33'}/>

                        <Text style={{
                            color: '#282828',
                            fontSize:Size(14),
                            backgroundColor: 'transparent',
                            marginRight:Size(16)
                        }}>{'正在加载...'}</Text>
                    </View>
                </TouchableOpacity>
        );
    }
}
