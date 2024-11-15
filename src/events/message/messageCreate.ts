import { Events, Client, Message } from 'discord.js';
import config from '../../config';

export default {
    name: Events.MessageCreate,
    async execute(message: Message, client: Client) {
        if (config.prefix.some(prefix => message.content.startsWith(prefix))) {
            const args = message.content.slice(config.prefix.length).trim().split(/ +/);
            const command = args.shift()?.toLowerCase();
            try {
                if (command) {
                    const commandFiles = client.prefix.get(command) || client.prefix.find(cmd => cmd.aliases && cmd.aliases.includes(command));
                    if (!commandFiles) {
                        console.log(`[INFO] Command not found: ${command}`);
                        return;
                    }
                    await commandFiles.execute(client, message, args);
                }
            } catch (error) {
                console.error(error);
                message.reply('there was an error trying to execute that command!');
            }
        }
    }
};
