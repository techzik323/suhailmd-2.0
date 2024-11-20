const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "256751617788" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256751617788";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_12_11_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg5LFxuICAgICAgICAzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg4LFxuICAgICAgICA2NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODYsXG4gICAgICAgIDI1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDksXG4gICAgICAgIDk1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NixcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcxLFxuICAgICAgICA2MixcbiAgICAgICAgODgsXG4gICAgICAgIDQwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDAsXG4gICAgICAgIDMyLFxuICAgICAgICA1MSxcbiAgICAgICAgODcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA3NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDgwLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MixcbiAgICAgICAgMTk5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDczLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDk4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA3OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTksXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyLFxuICAgICAgICA2MixcbiAgICAgICAgNTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgxLFxuICAgICAgICAxODAsXG4gICAgICAgIDMwLFxuICAgICAgICA5MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMwLFxuICAgICAgICAxOCxcbiAgICAgICAgODMsXG4gICAgICAgIDQ2LFxuICAgICAgICA3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNixcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUW9yUmhUK0h6R2lHYUdseU9EUjVxcVdWU1B5dm02SVV6dlo2ZXdyWDBTaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMXFMdk9pTlVTa2FNY3BvaHQwZXZpUVwiLFxuICBcInBob25lSWRcIjogXCI0YzljMmZlMy03ZDM0LTQ2MjAtYWYzYS03YjFiNWM2NWRhN2JcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODcsXG4gICAgICAyMjIsXG4gICAgICAxODYsXG4gICAgICA5OCxcbiAgICAgIDg4LFxuICAgICAgMjU0LFxuICAgICAgMjI3LFxuICAgICAgNTQsXG4gICAgICAyMzksXG4gICAgICAxODYsXG4gICAgICAxMDYsXG4gICAgICAxMzcsXG4gICAgICAxNjIsXG4gICAgICA2NCxcbiAgICAgIDIzLFxuICAgICAgMTY5LFxuICAgICAgNTIsXG4gICAgICA5MSxcbiAgICAgIDI0NCxcbiAgICAgIDM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MixcbiAgICAgIDIxNyxcbiAgICAgIDIwNCxcbiAgICAgIDg5LFxuICAgICAgMjAsXG4gICAgICAxOTYsXG4gICAgICAyMTEsXG4gICAgICAyNyxcbiAgICAgIDE2OCxcbiAgICAgIDE4NixcbiAgICAgIDI0LFxuICAgICAgMTA5LFxuICAgICAgMjU0LFxuICAgICAgMjI5LFxuICAgICAgMTE4LFxuICAgICAgMjMwLFxuICAgICAgMTA0LFxuICAgICAgODIsXG4gICAgICAyLFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRHODFNWkI5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NTE2MTc3ODg6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1ODg3NTYzODYxNjMwMjoyMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOeThzYmNDRU9qWitia0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImF4Znh4eXZJUzgxWnFDL3FmbWN1ZU1WVWtXTG5vVmo5d3IzLzE4d2xTUTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR00xYlQ2NytHQUhLbWw4cUdkNS9nR2tVNEIvOFhXV0VWOFVsdHdCNVQwbitVQ0FCemtmWitSODlQZDRYcXpUdEZqUEZ5OVhUUGpHZkhBNEI5Y0doQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQ3NXQXprS0xxSmFWQzcyQVUvZmk0QVh0aHc5RWtxUDY3WDBkWkNCSjVRekNvRXRYR2IzN1RWVERsZkY2Q3hySnNFWmF0TlVPUTgxWHl6NktRSlR3Q2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzUxNjE3Nzg4OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyMTQ0MzY1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTE9MXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMT0wuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUWlNoWDZEdUJhaldvOXBKN3EyUWhNV0NjamRnQlVQckdndW1tUS9DR3VVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY1MzAyNDg1OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMjE0Mzc1ODY4NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ZIK-MD",
  ownername:process.env.OWNER_NAME|| "ZIK",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
