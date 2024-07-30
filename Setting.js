const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════,[Make sure you put all values in "" , '']\\
global.owner = process.env.OWNER_NUMBER || '94750625375' ; // Add Your Number without +
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sandaru:sandu123@cluster0.piqcnbr.mongodb.net/" ; // put mongodb key here
global.port=5000  ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363221057889216@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'94750625375@s.whatsapp.net' ;
global.email = 'sithumkalhara271@gmail.com' ; 
global.github = 'https://github.com/Sithuwa/SITHU-MD' ;
global.location = 'Ampara' ;
global.timezone  = process.env.TIME_ZONE || 'Asia/Colombo' //add correct timezone or leave it same , otherwise you get erros
global.gurl = 'https://www.youtube.com/@SITHUWA-MD' ; 
global.sudo =  process.env.SUDO || "94750625375" ; // Do not change it
global.devs = "94761516805"; //Dont change it From here
global.mztit = process.env.SKTIT ||"💛SITHUWA💛", // add your title here
global.Gname = process.env.GNAME ||"sɪᴛʜᴜ-ᴍᴅ-sᴜᴘᴘᴏʀᴛ",
global.zyt = process.env.ZYT || 'https://www.youtube.com/@SITHUWA-MD',
global.waUrl = process.env.WAURL ||"https://chat.whatsapp.com/GmvpSn3gDvw0svXoknTDL9",
global.website = 'https://github.com/Sithuwa/SITHU-MD' ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/4ba85b752de56b77264c5.jpg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || 'SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0x6Z0xReFhoVS9oRnU3WVI4U3FyK054Qmpad3h6ZDdibE1wUk1GOG4xbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTQwYm9ZcnZoa2xsZFFOODNYWERaVTFVYmU4VzljeUNlRUg1a2d2MnIzRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQVB3M1lHWk0wYWNqNC9tNm9yNGN6MUpqZTUxWE1ZVDIxUEliekVQUDFVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvZi92QkJuajZPOTVOT0FWcXJ4cTZaL3BnMnkwbTFqcUQ2NmdTcHpzQ1RRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlKOGd0aUIrYkVFOU5zMUpybVRaeTdKYmdueGQ3ajFZUWVQcVUvSXJablk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRaVXkyZGU0ekxneW0yczJBRURZVzk4dXUrbm5XdlZYcFJ1TkFob0RNZ2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0RQTUJ1L0x5T3RxaGxOWXU4bFNXQXlpZHF2Z3ZsbmdpSHFyVHk1S00wZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZHg2SkFwZ21IQWR4a0s0cnJleWVHMWs3UWJxc2dnc0xuL2tMczhvdlFSQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitUM3pnVDVZamJVZlh5V3lieWt2NGhUeXdReFppM28yakRnMlNkb2lVT0pkR3FhM0twVFJaN1R0WlNEOVhvcHJJT0NHeGF2TjlEMzhIY0tRMi8wbmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ4LCJhZHZTZWNyZXRLZXkiOiJxZitqNmFxZjYycStuaVJNZG1QM3U0d0ZrNmJtcndVMXkwN0Y5UU4yWkcwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCTmxYdXUxalJrMl9VNjZxQWcwazdRIiwicGhvbmVJZCI6IjBhMTY4NWVhLTg2ZjAtNGJlZS1iYzA0LTJiZTYwY2EyY2RmNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkNHNVRW9jaC95QVltQnNHNms2Zm5jKzNpYVE9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InYzWEZ2eDFRMUVBVzcvNDV3ZEhrc0pQNjRKYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04ybXZ1NERFTlBRbWJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InlBNjl1TlVnckxWRUo3REtwMFExN2hUQ3QyTmp1OCs1azRPdUVjZm9xR2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjZTRHVUTlRCVTBvSGNXK3Q4TnZwYmNIcnZlVDVkdjVoUlI4OUwvZmJwUFNuaWVDUzlhUElab1RNU1hDdjdhM0xRRWFRMEN6VUU0TkJxZWFhTGRFRkRBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJTOWY3OW1Pbm1WQ0JVVFByWDN2b3ZnK2FUZzV1ejBUTDYvbFlzaDFJWG55b0JMQjhOQTF3cjUzeWtMa3dHVTVLNjVBWTlSUXJ4bmdMUy9CQXlFS1Zpdz09In0sIm1lIjp7ImlkIjoiOTQ3NzY0NTEwNTc6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNUkcuTklNQUxJS0EgR0VUSEFOSkFMSSBLIC4ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzY0NTEwNTc6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjZ092YmpWSUt5MVJDZXd5cWRFTmU0VXdyZGpZN3ZQdVpPRHJoSEg2S2hwIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMTgxNzE3fQ==',      //Put Your Session Id Here
  botname: process.env.BOT_NAME || 'sɪᴛʜᴜ_ᴍᴅ',  // add the botname you want
  ownername:  process.env.OWNER_NAME || `ツ PROFESH RASH`, // add your name
  author:  process.env.PACK_AUTHER || '𝚂𝙸𝚃𝙷𝚄𝙼 𝙺𝙰𝙻𝙷𝙰𝚁𝙰', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'true', // if it true it automatically views status and send status in your inbox
  packname:  process.env.PACK_NAME || "sɪᴛʜᴜ_ᴍᴅ" , 
  autoreaction: process.env.AUTO_REACTION || 'true', // if it true it will react to all messages
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true', // it will show always online, false it if you dont want
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false', // it will read all your messages, false it if you dont want
  autovoice: process.env.AUTO_VOICE || 'true',
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 2,
  disablepm: process.env.DISABLE_PM || "false", // if true it will disable your pm
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true', 
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'Main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "34wcCGPoe3yaGtpiBZgx4SN7", // add your remove bg key if you have it
  caption :process.env.CAPTION || "\t*★ᴘᴏᴡᴇʀᴇᴅ ʙʏ★ sɪᴛʜᴜ-ᴍᴅ* ",
  promote_demote_messages : process.env.PROMOTE_DEMOTE_MESSAGES || 'true' ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' , // add your openai key if you have it
  VERSION: process.env.VERSION || '𝚅.𝟷.𝟸.𝟽',
  LANG: process.env.THEME|| 'SITHU_MD',
  menu : process.env.MENU || '', // Not Available in current Version
  WORKTYPE: process.env.WORKTYPE || 'public' // if private only you can use your bot, if public everyone use your bot
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
