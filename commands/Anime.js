function config(){
    return{
        "name": "Anime",
        "main": "Anime.js",
        "commandMap": {
            "anime": {
                "more": "",
                "des": "request anime data",
                "func": "anime"
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
async function anime(event,api) {
    var axios = require("axios");
    var fs = require("fs")
    var request = require("request")
    var arg = event.body.slice(global.config.prefix.length).trim().split(/ +/);
    if (!arg[1]) {
    let { data } = await axios.get('https://gogoanime.herokuapp.com/search?keyw=naruto')
    var title = data[0]["animeTitle"],
        status = data[0]["status"],
        id = data[0]["animeId"],
        img = data[0]["animeImg"]
        api.sendMessage({
            body: '----Anime info----\n\n' + `Name: ${title}\n` + `Anime-id: ${id}\n` + `${status}\n`,
            attachment: (await axios({
                url: img,
                method: "GET", 
                responseType: "stream"
            })).data
        }, event.threadID ,event.messageID);
    } else {
    try {
        var keyw = arg.slice(1).join(" ")
        let { data } = await axios.get(`https://gogoanime.herokuapp.com/search?keyw=${keyw}`)
        var title = data[0]["animeTitle"],
        status = data[0]["status"],
        id = data[0]["animeId"],
        img = data[0]["animeImg"]
        api.sendMessage({
            body: '----Anime info----\n' + `Name: ${title}\n` + `Anime-id: ${id}\n` + `${status}\n\n to get full details use .animsrc anime-id`,
            attachment: (await axios({
                url: img,
                method: "GET", 
                responseType: "stream"
            })).data
        }, event.threadID ,event.messageID);
    } catch {
    api.sendMessage("Anime not found or don't exist", event.threadID, event.messageID)
    }
    }
}
module.exports = {
    anime,
    config
};