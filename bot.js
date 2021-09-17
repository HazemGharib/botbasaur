require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE"]
});

const BULBASAUR_ROARS = ["Saur", "Saur Bulbasaur", "Bulba", "Saur Saur", "BULBASAURRRR"];

const isBulbasaurFavourite = (msg) =>
  (msg.content.includes("Love") || msg.content.includes("love")) &&
  (msg.content.includes("Bulbasaur") || msg.content.includes("bulbasaur"));

client.on("ready", () => {
  console.log("Our bot is ready to go!!!!");
  setInterval(() => {
    console.log("SLAP! Wake up Heroku");
  }, 1000 * 60 * 5);
});

client.on("messageDelete", (msg) => {
  if(!msg?.author?.bot) {
    msg.channel.send(BULBASAUR_ROARS[BULBASAUR_ROARS.length - 1]);
  }
});

client.on("message", (msg) => {
  if (isBulbasaurFavourite(msg)) {
    msg.react("❤️")
  }

  if (msg.mentions.has(client.user)) {
    const randomElement = BULBASAUR_ROARS[Math.floor(Math.random() * BULBASAUR_ROARS.length)];
    msg.channel.send(randomElement);
  }
});

client.login(process.env.BOT_TOKEN);
