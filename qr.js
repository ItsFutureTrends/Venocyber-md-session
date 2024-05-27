const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Future_Trends,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function GODZILLA_BOT_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Future_Trends = Future_Trends({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Future_Tech.ev.on('creds.update', saveCreds)
			Qr_Code_By_Future_Trends.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Future_Trends.sendMessage(Qr_Code_By_Future_Trends.user.id, { text: '' + b64data });
	
				   let GODZILLA_BOT_TEXT = `
*_You've used Qr Code for GODZILLA BOT_*
*_Connection successful_*
______________________________________
*_You have used Pair Code for GODZILLA BOT_*
*_Connection successful_*
______________________________________
╔════◇
║ *『 𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐂𝐇𝐎𝐎𝐒𝐈𝐍𝐆 𝐆𝐎𝐃𝐙𝐈𝐋𝐋𝐀 𝐁𝐎𝐓 』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚══════════════════════╝
╔═════◇
║  『••• 𝐆𝐎𝐃𝐙𝐈𝐋𝐋𝐀 𝐌𝐃 •••』
║
║❒ *Owner:* https://wa.me/message/OZTNJWQSS2LAM1
║❒ *Repo:* _https://github.com/ItsFutureTrends/Godzilla-MD
║❒ *Wa Group:* ****
║❒ *Wa Channel:* https://whatsapp.com/channel/0029VaaxfYH2ER6oOMkqFS3W
║
╚══════════════════════╝ 
_____________________________________
	
 `Don't Forget To Give Star To Godzilla MD Repo`
	 await You_have_used_Qr_Code_for_GODZILLA_BOT.sendMessage You_have_used_Qr_Code_for_GODZILLA_BOT.(.user.id,{text:GODZILLA_MD_TEXT},{quoted:session})



					await delay(100);
					await You_have_used_Qr_Code_for_GODZILLA_BOT.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					GODZILLA_BOT_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "TRY LINKING GODZILLA LATER"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await GODZILLA_BOT_QR_CODE()
});
module.exports = router
