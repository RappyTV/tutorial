const { Client, ButtonInteraction, Message, GuildMember, User } = require("discord.js");

module.exports = {
    id: '18+',

    /**
     * 
     * @param {Client} bot 
     * @param {ButtonInteraction} interaction 
     * @param {Message} message 
     * @param {GuildMember} member 
     * @param {User} user 
     */

    async execute(bot, interaction, message, member, user) {
        const role = `967450024063688795`;
        if(member.roles.cache.get(role)) return interaction.reply({ content: `Du bist bereits als über 18 registriert.` });
        member.roles.add(role);
        message.edit({ embeds: [message.embeds[0].setDescription(`Du bist jetzt als über 18 registriert.`).setTitle(`Erfolg ✅`)], components: [] });
        interaction.deferUpdate();
    }
}