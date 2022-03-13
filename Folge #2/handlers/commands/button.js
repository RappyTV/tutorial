const { Client, Message, MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: 'button',
    description: 'Testet Discords Button funktion.',
    aliases: [],

    /**
     * 
     * @param {Client} bot 
     * @param {Message} message 
     * @param {String[]} parts 
     * @param {String} prefix 
     */

    async execute(bot, message, parts, prefix) {
        const embed = new MessageEmbed()
        .setColor(0x69e3e2)
        .setTitle(`Testembed`)
        .setDescription(`Klicke auf die Knöpfe`);

        const test = new MessageButton()
        .setLabel(`Habe ich Admin?`)
        .setStyle(`PRIMARY`)
        .setCustomId(`test`);

        const remove = new MessageButton()
        .setLabel(`Buttons entfernen`)
        .setStyle(`DANGER`)
        .setCustomId(`removeButtons`);

        const edit = new MessageButton()
        .setLabel(`Button bearbeiten`)
        .setStyle(`SECONDARY`)
        .setCustomId(`editButton`);

        const row = new MessageActionRow()
        .addComponents(test, remove, edit);

        message.reply({ embeds: [embed], components: [row] });
    }
}