function config(){
    return{
        "name": "Waifu",
        "main": "Waifu.js",
        "commandMap": {
            "waifu": {
                "more": "[type]",
                "des": "Request waifu",
                "func": "waifu"
            }
        },
        "nodeDepends":{
            "axios" : ""
        },
        "author": "tas33n",
        "version": "0.0.1"
    }
}
async function waifu(event, api){
    var args = event.body.slice(global.config.prefix.length).trim().split(/ +/);
    var axios = require("axios");
          if (!args[1]) {
			  var img = {
				body: "",
				attachment: (await axios({
					url: (await axios(`https://api.waifu.pics/sfw/waifu`)).data.url,
					method: "GET", 
					responseType: "stream"
				})).data
				
			}
			api.sendMessage(img ,event.threadID, event.messageID);
		} else {
			var waifu = args.slice(1).join(" ")
			try {
				var img = {
					body: "",
					attachment: (await axios({
						url: (await axios(`https://api.waifu.pics/sfw/${waifu}`)).data.url,
						method: "GET", 
						responseType: "stream"
					})).data
					
				}
				api.sendMessage(img ,event.threadID, event.messageID);
			} catch {
				var waifu = args.slice(1).join(" ")
			try {
				var img = {
					body: "",
					attachment: (await axios({
						url: (await axios(`http://nekos.life/api/v2/img/${waifu}`)).data.url,
						method: "GET", 
						responseType: "stream"
					})).data
					
				}
				api.sendMessage(img ,event.threadID, event.messageID);
			} catch {
				api.sendMessage("No waifu 🥲 \n category: waifu, neko, shinobu, megumin, bully, cuddle, cry, kiss, lick, hug, awoo, pat, smug, bonk, yeet, blush, smile, wave, highfive, handhold, nom, bite, glomp, slap, kill, kick, happy, wink, poke, dance, cringe 'smug', 'woof', 'gasm', '8ball', 'goose', 'cuddle', 'avatar', 'slap', 'v3', 'pat', 'gecg', 'feed', 'fox_girl', 'lizard', 'neko', 'hug', 'meow', 'kiss', 'wallpaper', 'tickle', 'spank', 'waifu', 'lewd', 'ngif' ",event.threadID, event.messageID)
			}
			}
		}
}

module.exports = {
    waifu,
    config
};