import { Client } from 'discord.js';
import { readdirSync } from 'fs';

export default (client: Client) => {    
    readdirSync('./src/commands/prefix').forEach(folder => {
        const commandFiles = readdirSync(`./src/commands/prefix/${folder}`).filter(file => file.endsWith('.js') || file.endsWith('.ts'));
        for (const file of commandFiles) {
            import(`../commands/prefix/${folder}/${file}`).then(commandModule => {
                const command = commandModule.default;
                if (command && command.name) {
                    client.prefix.set(command.name, command);
                } else {
                    console.log(`The prefix command ${file} is not working!`);
                }
            });
        }
    });
};
