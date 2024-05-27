const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Future_Trends,    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function GODZILLA_BOT_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Godzilla_Bot = Godzilla_Bot({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Godzilla_Bot.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Godzilla_Bot.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Godzilla_Bot.ev.on('creds.update', saveCreds)
            Pair_Code_By_Godzilla_Bot.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Godzilla_Tech.sendMessage(Pair_Code_By_Godzilla_Bot.user.id, { text: '' + b64data });

               let GODZILLA_BOT_TEXT = `
*Pair Code Connected Successfully!*
*GODZILLA BOT*
______________________________________
╔════◇
║ *『 𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐂𝐇𝐎𝐎𝐒𝐈𝐍𝐆 𝐆𝐎𝐃𝐙𝐈𝐋𝐋𝐀 𝐁𝐎𝐓 』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚══════════════════════╝
╔═════◇
║  『••• 𝐆𝐎𝐃𝐙𝐈𝐋𝐋𝐀 𝐁𝐎𝐓 •••』
║
║❒ *Owner:* https://wa.me/message/OZTNJWQSS2LAM1
║❒ *Repo:* https://github.com/ItsFutureTrends/Godzilla-MD
║❒ *Wa Group:* ****coming soon****
║❒ *Wa Channel:* https://whatsapp.com/channel/0029VaaxfYH2ER6oOMkqFS3W
║
╚══════════════════════╝ 
_____________________________________

Don't Forget To Give Star GODZILLA BOT Repo`
 await Pair_Code_By_Godzilla_Bot.sendMessage(Pair_Code_By_Godzilla_Bot.user.id,{text: GODZILLA_BOT_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Godzilla_Bot.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    GODZILLA_BOT_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await GODZILLA_BOT_PAIR_CODE()
});
module.exports = router
