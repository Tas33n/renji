const fs = require("fs");
const path = require("path");
var stripBom = require("strip-bom");
const log = require("./function/log.js");
var originaldata = {}

function getDT(){
    if (fs.existsSync("./data.json")) {
        console.log('File Data Found!');
        try{
            var rt = JSON.parse(stripBom(fs.readFileSync(path.join(__dirname, "data.json"), {encoding: "utf8"})));
            return rt;
        } catch (err){
            console.error(err);
            console.error("File Data could not be read!  Proceed to stop the bot to avoid unexpected errors..");
            process.exit(101);
        }
    } else if (!fs.existsSync("./data.json")) {
        log.err('No Data Found!')
        log.loaded('Initialize Data File..');
        try{
            fs.writeFileSync(path.join(__dirname, "data.json"), JSON.stringify(originaldata, null, 4)); 
            log.loaded('Create Data File Successfully!')
        } catch (_) {
            log.err("Error When Creating Data!");
        }
        try{
            var rt = JSON.parse(stripBom(fs.readFileSync(path.join(__dirname, "data.json"), {encoding: "utf8"})));
            return rt;
        } catch (err){
            console.error(err);
            console.error("File Data could not be read!  Proceed to stop the bot to avoid unexpected errors...");
            process.exit(101);
        }
    }
}

module.exports = getDT;
