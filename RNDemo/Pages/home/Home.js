import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import Icon from  '../icon/IconFont'
import  {SCREEN_WIDTH} from '../Constant'
import Swiper from "../../node_modules/react-native-swiper/index";
export default class home extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    renderNav(){
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                height:64,
                backgroundColor: '#d81e06'
            }}>
                <View style={{
                    width:'100%',
                    height:64,
                    alignItems:'center',
                    justifyContent:'center',
                    paddingTop:20,
                    backgroundColor:'#d81e06'
                }}>
                    <Text style={{fontSize:18, color: '#FFF',fontWeight:'bold'}}>{'首页'}</Text>
                </View>
            </View>
        )
    }
    renderSwiper(){
        return(
            <Swiper  autoplay height={240} showsPagination={false} loop={true}>
                <View style={{width:'100%',height:200,backgroundColor:'yellow'}}>
                    <Text >Hello Swiper</Text>
                </View>
                <View style={{width:'100%',height:200,backgroundColor:'red'}}>
                    <Text >Beautiful</Text>
                </View>
                <View style={{width:'100%',height:200,backgroundColor:'blue'}}>
                    <Text >And simple</Text>
                </View>
            </Swiper>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderNav()}
                {this.renderSwiper()}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    tabBarIcon: {
        width: 21,
        height: 21,
    }
});