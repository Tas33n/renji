function config(){
    return{
        "name": "Quote",
        "main": "Quote.js",
        "commandMap": {
            "quote": {
                "more": "",
                "des": "request anime quote",
                "func": "quote"
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
async function quote(event,api) {
    var axios = require("axios");
    var fs = require("fs")
    var request = require("request")
    var arg = event.body.slice(global.config.prefix.length).trim().split(/ +/);
    if (!arg[1]) {
    let { data } = await axios.get('https://api.rei.my.id/v3/quotes')
    var quot = data.quote,
        anime = data.anime,
        name = data.name
        api.sendMessage({
            body: ``Quote: ${quot}\n` + `Anime: ${anime}\n` + `Name : ${name}\n\n`,
            .data
        }, event.threadID ,event.messageID);
    }  catch {
    api.sendMessage("null", event.threadID, event.messageID)
    }
    }
}
module.exports = {
    quote,
    config
};