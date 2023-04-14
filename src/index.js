require("dotenv").config();

const { Client, IntentsBitField } = require("discord.js");

// client is the bot instance //
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildEmojisAndStickers,
    IntentsBitField.Flags.MessageContent,
  ],
});

// c is client instance
client.on("ready", (c) => {
  console.log(`${c.user.username} is ready!`);
});

// prevents the bot from endlessly replying to itself
client.on("messageCreate", (message) => {
  if (message.author.bot) return;
});

// message is the message the user types in the discord server
client.on("messageCreate", (message) => {
  if (message.content === "hello") {
    message.reply("Howdy hey! I'm a bot!");
  }
});

// from the .env file --> keep it secret keep it safe
client.login(process.env.DISCORDJS_BOT_TOKEN);
