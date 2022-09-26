function config(){
    return{
        "name": "Quote",
        "main": "Quote.js",
        "commandMap": {
            "quote": {
                "more": "",
                "des": "request anime full data",
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
    var qt = data.quote,
        nm = data.name,
        an = data.anime
        api.sendMessage({
            body: `Quote: ${qt}\n\n` + `~ ${nm}\n`,
            }, event.threadID ,event.messageID);
    }
}
module.exports = {
    quote,
    config
};