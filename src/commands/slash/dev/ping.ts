import { SlashCommandBuilder, CommandInteraction } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Check the bot latency'),
    async execute(interaction: CommandInteraction) {
        await interaction.reply('Pong!');
    }
};
