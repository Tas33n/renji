const fs = require("fs");
const log = require("./function/log.js");
function getLoginFolder(){
    if(fs.existsSync("./loginfile")) {
        console.log('Login Folder Found');
    } else {
        try {
            fs.mkdirSync("./loginfile");
            console.log('Create Successful Login Folder!');
        } catch (err) {
            console.error(err);
            console.error("Cannot create folder Login!  Proceed to stop the bot to avoid unexpected errors...");
            process.exit(100);
        }
    }
}

module.exports = getLoginFolder