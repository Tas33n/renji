function config(){
    return{
        "name": "Animesrc",
        "main": "Animesrc.js",
        "commandMap": {
            "animesrc": {
                "more": "",
                "des": "request animesrc data",
                "func": "animesrc"
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
async function animesrc(event,api) {
    var axios = require("axios");
    var fs = require("fs")
    var request = require("request")
    var arg = event.body.slice(global.config.prefix.length).trim().split(/ +/);
    if (!arg[1]) {
    let { data } = await axios.get('https://gogoanime.herokuapp.com/search?keyw=tokyo ghoul')
    var title = data[0]["animeTitle"],
        status = data[0]["status"],
        id = data[0]["animeId"],
        img = data[0]["animeImg"],
        title1 = data[1]["animeTitle"],
        status1 = data[1]["status"],
        id1 = data[1]["animeId"],
        img1 = data[1]["animeImg"],
        title2 = data[2]["animeTitle"],
        status2 = data[2]["status"],
        id2 = data[2]["animeId"],
        img2 = data[2]["animeImg"],
        title3 = data[3]["animeTitle"],
        status3 = data[3]["status"],
        id3 = data[3]["animeId"],
        img3 = data[3]["animeImg"],
        title4 = data[4]["animeTitle"],
        status4 = data[4]["status"],
        id4 = data[4]["animeId"],
        img4 = data[4]["animeImg"],
        title5 = data[5]["animeTitle"],
        status5 = data[5]["status"],
        id5 = data[5]["animeId"],
        img5 = data[5]["animeImg"],
        title6 = data[6]["animeTitle"],
        status6 = data[6]["status"],
        id6 = data[6]["animeId"],
        img6 = data[6]["animeImg"]
        api.sendMessage({
            body: '---Anime search 🔍---\n\n' + `Name: ${title}\n` + `Anime-id: ${id}\n` + `${status}\n\n` + `Name: ${title1}\n` + `Anime-id: ${id1}\n` + `${status1}\n\n` + `Name: ${title2}\n` + `Anime-id: ${id2}\n` + `${status2}\n\n` + `Name: ${title3}\n` + `Anime-id: ${id3}\n` + `${status3}\n\n` + `Name: ${title4}\n` + `Anime-id: ${id4}\n` + `${status4}\n\n` + `Name: ${title5}\n` + `Anime-id: ${id5}\n` + `${status5}\n\n` + `Name: ${title6}\n` + `Anime-id: ${id6}\n` + `${status6} `,
            attachment: (await axios({
                url: img,
                method: "GET", 
                responseType: "stream"
            },
            {
                url: img1,
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
        img = data[0]["animeImg"],
        title1 = data[1]["animeTitle"],
        status1 = data[1]["status"],
        id1 = data[1]["animeId"],
        img1 = data[1]["animeImg"],
        title2 = data[2]["animeTitle"],
        status2 = data[2]["status"],
        id2 = data[2]["animeId"],
        img2 = data[2]["animeImg"],
        title3 = data[3]["animeTitle"],
        status3 = data[3]["status"],
        id3 = data[3]["animeId"],
        img3 = data[3]["animeImg"],
        title4 = data[4]["animeTitle"],
        status4 = data[4]["status"],
        id4 = data[4]["animeId"],
        img4 = data[4]["animeImg"],
        title5 = data[5]["animeTitle"],
        status5 = data[5]["status"],
        id5 = data[5]["animeId"],
        img5 = data[5]["animeImg"],
        title6 = data[6]["animeTitle"],
        status6 = data[6]["status"],
        id6 = data[6]["animeId"],
        img6 = data[6]["animeImg"]
        api.sendMessage({
            body: '---Anime search 🔍---\n\n' + `Name: ${title}\n` + `Anime-id: ${id}\n` + `${status}\n\n` + `Name: ${title1}\n` + `Anime-id: ${id1}\n` + `${status1}\n\n` + `Name: ${title2}\n` + `Anime-id: ${id2}\n` + `${status2}\n\n` + `Name: ${title3}\n` + `Anime-id: ${id3}\n` + `${status3}\n\n` + `Name: ${title4}\n` + `Anime-id: ${id4}\n` + `${status4}\n\n` + `Name: ${title5}\n` + `Anime-id: ${id5}\n` + `${status5}\n\n` + `Name: ${title6}\n` + `Anime-id: ${id6}\n` + `${status6} \n\n` + `use .anime Anime-id to get more info`,
            attachment: (await axios({
                url: img,
                method: "GET", 
                responseType: "stream"
            })).data
        }, event.threadID ,event.messageID);
    } catch {
    api.sendMessage("Anime not found or doesn't exist", event.threadID, event.messageID)
    }
    }
}
module.exports = {
    animesrc,
    config
};