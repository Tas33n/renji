function config(){
    return{
        "name": "Trickbd",
        "main": "Trickbd.js",
        "commandMap": {
            "tbd": {
                "more": "",
                "des": "request tbd full data",
                "func": "tbd"
            }
        },
        "nodeDepends":{
            "axios" : "",
            "request" : "",
            "fs" : ""
        },
        "author": "Tas33n",
        "version": "0.0.1"
    }
}
async function tbd(event,api) {
    var axios = require("axios");
    var fs = require("fs")
    var request = require("request")
    var arg = event.body.slice(global.config.prefix.length).trim().split(/ +/);
    if (!arg[1]) {
    let { data } = await axios.get('https://redthryssa.xyz/trickbd.php')
    var title = data[156]["title"],
        id = data[156]["href"],
        title1 = data[166]["title"],
        id1 = data[166]["href"],
        title2 = data[176]["title"],
        id2 = data[176]["href"],
        title3 = data[186]["title"],
        id3 = data[186]["href"],
        title4 = data[196]["title"],
        id4 = data[196]["href"],
        title5 = data[206]["title"],
        id5 = data[206]["href"],
        title6 = data[216]["title"],
        id6 = data[216]["href"],
        title7 = data[226]["title"],
        id7 = data[226]["href"],
        title8 = data[236]["title"],
        id8 = data[236]["href"],
        title9 = data[246]["title"],
        id9 = data[246]["href"],
        title10 = data[256]["title"],
        id10 = data[256]["href"],
        title11 = data[266]["title"],
        id11 = data[266]["href"]
        api.sendMessage({
            body: '---Trickbd Latest posts---\n\n' + `id: ${id}\n` + `Post: ${title}\n\n` + `id: ${id1}\n` + `Post: ${title1}\n\n` + `Id: ${id2}\n` + `Post: ${title2}\n\n` + `Id: ${id3}\n` + `Post: ${title3}\n\n` + `Id: ${id4}\n` + `Post: ${title4}\n\n` + `Id: ${id5}\n` + `Post: ${title5}\n\n` + `Id: ${id6}\n` + `Post: ${title6}\n\n` + `Id: ${id7}\n` + `Post: ${title7}\n\n` + `Id: ${id8}\n` + `Post: ${title8}\n\n` + `Id: ${id9}\n` + `Post: ${title9}\n\n` + `Id: ${id10}\n` + `Post: ${title10}\n\n` + `Id: ${id11}\n` + `Post: ${title11}\n\n`,
        }, event.threadID ,event.messageID);
    } else {
    try {
        var keyw = arg.slice(1).join(" ")
        let { data } = await axios.get(`https://redthryssa.xyz/post.php?id=${keyw}`)
        var post = data[0]["post"]
        api.sendMessage({
            body: '----Post Content----\n\n' + `Content: ${post}`,}, event.threadID ,event.messageID);
    } catch {
    api.sendMessage("content not found", event.threadID, event.messageID)
    }
    }
}
module.exports = {
    tbd,
    config
};