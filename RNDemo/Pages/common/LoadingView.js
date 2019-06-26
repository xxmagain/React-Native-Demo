import React, {Component} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from "react-native";
export default class LoadingView extends Component {

    render() {

        if (!this.props.loading) {
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
                    borderRadius: 3,
                }}>

                    <ActivityIndicator
                        style={{
                            marginLeft:12,
                            marginRight:7,
                            width:16,
                            height:16,
                            marginTop:8,
                            marginBottom:8,
                        }}
                        animating={true}
                        color={'#FCEA33'}/>

                    <Text style={{
                        color: '#FFFFFF',
                        fontSize:14,
                        backgroundColor: 'transparent',
                        marginRight:16
                    }}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>

        );
    }
}
