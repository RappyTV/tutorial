const { Client, ButtonInteraction, Message, Permissions } = require("discord.js");

module.exports = {
    id: `test`,

    /**
     * 
     * @param {Client} bot 
     * @param {ButtonInteraction} interaction 
     * @param {Message} message 
     * @param {String} prefix 
     */

    async execute(bot, interaction, message, prefix) {
        if(interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return interaction.reply({ content: `Du hast das Admin-Recht!` });
        else return interaction.reply({ content: `Du hast __nicht__ das Admin-Recht!` });
    }
}