function config(){
    return{
        "name": "Girl",
        "main": "Girl.js",
        "commandMap": {
            "girl": {
                "more": "",
                "des": "Request a girl photo",
                "func": "girl"
            }
        },
        "nodeDepends":{
            "axios" : ""
        },
        "author": "tas33n",
        "version": "0.0.1"
    }
}

async function girl(event, api){
    var axios = require("axios");
    try {
    var girl = {
        body: "Wanna go out with me😘?\nSike , Die Virgin!\nheheh🤣😂",
        attachment: (await axios({
            url: (await axios('https://api-dien.senthanh20055.repl.co/images/girl')).data.url,
            method: "GET", 
            responseType: "stream"
        })).data
        
    }
    api.sendMessage(girl ,event.threadID, event.messageID);
    } catch(err) {
        api.sendMessage(err ,event.threadID, event.messageID);
    }
    }

module.exports = {
    girl,
    config
};