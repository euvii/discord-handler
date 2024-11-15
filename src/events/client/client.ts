import { Events, Client, ActivityType } from 'discord.js';

export default {
    name: Events.ClientReady,
    async execute(client: Client) {
        console.log(`Logged in as ${client.user?.tag}!`);
        client.user?.setPresence({ activities: [{ name: 'with you', type: ActivityType.Watching }] });
    }
};