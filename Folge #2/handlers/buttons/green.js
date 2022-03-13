const { Client, ButtonInteraction, Message } = require("discord.js");

module.exports = {
    id: `green`,

    /**
     * 
     * @param {Client} bot 
     * @param {ButtonInteraction} interaction 
     * @param {Message} message 
     * @param {String} prefix 
     */

    async execute(bot, interaction, message, prefix) {
        interaction.reply({ content: `Du hast den grünen Knopf angeklickt!`, ephemeral: true });
    }
}