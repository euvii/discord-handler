import { Client, Collection } from 'discord.js';
import config from './config';
import { readdirSync } from 'fs';

declare module 'discord.js' {
    export interface Client {
        commands: Collection<string, any>;
        prefix: Collection<string, any>;
    }
}

const client = new Client({
    intents: 3276799
});

client.commands = new Collection();
client.prefix = new Collection();

readdirSync('./src/handlers').forEach(handler => {
    import(`./handlers/${handler}`).then(async (handlerModule) => {
        await handlerModule.default(client);
    });
});

client.login(config.token);
