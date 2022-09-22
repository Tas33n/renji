const fs = require("fs");
const path = require("path");
var stripBom = require("strip-bom");
const log = require("./function/log.js");
var originalconfig = {
    botname: "Touka",
    admin: "100023553541678",
    prefix: ".",
    logEvent: true,
    seflListen: true,
    spotify : {
        clientId: "97c3e7bd62554a2089e037cb7c1f8836",
        clientSecret: "b6609e7258154766822ca43565fa8932"
    },
    lang : "en_US"
}
function getCF(){
    if (fs.existsSync("./config.json")) {
        console.log('Config File Found!');
        try{
            var rt = JSON.parse(stripBom(fs.readFileSync(path.join(__dirname, "config.json"), {encoding: "utf8"})));
            return rt;
        } catch (err){
            console.error(err);
            console.error("File Config data could not be read!  Proceed to stop the bot to avoid unexpected errors...");
            process.exit(100);
        }
    } else if (!fs.existsSync("./config.json")) {
        log.err('Config Not Found!')
        log.loaded('Initialize Config File..');
        try{
            fs.writeFileSync(path.join(__dirname, "config.json"), JSON.stringify(originalconfig, null, 4)); 
            log.loaded('Create Config File Successfully!')
        } catch (_) {
            log.err("Error Creating Config!");
        }
        try{
            var rt = JSON.parse(stripBom(fs.readFileSync(path.join(__dirname, "config.json"), {encoding: "utf8"})));
            return rt;
        } catch (err){
            console.error(err);
            console.error("File Config data could not be read!  Proceed to stop the bot to avoid unexpected errors...");
            process.exit(100);
        }
    }
}

module.exports = getCF;
