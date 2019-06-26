import React, {Component} from 'react';
import {View} from "react-native";
import {Router} from "react-native-router-flux";
import * as Platform from "react-native";
import {scenes} from "./Pages/tools/Roots";
if (__DEV__) {
    console.disableYellowBox = true; 			//关闭警告
    console.warn('YellowBox is disabled.');	//关闭警告
}
class App extends Component {
    render() {
            return (
                <View style={{flex: 1}}>
                    <Router
                        scenes={scenes}
                        backAndroidHandler={() => {}}
                    />
                </View>
            )
    }
}
export default App