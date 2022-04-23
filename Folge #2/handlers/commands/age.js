const { Client, Message, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: 'age',
    description: 'Gibt dir deine Altersrolle.',
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
        .setColor(0x0000ff)
        .setTitle(`Wie alt bist du?`)
        .setDescription(`Gib dir mit den Buttons deine Altersrolle.`);

        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setLabel(`unter 18`)
            .setStyle(`PRIMARY`)
            .setCustomId(`18-`),
            new MessageButton()
            .setLabel(`über 18`)
            .setStyle(`PRIMARY`)
            .setCustomId(`18+`)
        )

        message.reply({ embeds: [embed], components: [row] });
    }
}