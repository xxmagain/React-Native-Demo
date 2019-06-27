
const BASEURL = "http://t.yushu.im"

export function post(url, params, successBack, failBack) {
    var options={
        method:'POST',
        header:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(params),
    }
    fetch(url,options).then((response)=>response.json)
        .then((responseJson)=>{
            successBack&&successBack(responseJson)
        })
        .catch((error)=>{
            failBack&&failBack(error)
            console.log(error)
        })
}

export function get(url,successBack, failBack) {
    var options={
        method:'GET',
        header:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }
    fetch(url,options).then((response)=>response.json())
        .then((responseJson)=>{
            successBack&&successBack(responseJson)
        })
        .catch((error)=>{
            failBack&&failBack(error)
            console.log(error)
        })
}

export {
    BASEURL
}