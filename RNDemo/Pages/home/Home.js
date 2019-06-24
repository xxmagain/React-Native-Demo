import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import Icon from  '../icon/IconFont'

export default class home extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Icon name={"right"} size={20} color={"#FFBC01"}
                      style={{backgroundColor: 'transparent', marginTop:1}}/>
                <Text>首页</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarIcon: {
        width: 21,
        height: 21,
    }
});