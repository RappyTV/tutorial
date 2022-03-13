// Dependencies

const { Client, Intents, Collection, Interaction } = require('discord.js');
const bot = new Client({
    restTimeOffset: 0,
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_PRESENCES
    ]
})
const { readdirSync } = require('fs');
const config = require('./config.json');

// Command Handler

bot.commands = new Collection();
const commandDir = readdirSync('./handlers/commands').filter(file => file.endsWith('.js'));

for(const file of commandDir) {
    const command = require(`./handlers/commands/${file}`);

    bot.commands.set(command.name, command);
}

// Button Handler

bot.buttons = new Collection();
const buttonDir = readdirSync('./handlers/buttons/').filter(file => file.endsWith('.js'));

for(const file of buttonDir) {
    const button = require(`./handlers/buttons/${file}`);

    bot.buttons.set(button.id, button);
}

// Das ready Event

bot.on('ready', async() => {
    console.log(`Der Bot ist nun eingeloggt! Name: ${bot.user.tag}`);

    bot.user.setPresence({
        activities: [{
            name: 'mit RappyTV#6969',
            type: 'PLAYING'
        }],
        status: 'idle'
    })
})

// Das message Event

bot.on('messageCreate', async message => {
    let parts = message.content.split(/ +/);
    if(message.channel.type == 'DM') return;
    if(!message.content.startsWith(config.prefix)) return;
    if(message.author.bot) return;

    let cmd = message.content.slice(config.prefix.length).trim().split(/ +/).shift().toLowerCase();
    let comm = bot.commands.get(cmd) || bot.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(comm) {
        comm.execute(bot, message, parts, config.prefix);
    } else {
        message.reply({ content: `Dieser Befehl existiert nicht!` });
    }
})

bot.on('interactionCreate', async (interaction) => {
    if(interaction.isButton()) {
        const { customId, user, member, message } = interaction;

        const btn = bot.buttons.get(customId);

        if(btn) {
            try {
                btn.execute(bot, interaction, message, config.prefix);
            } catch(err) {
                interaction.reply({ content: `Ein Fehler ist aufgetreten! Fehler: ||${err}||`, ephemeral: true });
            }
        } else {
            interaction.reply({ content: `Unbekannter Button!`, ephemeral: true });
        }
    }
})

// Loggt den Bot ein
bot.login(config.token);