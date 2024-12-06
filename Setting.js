const fs = require('fs-extra')
//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '923048666850' ;
global.mongodb = process.env.MONGODB_URI || "" ; 
global.port=5000  ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363169665426586@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363169665426586@g.us' ;
global.email = 'astromedia0010@outlook.com' ; 
global.github = 'https://github.com/Astropeda/Asta-Md' ;
global.location = 'Nigeria Lagos' ;
global.timezone  = process.env.TIME_ZONE || 'Africa/Lagos'
global.gurl = '' ; 
global.sudo =  process.env.SUDO || "2348039607375" ;
global.devs = "2348039607375"; //Dont change it
global.mztit = process.env.MZTIT ||"Asta-Md", 
global.Gname = process.env.GNAME ||"Asta-Md-sᴜᴘᴘᴏʀᴛ",
global.zyt = process.env.ZYT || '1',
global.waUrl = process.env.WAURL ||"",
global.website = '' ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || '' ;
module.exports = {
  sessionName: process.env.SESSION_ID || 'SUHAIL_13_21_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTczLFxuICAgICAgICA1NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ4LFxuICAgICAgICA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDcsXG4gICAgICAgIDIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkyLFxuICAgICAgICAzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDc3LFxuICAgICAgICA4NixcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAwLFxuICAgICAgICA4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDg0LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxODksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk0LFxuICAgICAgICAyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDYxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MixcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDczLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3LFxuICAgICAgICA1MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDYxLFxuICAgICAgICA0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDY0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzLFxuICAgICAgICA4NixcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDc3LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzNixcbiAgICAgICAgMTQxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODIsXG4gICAgICAgIDYyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6eEZpNnZ3UzBmaGJUcW5oVUlWNXlNWEhzdWQ5RUFCTFp2LzVPL2RaOGRzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA0ODY2Njg1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUFENTRBNDM2NTExOTY2REQzRDUwMzc2OEZBNkQzQ0VcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzNDkxMjg1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1GMnlqel9xUU9lV3hvYUs1T3lKUlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWNlYzY4NmItNjI4NS00NDVhLTg4NmYtZGJjNTRkNDQyYWI0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOSxcbiAgICAgIDM5LFxuICAgICAgMTI0LFxuICAgICAgMTYzLFxuICAgICAgMTIsXG4gICAgICAxNjMsXG4gICAgICAxODksXG4gICAgICAxNSxcbiAgICAgIDQyLFxuICAgICAgODAsXG4gICAgICA2OCxcbiAgICAgIDIwNixcbiAgICAgIDI0LFxuICAgICAgMjEsXG4gICAgICAxNDIsXG4gICAgICAxNTAsXG4gICAgICAyMDEsXG4gICAgICAyMDQsXG4gICAgICAxMzcsXG4gICAgICAyMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQsXG4gICAgICAxODksXG4gICAgICA3MyxcbiAgICAgIDIzMixcbiAgICAgIDIwNixcbiAgICAgIDE0NixcbiAgICAgIDE1NixcbiAgICAgIDcwLFxuICAgICAgMTQwLFxuICAgICAgMTYyLFxuICAgICAgMjIxLFxuICAgICAgNzgsXG4gICAgICA0MyxcbiAgICAgIDE0NyxcbiAgICAgIDkzLFxuICAgICAgMTI2LFxuICAgICAgMTI0LFxuICAgICAgNzAsXG4gICAgICAzOSxcbiAgICAgIDk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBaWlc0RExSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNDg2NjY4NTA6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBQlUgQkFLQVJcIixcbiAgICBcImxpZFwiOiBcIjE0NjA3NjIwMDEwMTI1OjI4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lENnI4VUdFTTMweTdvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL3Y0ZUpZOXZhWTNkZUo3eVJSZ3FMWGZjSmhGUlFBTUlWdW5kMGdFSTZ4OD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaTFRvOHdoSHlOSVN1YTd0U1Riejc3S2JaMzArenU1eURaRGNsSlJabWUrU082UUN6N3h6MVNEV09yWmxWR2l4Tkk4elNLTlloZEZZS0w5SU1kcWZDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsRnRCOGt4N3hnQnl3Rmk5WG00azU5QUJTUkVHeFdRWjNMTnErVWg2TGphaWRaaUttYnlYU2p2QU9iUW5nVkxWNmNGL1BoM2xpWE95RnVHeENqTHNpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNDg2NjY4NTA6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNDkxMjgyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==',
  botname: process.env.BOT_NAME || 'Asta-Md',
  ownername:  process.env.OWNER_NAME || `Astro`,
  author:  process.env.PACK_AUTHER || 'Astro', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname:  process.env.PACK_NAME || "Asta-Md" , 
  autoreaction: process.env.AUTO_REACTION || 'true',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true', 
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'true',
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 2,
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true', 
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'Main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "34wcCGPoe3yaGtpiBZgx4SN7",
  caption :process.env.CAPTION || "\t*ᴘᴏᴡᴇʀᴇᴅ ʙʏ Asta-Md* ",
  promote_demote_messages : process.env.PROMOTE_DEMOTE_MESSAGES || 'true' ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' ,
  VERSION: process.env.VERSION || 'V.4.5.0',
  LANG: process.env.THEME|| 'Asta_Md',
  menu : process.env.MENU || '',
  WORKTYPE: process.env.WORKTYPE || 'private'
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
