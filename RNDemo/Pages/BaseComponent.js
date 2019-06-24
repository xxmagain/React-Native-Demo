import React, {Component} from 'react';
import {StatusBar, View} from "react-native";
import LoadingView from "./LoadingView";
export default class BaseComponent extends Component{
    constructor(props){
        super(props)
        this.isHideNavBar=this.props.isHideNavBar?this.props.isHideNavBar:false;
        this.title = this.props.title?this.props.title:null;
        this.state={
            isLoading:this.props.isLoading
        }
    }

    getComponentName() {
        return "BaseComponent";
    }
    onRightButtonPress() {

    }
    goBack(){

    }
    render() {
        return (
            <View
                style={[styles.container, {backgroundColor:'transparent'}]}>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                    hidden={this.hideStatusBar || this.state.hideStatusBar}  //是否隐藏状态栏。
                    backgroundColor={'#ff000000'} //状态栏的背景色
                    translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                    barStyle={'dark-content'} // enum('default', 'light-content', 'dark-content')
                />

                {!this.state.isHideNavBar ?
                    <NavigationBar
                        title={this.title}
                        leftButtonIcon={'fanhui'}
                        leftButtonTitleColor={'#282828'}
                        backgroundColor={'#282828'}
                        titleColor={'#282828'}
                        rightButtonTitle={'#282828'}
                        rightButtonTitleColor={'#282828'}
                        onRightButtonPress={() => this.onRightButtonPress()}
                        onLeftButtonPress={() => this.goBack()}
                    />
                    :
                    null
                }

                {this._renderComponents()}

                <LoadingView loading={this.state.isLoading&& this.state.isLoading}
                             text={'正在加载...'}/>

            </View>
        );
    }
    _renderComponents() {
        return this.renderViews();
    }
}