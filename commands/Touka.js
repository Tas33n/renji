function config(){
    return{
        "name": "touka",
        "main": "touka.js",
        "commandMap": {
            "touka": {
                "more": "[text]",
                "des": "touka",
                "func": "touka"
            }
        },
        "nodeDepends":{
            "axios" : ""
        },
        "noPrefix": "toukadata",
        "author": "JustGon",
        "version": "0.0.1"
    }
}
async function touka(event, api) {
    !global.data.touka ? global.data.touka = {} : "";
    !global.data.touka[event.threadID] ? global.data.touka[event.threadID] = false : "";
    var arg = event.body.slice(global.config.prefix.length).trim().split(/ +/);
    var axios = require("axios");
    var text = arg.slice(1).join(" ")
    if (text == "on") {
        if(global.data.touka[event.threadID] == true) {
            api.sendMessage("touka is already on", event.threadID, event.messageID)
        } else {
        global.data.touka[event.threadID] = true;
        api.sendMessage("Enabled touka In This Thread" , event.threadID, event.messageID);
        }
    } else if (text == "off") {
        if(global.data.touka[event.threadID] == false) {
            api.sendMessage("touka is already turned off", event.threadID, event.messageID)
        } else {
        global.data.touka[event.threadID] = false;
        api.sendMessage("touka Disabled In This Thread" , event.threadID, event.messageID);
        }
    } else {
        try {
            var { data } = await axios(`https://api.simsimi.net/v2/?text=${encodeURIComponent(text)}&lc=en`)
            api.sendMessage(data.success, event.threadID, event.messageID)
        } catch(error) {
            api.sendMessage(error, event.threadID, event.messageID)
        }
    }
}
async function toukadata(event, api) {
    var axios = require("axios")
    !global.data.touka ? global.data.touka = {} : "";
    !global.data.touka[event.threadID] ? global.data.touka[event.threadID] = false : "";
    if(event.type == "message" && global.data.touka[event.threadID] == true) {
        try {
            var { data } = await axios(`https://api.simsimi.net/v2/?text=${encodeURIComponent(event.body)}&lc=en`)
            api.sendMessage(data.success, event.threadID, event.messageID)
        } catch(error) {
            api.sendMessage(error, event.threadID, event.messageID)
        }
    } else {
        return;
    }
}
module.exports = {
    touka,
    config,
    toukadata
}
