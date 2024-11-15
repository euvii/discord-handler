import { Client } from 'discord.js';
import { readdirSync } from 'fs';

export default (client: Client) => {
    readdirSync('./src/events').forEach(folder => {
        const eventFiles = readdirSync(`./src/events/${folder}`).filter(file => file.endsWith('.ts'));
        for (const file of eventFiles) {
            import(`../events/${folder}/${file}`).then((event) => {
                if (event.default.name) {
                    if (event.default.once) {
                        client.once(event.default.name, (...args) => event.default.execute(...args, client));
                    } else {
                        client.on(event.default.name, (...args) => event.default.execute(...args, client));
                    }
                } else {
                    console.log(`The event ${file} is not working!`);
                }
            });
        }
    });
};
