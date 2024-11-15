import { Events, Client, Interaction } from 'discord.js';

export default {
    name: Events.InteractionCreate,
    async execute(interaction: Interaction, client: Client) {
        if (interaction.isChatInputCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) return interaction.reply({ content: `No command matching ${interaction.commandName} was found.`, ephemeral: true });
            try {
                await command.execute(interaction, client);
            } catch (error) {
                interaction.reply({ content: `Error executing ${interaction.commandName}`, ephemeral: true });
                console.error(error);
            }
        } else if (interaction.isAutocomplete()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) return interaction.respond([]);
            try {
                await command.autocomplete(interaction, client);
            } catch (error) {
                console.error(error);
            }
        }
    }
};
