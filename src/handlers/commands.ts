import { REST, Routes, ApplicationCommandType, Collection, Events, Client } from 'discord.js';
import config from '../config';
import { readdirSync } from 'fs';

export default (client: Client) => {
    const commands: any[] = [];
    client.commands = new Collection();

    readdirSync('./src/commands/slash').forEach(folder => {
        const commandFiles = readdirSync(`./src/commands/slash/${folder}`).filter(file => file.endsWith('.js') || file.endsWith('.ts'));
        for (const file of commandFiles) {
            import(`../commands/slash/${folder}/${file}`).then(command => {
                if (command.default.name && command.default.description) {
                    commands.push({
                        type: ApplicationCommandType.ChatInput,
                        name: command.default.name,
                        description: command.default.description,
                        options: command.default.options || []
                    });
                    client.commands.set(command.default.name, command.default);
                } else if (command.default.data?.name && command.default.data?.description) {
                    commands.push(command.default.data.toJSON());
                    client.commands.set(command.default.data.name, command.default);
                } else {
                    console.log(`The command ${file} is not working!`);
                }
            });
        }
    });

    client.once(Events.ClientReady, async client => {
        const rest = new REST({ version: '10' }).setToken(config.token);
        try {
            console.log(`Started refreshing ${commands.length} application (/) commands.`);
            const data = await rest.put(
                Routes.applicationCommands(client.user.id),
                { body: commands }
            ) as any[];
            console.log(`Successfully reloaded ${data.length} application (/) commands.`);
        } catch (error) {
            console.error(error);
        }
    });
};
