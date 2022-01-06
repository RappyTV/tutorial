const { Client, Message, MessageEmbed } = require("discord.js");
const random = require('random');

module.exports = {
    name: 'iq',
    description: 'Zeigt den IQ eines Users an lol.',
    aliases: [],

    /**
     * 
     * @param {Client} bot 
     * @param {Message} message 
     * @param {String[]} parts 
     * @param {String} prefix 
     */

    async execute(bot, message, parts, prefix) {


        if(message.mentions.members.first()) {

            const member = message.mentions.members.first();

            let iq;
            if(member.user.id == '845618364546416653') iq = random.int(0, 10);
            else iq = random.int(50, 200)

            const embed = new MessageEmbed()
                .setAuthor({ name: member.user.tag, iconURL: member.user.displayAvatarURL({ dynamic: true }) })
                .setTitle(`IQ von ${member.user.username}:`)
                .setDescription(`IQ = ${iq}`)
                .setColor(`#69e3e2`);

            message.reply({
                embeds: [embed]
            })
        } else {
            let iq;
            if(message.author.id == '845618364546416653') iq = random.int(0, 10);
            else iq = random.int(50, 200);

            const embed = new MessageEmbed()
                .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
                .setTitle(`IQ von ${message.author.username}:`)
                .setDescription(`IQ = ${iq}`)
                .setColor(`#69e3e2`);

            message.reply({
                embeds: [embed]
            })
        }
    }
}