const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ayomide0001111@gmail.com"
global.location="san fransico,calfornia."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/

"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/califonia";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VajdUjO7tkj0v3rZHw3q";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VajdUjO7tkj0v3rZHw3q" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2349159180375" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";2349159180375
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : ";"2349159180375"




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_03_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxODUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNyxcbiAgICAgICAgNixcbiAgICAgICAgNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDU3LFxuICAgICAgICA2NixcbiAgICAgICAgNjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDcxLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDcyLFxuICAgICAgICA0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDgxLFxuICAgICAgICA3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDksXG4gICAgICAgIDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDksXG4gICAgICAgIDE3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICA4LFxuICAgICAgICAyNyxcbiAgICAgICAgNixcbiAgICAgICAgMjMzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzLFxuICAgICAgICA2MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgODQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDcyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDk3LFxuICAgICAgICA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWmgxRnpRano2azAvTzA3QlFod3ZUbGVLUmR1by9ScG96ZkRuR1BJN0pDQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY0JGLWZOMWFRc1c0dDBpQjdocEEtZ1wiLFxuICBcInBob25lSWRcIjogXCI5YjkzM2IzNS1hMjI3LTRmY2ItYWRlNC0zZjRiODMwMDk3YThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA3LFxuICAgICAgNSxcbiAgICAgIDE1NixcbiAgICAgIDE3NixcbiAgICAgIDE5OCxcbiAgICAgIDI0OSxcbiAgICAgIDIzMixcbiAgICAgIDE5NCxcbiAgICAgIDkxLFxuICAgICAgMjUsXG4gICAgICAxNSxcbiAgICAgIDIxMixcbiAgICAgIDE3NixcbiAgICAgIDU3LFxuICAgICAgMjQwLFxuICAgICAgNDIsXG4gICAgICAxNDgsXG4gICAgICA0MyxcbiAgICAgIDE0OSxcbiAgICAgIDE0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDEyMixcbiAgICAgIDgwLFxuICAgICAgNTcsXG4gICAgICAxMjUsXG4gICAgICAyMDAsXG4gICAgICAxNCxcbiAgICAgIDEzMyxcbiAgICAgIDIyLFxuICAgICAgMTQsXG4gICAgICAyMjMsXG4gICAgICA2LFxuICAgICAgMTIzLFxuICAgICAgMjE3LFxuICAgICAgMTkzLFxuICAgICAgMTk2LFxuICAgICAgNTUsXG4gICAgICAxOTAsXG4gICAgICA5NCxcbiAgICAgIDIwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJENjRTU0VSTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1OTE4MDM3NTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSXQncyBNZVwiLFxuICAgIFwibGlkXCI6IFwiMjIzMTc1NTYwNDM3ODM4OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVQ2N1BVR0VLRDNnN1VHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJHVFlRT1NZb0FCYkhFV1FYSDNRbnJEQUZXUHRNTW9PN1czdUozWDdjdzFjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImpXRCtnNkV3SzE4Y0F3dHdMeWVtalRMdG1CZ1ZrdXViV0d1a3NPQnd6aDlaNU9FSmxCUm5vbzNKQjVLT1A2bWUxWkN1Z1VzN01QdGVwd1JWZFBwdkJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInh4eTNDdnpYS2E1Z2ZuaXNyeEErTFUySVVRQ2ZuUzZyWG50OGR5RmU4RDFEVG1TNWsvWXJoeFBLU3dNWUR1Y2dxUVlScGhvRlJCeTJhL1g2UmJ4bmpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNTkxODAzNzU6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTgyNjIxMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZOUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRk5RLmpzb24iOiAie1wia2V5RGF0YVwiOlwiY0Nndm1KS0JOaUx1VXkwbXVuYnpDbkVua1YzVkF2MFJuVUZqek5LUWJ0cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODU3NzY0Njc2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE3NzM0NTMwODdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "Offical ay" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Official ay",
  packname: process.env.PACK_NAME || "ayo",
  botname : process.env.BOT_NAME  || "OAY",
  ownername:process.env.OWNER_NAME|| "Official ay",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
