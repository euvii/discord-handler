import { CommandInteraction } from "discord.js";

export default {
    name: 'test',
    description: 'test command',
    async execute(interaction: CommandInteraction) {
        await interaction.reply('test');
    }
};
