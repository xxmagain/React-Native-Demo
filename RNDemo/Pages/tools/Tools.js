const Tools = {
    convertToStarsArray(stars) {
        var num = stars.toString().substring(0, 1);
        var array = [];
        for (var i = 1; i <= 5; i++) {
            if (i <= num) {
                array.push(1);
            }
            else {
                array.push(0);
            }
        }
        return array;
    },
    convertToCastString(casts) {
        var castsjoin = "";
        for (var idx in casts) {
            castsjoin = castsjoin + casts[idx].name + " / ";
        }
        return castsjoin.substring(0, castsjoin.length - 2);
    }
}
module.exports = Tools