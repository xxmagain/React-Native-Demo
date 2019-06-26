import {AsyncStorage} from "react-native";

var APPStorage = {
    /**
     * 点击收藏
     * @param id 收藏ID
     * @param params 取消还是收藏
     */
    doCollect:function(id,params){
        AsyncStorage.setItem('collectIds'+id, params).then((res) => {
            console.log("点击收藏"+id,params)
        }).catch((err)=> {
            console.log('收藏失败' + err)
        })
    },
    /**
     * 获取是否收藏
     * @param id
     */
    getCollect:function(id,callBack){
        AsyncStorage.getItem('collectIds'+id).then((res) => {
            if (res) {
                callBack(JSON.parse(res))
            } else {
                callBack(null)
            }
        }).catch((err) => {
            console.log('获取收藏数据失败' + err)
            callBack(null)
        });
    }
}
module.exports = APPStorage