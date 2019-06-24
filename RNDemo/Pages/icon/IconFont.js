import createIconSet from 'react-native-vector-icons/lib/create-icon-set';

var glyphMap = {
    "shanchu":58985,
    "right":58898,
    "label1":58899,
    "label":58900,
    "watch":58903,
    "collect":58904,
    "search":58905,
    "left":58906,
    "dianzan":58907,
    "rili":58902,
    "setting":58908
}

var IconFont = createIconSet(glyphMap, 'iconfont', 'iconfont.ttf');

module.exports = IconFont;
module.exports.glyphMap = glyphMap;