import { Client, Message } from 'discord.js';

export default {
    name: 'ping',
    description: 'Checks bot latency',
    async execute(client: Client, message: Message, args: string[]) {
        const sent = await message.reply('Pinging...');
        const latency = sent.createdTimestamp - message.createdTimestamp;
        const apiLatency = Math.round(client.ws.ping);
        
        sent.edit(`Pong! Latency: ${latency}ms, API Latency: ${apiLatency}ms`);
    }
};
