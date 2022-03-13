const { Client, ButtonInteraction, Message } = require("discord.js");

module.exports = {
    id: `grey`,

    /**
     * 
     * @param {Client} bot 
     * @param {ButtonInteraction} interaction 
     * @param {Message} message 
     * @param {String} prefix 
     */

    async execute(bot, interaction, message, prefix) {
        interaction.reply({ content: `Du hast den grauen Knopf angeklickt!`, ephemeral: true });
    }
}