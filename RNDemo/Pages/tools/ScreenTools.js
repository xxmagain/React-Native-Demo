import {Dimensions} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const basePx = 375
/**
 * 屏幕适配
 * @return {number}
 */
var Size = function (font) {
    return font * SCREEN_WIDTH / basePx
}

export {
    Size,
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
}