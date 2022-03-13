const { Client, ButtonInteraction, Message, MessageActionRow } = require("discord.js");

module.exports = {
    id: `editButton`,

    /**
     * 
     * @param {Client} bot 
     * @param {ButtonInteraction} interaction 
     * @param {Message} message 
     * @param {String} prefix 
     */

    async execute(bot, interaction, message, prefix) {
        const button = message.components[0].components[0].setEmoji('😊').setDisabled(true);

        const row = new MessageActionRow()
        .addComponents(button, message.components[0].components[1], message.components[0].components[2]);

        message.edit({ embeds: message.embeds, components: [row] });
        interaction.deferUpdate();
    }
}