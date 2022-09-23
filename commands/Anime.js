function config(){
    return{
        "name": "Anime",
        "main": "Anime.js",
        "commandMap": {
            "anime": {
                "more": "",
                "des": "request anime full data",
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
    let { data } = await axios.get('https://gogoanime.herokuapp.com/anime-details/tokyo-ghoul')
    var title = data.animeTitle,
		type = data.type,
		releasedDate = data.releasedDate,
        status = data.status,
		otherNames = data.otherNames,
		synopsis = data.synopsis,
        totalEpisodes = data.totalEpisodes,
		genres = data.genres,
        img = data.animeImg
        api.sendMessage({
            body: '----Anime Details----\n\n' + `Name: ${title}\n` + `Type: ${type}\n` + `ReleasedDate: ${releasedDate}\n` + `Status: ${status}\n` + `OtherNames: ${otherNames}\n` + `TotalEpisodes: ${totalEpisodes}\n` + `Genres: ${genres}\n\n` + `Synopsis: ${synopsis}\n`,
            attachment: (await axios({
                url: img,
                method: "GET", 
                responseType: "stream"
            })).data
        }, event.threadID ,event.messageID);
    } else {
    try {
        var keyw = arg.slice(1).join(" ")
        let { data } = await axios.get(`https://gogoanime.herokuapp.com/anime-details/${keyw}`)
        var title = data.animeTitle,
		type = data.type,
		releasedDate = data.releasedDate,
        status = data.status,
		otherNames = data.otherNames,
		synopsis = data.synopsis,
        totalEpisodes = data.totalEpisodes,
		genres = data.genres,
        img = data.animeImg
        api.sendMessage({
            body: '----Anime Details----\n\n' + `Name: ${title}\n` + `Type: ${type}\n` + `ReleasedDate: ${releasedDate}\n` + `Status: ${status}\n` + `OtherNames: ${otherNames}\n` + `TotalEpisodes: ${totalEpisodes}\n` + `Genres: ${genres}\n\n` + `Synopsis: ${synopsis}\n`,
            attachment: (await axios({
                url: img,
                method: "GET", 
                responseType: "stream"
            })).data
        }, event.threadID ,event.messageID);
    } catch {
    api.sendMessage("Anime not found or AnimeId is wrong", event.threadID, event.messageID)
    }
    }
}
module.exports = {
    anime,
    config
};