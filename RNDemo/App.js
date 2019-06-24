import React, {Component} from 'react';
import {View} from "react-native";
import {Router} from "react-native-router-flux";
import * as Platform from "react-native";
import {scenes} from "./Pages/tools/Roots";
class App extends Component {
    render() {
            return (
                <View style={{flex: 1}}>
                    <Router
                        // uriPrefix={Platform.OS === 'ios' ? 'com.langpeio2o.webapp://' : 'app'}
                        scenes={scenes}
                        backAndroidHandler={() => {}}
                    />
                </View>
            )
    }
}
export default App