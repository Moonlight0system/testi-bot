const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == ".help"){
        message.reply("Hi, how can I help you?")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == ".hug"){
        message.reply("https://tenor.com/view/monsters-inc-boo-hug-big-hug-gif-24350322")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "Welcome back"){
        message.reply("Welcome back to watch Mojo!")
    }
})



client.login(process.env.TOKEN)
